import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler } from '../server/contact-handler.mjs';

const env = {
  MAKE_WEBHOOK_URL: 'https://hook.us2.make.com/test-webhook',
  MAKE_API_KEY: 'test-secret-not-real',
};
const data = {
  nombre: ' Ana Pérez ', telefono: '+57 300 000 0000',
  correo: 'ana@example.com', tipo: 'Residencial', mensaje: 'Agua caliente en Bogotá.',
};
function request(body = data, options = {}) {
  return new Request('https://www.efienergetica.com/api/contacto', {
    method: 'POST',
    headers: { origin: 'https://www.efienergetica.com', 'content-type': 'application/json' },
    body: JSON.stringify(body),
    ...options,
  });
}

test('envía únicamente los campos permitidos y autentica solo desde el servidor', async () => {
  let calls = 0;
  const handler = createContactHandler({ env, fetchImpl: async (url, options) => {
    calls++;
    assert.equal(url, env.MAKE_WEBHOOK_URL);
    assert.equal(options.headers['x-make-apikey'], env.MAKE_API_KEY);
    assert.equal(options.redirect, 'error');
    assert.deepEqual(JSON.parse(options.body), { ...data, nombre: 'Ana Pérez' });
    return new Response('Accepted');
  } });
  const response = await handler(request({ ...data, extra: 'no reenviar' }));
  assert.equal(response.status, 200);
  assert.equal(calls, 1);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.ok(!(await response.text()).includes(env.MAKE_API_KEY));
});

test('rechaza métodos, orígenes, formatos, JSON inválido y datos inválidos sin llamar a Make', async () => {
  const handler = createContactHandler({ env, fetchImpl: () => assert.fail('No debe llamar a Make') });
  const cases = [
    [new Request('https://www.efienergetica.com/api/contacto'), 405],
    [request(data, { headers: { origin: 'https://otro.example', 'content-type': 'application/json' } }), 403],
    [request(data, { headers: { 'content-type': 'application/json' } }), 403],
    [request(data, { headers: { origin: 'https://www.efienergetica.com', 'content-type': 'text/plain' } }), 415],
    [request(data, { body: '{' }), 400],
    [request(null), 400],
    [request({ ...data, nombre: '  ' }), 400],
    [request({ ...data, correo: 'no-es-correo' }), 400],
    [request({ ...data, tipo: 'Inventado' }), 400],
    [request({ ...data, mensaje: 'x'.repeat(4001) }), 400],
    [request({ ...data, telefono: {} }), 400],
    [request({ ...data, mensaje: 'x'.repeat(17_000) }), 413],
  ];
  for (const [input, expected] of cases) {
    assert.equal((await handler(input)).status, expected);
  }
});

test('el campo trampa no dispara el webhook', async () => {
  const handler = createContactHandler({ env, fetchImpl: () => assert.fail('Bot') });
  assert.equal((await handler(request({ ...data, website: 'spam' }))).status, 200);
});

test('no envía sin configuración válida', async () => {
  for (const config of [{}, { ...env, MAKE_API_KEY: '' }, { ...env, MAKE_WEBHOOK_URL: 'https://otro.example' }]) {
    const handler = createContactHandler({ env: config, fetchImpl: () => assert.fail('Configuración inválida') });
    assert.equal((await handler(request())).status, 503);
  }
});

test('oculta respuestas de Make y errores de red, sin reintentar envíos', async () => {
  for (const failure of ['http', 'network']) {
    let calls = 0;
    const handler = createContactHandler({ env, fetchImpl: async () => {
      calls++;
      if (failure === 'network') throw new Error(env.MAKE_API_KEY);
      return new Response(env.MAKE_API_KEY, { status: 401 });
    } });
    const response = await handler(request());
    assert.equal(response.status, 502);
    assert.ok(!(await response.text()).includes(env.MAKE_API_KEY));
    assert.equal(calls, 1);
  }
});
