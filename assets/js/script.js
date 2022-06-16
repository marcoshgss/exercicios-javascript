const btnIncrementar = document.getElementById("btn-incrementar");
const btnDecrementar = document.getElementById("btn-decrementar");
const p = document.getElementById("contador");

var contador = 0;

p.innerHTML = contador;

btnIncrementar.addEventListener("click", function() {
    p.innerHTML = ++contador;
});

btnDecrementar.addEventListener("click", function() {
    p.innerHTML = --contador;
});

