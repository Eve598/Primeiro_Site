class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  mostrarInfo() {
    return `${this.nome} custa R$ ${this.preco}`;
  }
}

const celular = new Produto("Celular", 1500);
const ps5 = new Produto("PlayStation 5", 3600);

function fazerLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagemLogin");

  if (email.trim() === "nhaaa@nhanha.com" && senha === "20/09/2008") {
    mensagem.innerText = "Login realizado com sucesso!";
    document.querySelector(".box-login").style.display = "none";
    document.getElementById("telaProdutos").style.display = "block";
  } else {
    mensagem.innerText = "Email ou senha incorretos.";
  }
}

function comprar(produto, preco = null) {
  if (preco === null) {
    alert("Você comprou: " + produto);
  } else {
    const desconto = 0.1;
    const precoComDesconto = preco * (1 - desconto);
    alert(`Você comprou: ${produto}\nPreço com 10% de desconto: R$ ${precoComDesconto.toFixed(2)}`);
  }
}
