//Negociacao[] mesmo q <Array>Negociacao
export class Negociacoes {
    constructor() {
        this.negociacoes = []; // os tipos date, quantidade e valor
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    ;
    lista() {
        return [...this.negociacoes];
    }
    ;
}
;
// const negociacoes = new Negociacoes();
//   negociacoes.lista().forEach(n => {
//     n.data
//   });
