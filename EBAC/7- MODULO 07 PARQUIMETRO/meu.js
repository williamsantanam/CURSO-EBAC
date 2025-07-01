class Parquimetro {
      constructor() {
        // Tabela de preços com base no tempo em minutos
        this.tabelaPrecos = {
          30: 1.00,
          60: 1.75,
          120: 3.00
        }
      }

      calcularPreco(tempo) {
        if (this.tabelaPrecos[tempo]) {
          return this.tabelaPrecos[tempo];
        } else {
          return "Tempo inválido.";
        }
      }
    }

    // Instância do parquímetro
    const parquimetro = new Parquimetro();

    function calcular() {
      const tempo = parseInt(document.getElementById("tempo").value);
      const preco = parquimetro.calcularPreco(tempo);
      document.getElementById("resultado").innerText = typeof preco === "number"? `Valor a pagar: R$ ${preco.toFixed(2)}`: preco;
    }
