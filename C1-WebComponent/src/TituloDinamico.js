class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        //componente base
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizacao
        const style = document.createElement("style");
        style.textContent = `
        h1 {
            color:purple;
        }`;

        //adiconando a shadow
        shadow.appendChild(style);
        shadow.appendChild(componentRoot);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);
