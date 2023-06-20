
export class View {

  protected elemento: HTMLElement; // usar para herança, so eu VIEW
  // tem acesso a esse elemento, mas meus filhos pode ter acesso

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  };
};