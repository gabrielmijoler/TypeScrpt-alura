
export abstract class View<T> { 
  // é a tipagem generica, caso precisar reutilizar essa class view em mais lugares
  // com tipagem diferente, como esta Mensagem: String e negociacoes: Negociações

  protected elemento: HTMLElement; // usar para herança, so eu VIEW,
  // tem acesso a esse elemento, mas meus filhos pode ter acesso tbm.

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  };

  public update(model: T): void {
    const templete = this.template(model);
    this.elemento.innerHTML = templete; //  declarar templete da minha view
  };

  protected abstract template(model: T): string; 
  // O pai(View), passa tudo como parametro, para o filho utilizar
  // O abstract ajuda na manutenção do codigo, para demostrar o que falta antes de rodar
  // Força a filha TER esse metodo template.
};