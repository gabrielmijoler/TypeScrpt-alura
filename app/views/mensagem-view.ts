import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class MensagemView extends View {

  template(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
    `
  };

  update(model: string): void {
    const templete = this.template(model);
    this.elemento.innerHTML = templete; //  declarar templete da minha view
  }
};