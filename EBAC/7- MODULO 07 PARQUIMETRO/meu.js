class Parquimetro {
      constructor(valorInserido) {
        this.valorInserido = valorInserido;
        this.valorPorMeiaHora = 1.0;
        this.tempoTotalMinutos = 0;
        this.troco = 0;
      }

      calcularTempo() {
        if (this.valorInserido <= 0) {
          return 'Insira um valor válido.';
        }

        let valorValido = Math.floor(this.valorInserido / 0.5) * 0.5;
        let minutos = (valorValido / this.valorPorMeiaHora) * 30;
        this.tempoTotalMinutos = Math.min(minutos, 300); // Limita a 5 horas

        // Cálculo do troco
        this.troco = (this.valorInserido - valorValido).toFixed(2);

        return this.formatarTempo(this.tempoTotalMinutos);
      }

      formatarTempo(minutos) {
        let horas = Math.floor(minutos / 60);
        let restoMinutos = minutos % 60;
        return `${horas}h ${restoMinutos}min`;
      }

      getTroco() {
        return `R$ ${this.troco}`;
      }
    }

    function simular() {
      const valor = parseFloat(document.getElementById("valor").value);
      const resultadoDiv = document.getElementById("resultado");

      if (isNaN(valor) || valor <= 0) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, insira um valor válido.</p>";
        return;
      }

      if (valor > 10) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Valor máximo permitido: R$10,00.</p>";
        return;
      }

      const parquimetro = new Parquimetro(valor);
      const tempo = parquimetro.calcularTempo();
      const troco = parquimetro.getTroco();

      resultadoDiv.innerHTML = 
      `<p><strong>Tempo de permanência:</strong> ${tempo}</p>
        <p><strong>Troco:</strong> ${troco}</p>`;
    }