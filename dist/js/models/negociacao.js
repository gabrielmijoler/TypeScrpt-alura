export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ; // tipagem simplicada
    get volume() {
        return this.quantidade * this.valor;
    }
    ; // fica pra calcular, semelgar as primeras propriedade
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    ; // programacao defensiva
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
        // static pode chamar na classe , metodo estatico, se torna possivel chamar ele fora da classe
    }
}
;
