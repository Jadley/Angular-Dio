class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-title");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = document.createElement("img");
        newsImage.src =
            this.getAttribute("photo") || "/C1-WebComponent/assets/default.png";
        newsImage.alt = "Darth Vader.";

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        
            .card {
                width: 720px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: 10px 10px 44px -13px rgba(0,0,0,0.75);
                -webkit-box-shadow: 10px 10px 44px -13px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 44px -13px rgba(0,0,0,0.75);

            }

            .card-left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card-left > a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card-left > span{
                font-weight: 400;
            }

            .card-left > p{
                color: rgb(70,70,70);
            }
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);
