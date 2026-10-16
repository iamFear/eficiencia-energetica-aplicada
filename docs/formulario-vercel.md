# Formulario en Vercel

El sitio sigue siendo estático. Vercel ejecuta `api/contacto.mjs` como una función Node.js; el navegador solo conoce `/api/contacto`.

## Activación

1. En Vercel → proyecto → Settings → Environment Variables, agregar:
   - `MAKE_WEBHOOK_URL`: la URL del webhook indicada en `.env.example`.
   - `MAKE_API_KEY`: la clave del webhook de Make (marcar como sensible).
2. Seleccionar Production y, si se probará allí, Preview. Volver a desplegar para aplicar las variables.
3. En Make, configurar esa misma clave en la autenticación del webhook y activar el escenario. Se envía en el encabezado `x-make-apikey`.
4. Enviar una consulta de prueba desde el despliegue y comprobar su recepción en Make.

No guardar la clave en Git ni usar variables `PUBLIC_`/`VITE_`. No se registra la información de contacto ni las respuestas de Make. Rotar la clave si se ha compartido fuera de un canal seguro.

El JSON contiene `nombre`, `telefono`, `correo`, `tipo` y `mensaje`. El mensaje de éxito confirma aceptación por el webhook, no la finalización del escenario.

La función valida los datos, limita el tamaño, verifica el origen y usa un campo trampa. Esto no sustituye una defensa contra bots: configurar una regla de rate limiting para `/api/contacto` en Vercel Firewall antes de exponerlo a tráfico elevado.

## Desarrollo y pruebas

- `npx vercel dev` ejecuta el sitio junto con la función. Configurar las variables en un archivo local ignorado `.env.local`, o descargarlas con Vercel CLI después de vincular el proyecto. `npm run dev` y `npm run preview` por sí solos no ejecutan funciones de Vercel.
- `node --test tests/contact-handler.test.mjs` verifica la función con peticiones simuladas, sin enviar datos a Make.
- `npm run build` verifica y genera el sitio estático.
