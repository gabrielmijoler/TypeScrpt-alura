export class View {
    // tem acesso a esse elemento, mas meus filhos pode ter acesso tbm.
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    ;
    update(model) {
        const templete = this.template(model);
        this.elemento.innerHTML = templete; //  declarar templete da minha view
    }
    ;
}
;
