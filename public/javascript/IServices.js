function redirecionar() {
    var busca = document.getElementById("buscar").value;
    if (document.getElementById("buscar").value) {
        document.getElementById("buscar").value = busca;
    }
}

function inacessivel() {
    alert("Ops! Esse serviço ainda não está disponível");
}