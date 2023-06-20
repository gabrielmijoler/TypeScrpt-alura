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

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
            // static pode chamar na classe , metodo estatico, se torna possivel chamar ele fora da classe
    }
};