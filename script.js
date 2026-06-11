const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

function sendMail(event){
  event.preventDefault();
  const nombre = document.querySelector('#nombre').value.trim();
  const tipo = document.querySelector('#tipo').value;
  const mensaje = document.querySelector('#mensaje').value.trim();
  const subject = encodeURIComponent(`Reporte Puerto de Chala - ${tipo}`);
  const body = encodeURIComponent(`Nombre: ${nombre}\nTipo de reporte: ${tipo}\n\nMensaje:\n${mensaje}`);
  window.location.href = `mailto:raichugn3090@gmail.com?subject=${subject}&body=${body}`;
}
