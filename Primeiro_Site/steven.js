function mostrarTexto(id) {
  document.querySelectorAll('.texto').forEach(div => {
    div.style.display = 'none';
  });
  const texto = document.getElementById(id);
  if (texto) texto.style.display = 'block';
}

document.getElementById('btnVoltar').addEventListener('click', () => {
  window.location.href = 'index.html';
});

document.querySelectorAll('button[data-texto]').forEach(botao => {
  botao.addEventListener('click', () => {
    mostrarTexto(botao.getAttribute('data-texto'));
  });
});
