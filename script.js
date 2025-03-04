
function abrirModal(imagem) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalText").innerText = imagem.getAttribute("data-texto");
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        fecharModal();
    }
};
