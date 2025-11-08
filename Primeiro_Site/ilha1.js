function mostrarTexto(id) {
  const textos = document.querySelectorAll('.texto');
  textos.forEach(t => {
    if (t.id === id) {
      t.style.display = (t.style.display === 'block') ? 'none' : 'block';
    } else {
      t.style.display = 'none';
    }
  });
}
