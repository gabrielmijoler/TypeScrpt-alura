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
}
;
