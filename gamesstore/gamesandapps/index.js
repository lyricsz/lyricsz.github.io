const gameTable = document.getElementById("gameTable");
const appTable = document.getElementById("appTable");

class Games{
    constructor(size, type){
        this.size = size;
        this.type = type;
        this.divArray = [];
        this.tdArray = [];
        this.stArray = [];
    }
    pasteToDiv(){
        this.stArray.forEach((el, index) => {
            const {name, author, description, src} = el;
            const div = this.divArray[index];
            div.id = index; 
            this.applyToDiv(name, author, description, src, div);
        });
    }
    flip(div){
        div.innerHTML = "";
        div.onclick = () => {}
        div.style.background = "radial-gradient(white, silver)";
        const span = document.createElement("span");
        const {name, author, description, src} = this.stArray[div.id];
        span.innerHTML = "Author: " + "<span class='red'>" + author + "</span>";
        span.style.fontSize = "16px";
        const span2 = document.createElement("span");
        span2.innerHTML = "Description: " +  "<span class='red'>" + description + "</span>";
        span2.style.font = "10px monospace bold";
        [span, span2].forEach(span => span.setAttribute("style", "color: #010301; text-shadow: 0px 0px 1px wheat; display: block; " + 
                                                        "width: 100%; padding: 0 4px; text-align: left; font-size: 14px; margin: 2px;"))
        div.style.transform = "rotateY(360deg)"
        div.removeEventListener("click", gameFlip);
        setTimeout(() => {
            div.appendChild(span);
            div.appendChild(span2);
            setTimeout(() => {
                div.style.transform = "rotateY(0deg)";
                div.innerHTML = "";
                setTimeout(( ) => {
                this.applyToDiv(name, author, description, src, div);
                div.addEventListener("click", gameFlip);
                }, 2000);
            }, 10000);
        }, 2000);
    }
    applyToDiv(name, author, description, src, div){
        new Promise(() => {
            div.setAttribute("style", `background-image:  url("${src}"); overflow: hidden; background-size: 150px; position: relative; `+ `
                 transition: all 2s ease-in-out;`)
            const span = document.createElement("span");
            span.setAttribute("style", "position: absolute; left: 50%; transform: translateX(-50%); "
                            + "bottom: 6px; font-size: 14px; z-index: 3; width: 100%; text-align: center")
            span.innerText = name;
            div.appendChild(span);
        })
    }
    appendDiv(){
        const div = document.createElement("div");
        div.width = 300;
        div.height = 300;
        div.setAttribute("class", this.type);
        return div;
    }
    appendTd(){
        let tdArray = [];
        for(let i = 0; i < this.size; i++){
            const td = document.createElement("td");
            const div = this.appendDiv();
            this.divArray.push(div);
            td.appendChild(div);
            tdArray.push(td);
        }
        return tdArray;
    }
    appendTr(){
        let trArray = [];
        for(let i = 0; i < this.size; i++){
            const tr = document.createElement("tr");
            const tableData = this.appendTd();
            tableData.forEach(el => {
                tr.appendChild(el);
            });
            trArray.push(tr);
        }
        return trArray;
    }
    init(){
        return this.appendTr(this.size, this.type);
    }   
}

let games = new Games(4, "gameBox");
games.init().forEach(tr => {
    gameTable.appendChild(tr);
});
games.stArray.push(
    {name: "Cheaters World", author: "Lyricsz Games", description: "Cheaters are in the village, Mr. Black will catch them all. have fun.", src: "./../gameicons/cheaters.png"},
    {name: "Ani Connet", author: "Lyricsz Games", description: "Have fun rescuing the ani, Salvar.", src: "./../gameicons/aniconnet.gif"},
    {name: "My Math Booster", author: "Lyricsz Games", description: "Have fun Learning math with this exciting app.", src: "./../gameicons/mymathbooster.png"},
    {name: "Robolite", author: "Lyricsz Games", description: "A Robot get lost in a savage planet. Let's help find it's way back home.", src: "./../gameicons/robolite.png"},
    {name: "Santa Please Concentrate", author: "Lyricsz Games", description: "Hello friends, The goal of this simple memory game is to match two pairs of card ", src: "./../gameicons/santapleaseconcentrate.png"}
);
games.pasteToDiv();

games.divArray.forEach(game => {
    game.addEventListener("click", gameFlip, game);
});

function gameFlip(game){
    games.flip(game.target);
}

let apps = new Games(4, "appBox");
apps.init().forEach(tr => {
    appTable.appendChild(tr); 
});

apps.divArray.forEach(app => {
    app.addEventListener("click", function(app) {
        apps.flip(app.target);
    })
})
apps.pasteToDiv();