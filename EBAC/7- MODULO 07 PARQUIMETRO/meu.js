  class Parquimetro {
        constructor(taxaPorHora, taxaMinima) {
        this.taxaPorHora = taxaPorHora;
        this.taxaMinima = taxaMinima;
        }

        calcularTempo(valorPago) {
            const tempoEmHoras = (valorPago - this.taxaMinima) / this.taxaPorHora;
            const tempoEmMinutos = tempoEmHoras * 60 * 1 ;
            return tempoEmMinutos;
            
        }

        calcularTroco(valorPago, tempo) {
            const valorTotal = this.taxaMinima - (tempo / 60) + this.taxaPorHora;
            return valorPago - valorTotal;

        }
    }

    function calcularTempo() {
        const valorPago = parseFloat(document.getElementById("valor").value);
        const parquimetro = new Parquimetro(2.5, 1.5);//Taxa por hora e taxa mínima
        const tempo = parquimetro.calcularTempo(valorPago);
        if(valorPago >= 7){
            alert("⚠️ERRO! VALOR MÁXIMO PERMITIDO É 6,50.")
            return;
        }
        const troco = parquimetro.calcularTroco(valorPago, tempo);

        document.getElementById("tempo").textContent = `Tempo de permanência: ${tempo.toFixed(0)} minutos;`
        document.getElementById("troco").textContent = `Troco: R$ ${troco.toFixed(2)};`

        
    }

