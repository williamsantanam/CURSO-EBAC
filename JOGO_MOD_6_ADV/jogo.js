let numeroRandomico = Math.floor(Math.random() * 100) + 1;
let chute, dica, tentativasElemento;
let tentativas = 0;

document.addEventListener("DOMContentLoaded", () => {
    chute = document.getElementById("chute");
    dica = document.getElementById("dica");
    tentativasElemento = document.getElementById("tentativas");
});

function adivinhar() {
    let valorChute = Number(chute.value);

    if (valorChute < 1 || valorChute > 100 || isNaN(valorChute)) {
        alert("Digite um número válido entre 1 e 100");
        return;
    }

    tentativas++;

    if (valorChute === numeroRandomico) {
        dica.innerHTML = "Parabéns, você acertou!";
        tentativasElemento.innerHTML = "Tentativas: " + tentativas;
        return;
    } else if (valorChute < numeroRandomico) {
        dica.innerHTML = "O número é maior";
    } else {
        dica.innerHTML = "O número é menor";
    }

    tentativasElemento.innerHTML = "Tentativas: " + tentativas;

    if (tentativas === 10) {
        dica.innerHTML = "Suas tentativas acabaram, o número era " + numeroRandomico;
    }
}