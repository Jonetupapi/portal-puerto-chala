/* =====================================================
   PUERTO DE CHALA - JS PRINCIPAL
   Este script arma correos con mailto para páginas estáticas.
   Cambia el correo aquí si deseas recibir mensajes en otra bandeja.
   ===================================================== */
const CORREO_DESTINO = 'puertochalaoficial2026@yopmail.com';

function enviarPorCorreo(event, tipo){
  event.preventDefault();
  const form = event.target;
  const datos = new FormData(form);
  let cuerpo = `Tipo: ${tipo}\n\n`;
  for (const [clave, valor] of datos.entries()) cuerpo += `${clave}: ${valor}\n`;
  const asunto = encodeURIComponent(`[Puerto Chala] ${tipo}`);
  const body = encodeURIComponent(cuerpo);
  window.location.href = `mailto:${CORREO_DESTINO}?subject=${asunto}&body=${body}`;
}
