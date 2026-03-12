var botao = document.getElementById("botao");
var inputComentario = document.getElementById("comentarios");
var lista = document.getElementById("lista");

var listaComentarios = [
    { item: "Quero ajudar na doação de sangue." }
];

function renderizarComentarios() {
    lista.innerHTML = "";

    for (var i = 0; i < listaComentarios.length; i++) {
        var novoItem = document.createElement("li");
        novoItem.textContent = listaComentarios[i].item;

        novoItem.classList.add("comentario-item");

        lista.appendChild(novoItem);
    }
}

function clicar() {
    var textoComentario = inputComentario.value.trim();

    if (textoComentario === "") {
        alert("Digite um comentário antes de enviar.");
        return;
    }

    listaComentarios.push({ item: textoComentario });

    renderizarComentarios();

    inputComentario.value = "";
    inputComentario.focus();
}

botao.addEventListener("click", clicar);

inputComentario.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        clicar();
    }
});

renderizarComentarios();