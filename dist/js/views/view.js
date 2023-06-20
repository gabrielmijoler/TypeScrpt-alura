export class View {
    // tem acesso a esse elemento, mas meus filhos pode ter acesso
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    ;
}
;
