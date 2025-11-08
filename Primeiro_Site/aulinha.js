document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll("button[data-texto]");
  const textos = document.querySelectorAll(".texto");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const id = botao.getAttribute("data-texto");

      textos.forEach(div => {
        if (div.id === id) {
          div.style.display = div.style.display === "none" ? "block" : "none";
        } else {
          div.style.display = "none";
        }
      });
    });
  });
});
