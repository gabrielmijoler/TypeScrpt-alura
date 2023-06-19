import { Negociacao } from "./negociacao";
//Negociacao[] mesmo q <Array>Negociacao

export class Negociacoes {
  private negociacoes: Negociacao[] = []; // os tipos date, quantidade e valor
  
  adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
  };
  lista(): ReadonlyArray<Negociacao>{ // tem como usar readonly Negociacao[]
    return[...this.negociacoes];
  };
};



// const negociacoes = new Negociacoes();
//   negociacoes.lista().forEach(n => {
//     n.data
//   });


