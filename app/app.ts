import { NegociacaoController } from './controllers/negociacao-controllers.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const controller = new NegociacaoController();

const form = document.querySelector('.form');
if(form){
form.addEventListener('submit', event =>{
  event.preventDefault();
  controller.adiciona()
})}else {
  throw Error('Não foi possivel inicializar a aplicação. Verifique o seu form.')
};
