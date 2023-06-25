const errors = require('../misc/errors');
const WHITELIST = ["localhost"];

module.exports = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Permitir solicitudes sin origen (por ejemplo, solicitudes locales)

    const match = WHITELIST.find((domain) => origin.includes(domain)); // Verificar si el origen está en la lista blanca

    match ? callback(null, true) : callback(errors['cors']); // Llamar al callback con error de CORS si no se encuentra el origen en la lista blanca
  },
  credentials: true, // Permitir el envío de cookies
};
