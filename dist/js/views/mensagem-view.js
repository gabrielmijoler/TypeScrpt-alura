import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        return `
      <p class="alert alert-info">${model}</p>
    `;
    }
    ;
    update(model) {
        const templete = this.template(model);
        this.elemento.innerHTML = templete; //  declarar templete da minha view
    }
}
;
