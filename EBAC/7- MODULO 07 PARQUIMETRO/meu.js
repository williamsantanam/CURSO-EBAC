 function calcularValor() {
    const tempo = parseInt(document.getElementById("tempo").value);
    let valor = 0;

    // Tabela de preços
    switch (tempo) {
      case 30:
        valor = 1.00;
        break;
      case 60:
        valor = 1.75;
        break;
      case 120:
        valor = 3.00;
        break;
      default:
        valor = 0;
    }

    document.getElementById("resultado").innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;
  }
