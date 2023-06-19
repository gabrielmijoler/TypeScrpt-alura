export class Negociacao {
    constructor(
        private _data:Date, 
        public readonly quantidade: number, 
        public readonly valor: number
        ) {}; // tipagem simplicada

    get volume():number {
        return this.quantidade * this.valor;
    }; // fica pra calcular, semelgar as primeras propriedade
    get data(): Date{
        const data = new Date(this._data.getTime())
        return data;
    };// programacao defensiva
};