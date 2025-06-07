  class Parquimetro {
        constructor(taxaPorHora, taxaMinima) {
        this.taxaPorHora = taxaPorHora;
        this.taxaMinima = taxaMinima;
        }

        calcularTempo(valorPago) {
            const tempoEmHoras = (valorPago - this.taxaMinima) / this.taxaPorHora;
            const tempoEmMinutos = tempoEmHoras * 60;
            return tempoEmMinutos;
        }

        calcularTroco(valorPago, tempo) {
            const valorTotal = this.taxaMinima - (tempo / 60) + this.taxaPorHora;
            return valorPago - valorTotal;
        }
    }

    function calcularTempo() {
        const valorPago = parseFloat(document.getElementById("valor").value);
        const parquimetro = new Parquimetro(2.50, 1.50); // Taxa por hora e taxa mínima
        const tempo = parquimetro.calcularTempo(valorPago);
        const troco = parquimetro.calcularTroco(valorPago, tempo);

        document.getElementById("tempo").textContent = `Tempo de permanência: ${tempo.toFixed(2)} minutos;`
        document.getElementById("troco").textContent = `Troco: R$ ${troco.toFixed(2)};`
    }