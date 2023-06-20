export class View {
    constructor(seletor, escapar) {
        // tem acesso a esse elemento, mas meus filhos pode ter acesso tbm.
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    ;
    update(model) {
        let templete = this.template(model);
        if (this.escapar) {
            templete = templete.replace(/<script>[\s\S]*?\/script>/, '');
        }
        this.elemento.innerHTML = templete; //  declarar templete da minha view
    }
    ;
}
;
