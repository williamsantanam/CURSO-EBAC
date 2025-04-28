function calcularDesconto() {

    //ENTRADA DE DADOS
    let valorOriginal = document.getElementById("valor").value;
    let desconto = document.getElementById("desconto").value;

    //PROCESSAMENTO
    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto;
    
    //SAÍDA
    document.getElementById("resultado").textContent= ' o resultado é :' + valorFinal;
    
}
