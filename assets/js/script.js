const btnAdicionar = document.getElementById("btn-adicionar");
const p = document.getElementById("contador");

let contador = 0;

p.innerHTML = contador;

btnAdicionar.addEventListener("click", function() {
    p.innerHTML = ++contador;
});

