import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLDataElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negocicoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');
  //private readonly SABADO = 6; //apenas leitura readonly
  //private readonly DOMINGO = 0;


  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negocicoesView.update(this.negociacoes);
  };
  adiciona(): void {
    const negociacao = this.criaNegociação();
    this.negociacoes.adiciona(negociacao);
    this.negocicoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação Adicionada com sucesso')
    
    this.limparFormulario();
  };

  criaNegociação(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);

  };
  limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus(); 
  };

  private atualizaView(): void {
    this.negocicoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação Adicionada com sucesso');
  }

};
