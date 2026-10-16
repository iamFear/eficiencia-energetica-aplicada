const MAX_BYTES = 16_384;
const projectTypes = new Set([
  'Residencial', 'Hotelero', 'Hospitalario o institucional',
  'Comercial', 'Piscina o jacuzzi', 'Otro',
]);

function reply(status, message, headers = {}) {
  return Response.json({ message }, {
    status,
    headers: { 'Cache-Control': 'no-store', ...headers },
  });
}

export function createContactHandler({ env = process.env, fetchImpl = fetch } = {}) {
  return async function contact(request) {
    if (request.method !== 'POST') {
      return reply(405, 'Método no permitido.', { Allow: 'POST' });
    }
    // No habilitar CORS: el formulario se envía desde el mismo sitio.
    if (request.headers.get('origin') !== new URL(request.url).origin) {
      return reply(403, 'Origen no permitido.');
    }
    if (request.headers.get('content-type')?.split(';')[0].trim() !== 'application/json') {
      return reply(415, 'Formato no permitido.');
    }
    if (Number(request.headers.get('content-length')) > MAX_BYTES) {
      return reply(413, 'El mensaje es demasiado largo.');
    }

    let data;
    try {
      const reader = request.body?.getReader();
      if (!reader) return reply(400, 'Faltan los datos de la consulta.');
      const chunks = [];
      let size = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > MAX_BYTES) {
          await reader.cancel();
          return reply(413, 'El mensaje es demasiado largo.');
        }
        chunks.push(Buffer.from(value));
      }
      data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch {
      return reply(400, 'No se pudieron leer los datos.');
    }
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return reply(400, 'Datos no válidos.');
    }
    // Campo trampa: no enviar entradas automatizadas a Make.
    if (data.website) return reply(200, 'Consulta recibida.');

    const payload = {};
    const limits = { nombre: 120, telefono: 40, correo: 254, tipo: 80, mensaje: 4000 };
    for (const [field, max] of Object.entries(limits)) {
      const value = data[field] ?? '';
      if (typeof value !== 'string' || value.length > max) {
        return reply(400, 'Revise los campos del formulario.');
      }
      payload[field] = value.trim();
    }
    if (!payload.nombre || !payload.mensaje ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.correo) ||
        !projectTypes.has(payload.tipo)) {
      return reply(400, 'Revise los campos obligatorios y el correo electrónico.');
    }

    const { MAKE_WEBHOOK_URL, MAKE_API_KEY } = env;
    try {
      const url = new URL(MAKE_WEBHOOK_URL);
      if (url.protocol !== 'https:' || url.hostname !== 'hook.us2.make.com' ||
          url.username || url.password || url.port || !MAKE_API_KEY) {
        return reply(503, 'El formulario no está disponible. Contáctenos por teléfono o correo.');
      }
    } catch {
      return reply(503, 'El formulario no está disponible. Contáctenos por teléfono o correo.');
    }

    try {
      const response = await fetchImpl(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-make-apikey': MAKE_API_KEY },
        body: JSON.stringify(payload),
        redirect: 'error',
        signal: AbortSignal.timeout(10_000),
      });
      // Nunca reenviar respuestas ni errores de Make: podrían contener secretos.
      await response.body?.cancel();
      if (!response.ok) return reply(502, 'No pudimos enviar la consulta. Intente más tarde.');
      return reply(200, 'Su consulta se envió correctamente. Pronto nos pondremos en contacto.');
    } catch {
      return reply(502, 'No pudimos confirmar el envío. Contáctenos por teléfono o correo.');
    }
  };
}
