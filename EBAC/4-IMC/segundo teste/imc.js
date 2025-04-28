function calcularImc() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    // document.querySelector = serve para selecionar um único elemento HTML em uma página web
    // document.getElementById() = serve para obter um elemento HTML do DOM (Document Object Model) através do seu ID (" Em outras palavras, ela busca um elemento na página que tenha um atributo id com o valor especificado no argumento da função")

    let imc = peso / (altura * altura).toFixed(1);

    document.getElementById("resultado").textContent = imc + "" + classi(imc);
}

function classi(imc) {
    if (imc <18.5)
        return (" magro");
    if (imc >= 18.5 && imc <= 24.9)
        return (" normal");
    if (imc >= 25 && imc <= 29.9)
        return (" sobrepeso I");
    if (imc >= 30 && imc <= 39.9)
        return (" obesidade II");
    if (imc >= 40)
        return (" obesidade II");
}