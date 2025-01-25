let listaAmigos = [];
let inputTextAmigo = document.getElementById("amigo");
let listTextAmigos = document.getElementById("listaAmigos");

function adicionarAmigo() {
  if (!inputTextAmigo.value) {
    alert("Nome não pode ser vazio!");
    return;
  }
  listaAmigos.push(inputTextAmigo.value);
  atualizarLista(inputTextAmigo.value);
}

function atualizarLista(nome) {
  let novaLinha = document.createElement("li");
  novaLinha.textContent = nome;

  listTextAmigos.appendChild(novaLinha);
}
