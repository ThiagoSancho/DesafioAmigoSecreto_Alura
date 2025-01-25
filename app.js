let listaAmigos = [];
let inputTextAmigo = document.getElementById("amigo");
let listTextAmigos = document.getElementById("listaAmigos");
let textResultado = document.getElementById("resultado");

inputTextAmigo.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    adicionarAmigo();
  }
});

function adicionarAmigo() {
  if (!inputTextAmigo.value) {
    alert("Nome não pode ser vazio!");
    return;
  }
  listaAmigos.push(inputTextAmigo.value);
  atualizarLista(inputTextAmigo.value);
  limparElemento("amigo");
}

function atualizarLista(nome) {
  let novaLinha = document.createElement("li");
  novaLinha.textContent = nome;

  listTextAmigos.appendChild(novaLinha);
}

function limparElemento(id) {
  let elemento = document.getElementById(id);
  elemento.value = "";
}

function sortearAmigo() {
  if (listaAmigos.length == 0) {
    alert("Você precisa adicionar pelo menos um amigo para sortear!");
    return;
  }

  let numeroSorteado = sortearNumero(listaAmigos.length);
  textResultado.innerHTML = `<li>${listaAmigos[numeroSorteado]}</li>`;
  listTextAmigos.innerHTML = "";
  listaAmigos = [];
}

function sortearNumero(max) {
  return parseInt(Math.random() * max);
}
