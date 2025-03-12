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
        const {name, author, description, src, url} = this.stArray[div.id];
        span.innerHTML = "Author: " + "<span class='red'>" + author + "</span>";
        span.style.fontSize = "16px";
        const span2 = document.createElement("span");
        span2.innerHTML = "Description: " +  "<span class='red'>" + "<a href=\"" + url + "\">" + description + "</a></span>";
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
            div.setAttribute("style", `background-image:  url("${src}"); overflow: hidden; background-size: 150px 150px; position: relative; `+ `
                 transition: all 2s ease-in-out;`)
            const span = document.createElement("span");
            span.id = "nameID"
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
    stArrayGenerator(
        "Cheaters World", 
        "Lyricsz Games", 
        "Cheaters are in the village, Mr. Black will catch them all. have fun.",
        "./../gameicons/cheaters.png", 
        "https://lyricsz.itch.io/cheaters-world"
    ),
    stArrayGenerator(
        "Ani Connet",
        "Lyricsz Games", 
        "Have fun rescuing the ani, Salvar.", 
        "./../gameicons/aniconnet.gif", 
        "https://lyricsz.itch.io/ani-connet"
    ),
    stArrayGenerator(
        "My Math Booster", 
        "Lyricsz Games", 
        "Have fun Learning math with this exciting app.", 
        "./../gameicons/mymathbooster.png", 
        "https://lyricsz.itch.io/my-math-booster-v101"
    ),
    stArrayGenerator(
        "The Wizard's Rage", 
        "PJ Dev", 
        "The lowest rank wizard saving the world from Jupta attack", 
        "./../gameicons/thewizardsrage.png", 
        "https://pj-dev.itch.io/the-wizards-rage"
    ),
    stArrayGenerator(
        "Multiverse Pursuit",
        "Lyricsz Games",
        "Chasing criminals across the multiverse",
        "",
        "https://lyricsz.itch.io/multiversepursuit"
    ),
    stArrayGenerator(
        "Save The House",
        "Lyricsz Games",
        "Save the house from germs and dirts",
        "./../gameicons/savethehouse.png",
        "https://lyricsz.itch.io/save-the-house"
    ),
    stArrayGenerator(
        "The Ancient Kingdom",
        "Lyricsz Games",
        "A knight entasked to save an ancient kingdom PRA",
        "./../gameicons/theancientkingdom.png",
        "https://lyricsz.itch.io/the-ancient-kingdom"
    ),
    stArrayGenerator(
        "Adventure Of Unknown Birds",
        "Lyricsz Games",
        "The Strange birds are in need of help in a very busy road to Home",
        "",
        "https://lyricsz.itch.io/adventure-of-unknown-birds"
    ),
    stArrayGenerator(
        "Inside The Unreal",
        "Lyricsz Games",
        "Surviving in an unreal world, facing all challenges you come across",
        "./../gameicons/insidetheunreal.png",
        "https://lyricsz.itch.io/inside-the-unreal"
    ),
    stArrayGenerator(
        "The Saved Christmas",
        "Lyricsz Games",
        "A VN game where christmas is saved by Santa, Rudolph, Tona and Sona",
        "./../gameicons/thesavedchristmas.png",
        "https://lyricsz.itch.io/the-saved-christmas"
    ),
    stArrayGenerator(
        "A Christmas Odyssey",
        "Lyricsz Games",
        "An epic Santa's adventure. ",
        "",
        "https://lyricsz.itch.io/a-christmas-odyssey"
    ),
    stArrayGenerator(
        "Element Invaders",
        "Lyricsz Games",
        "The elements need to be restored. Restore them, Sanio",
        "./../gameicons/elementinvaders.png",
        "https://lyricsz.itch.io/element-invaders"
    ),
    stArrayGenerator(
        "Smano = The Saved Sea",
        "Lyricsz Games",
        "Save the Sea",
        "./../gameicons/smanothesavedsea.png",
        "https://lyricsz.itch.io/smano-the-saved-sea"
    ),
    stArrayGenerator(
        "Robolite",
        "Lyricsz Games",
        "A robot lost in a savage planet looking for help to get home",
        "./../gameicons/robolite.png",
        "https://lyricsz.itch.io/robolite"
    ),
    stArrayGenerator(
        "Valentine Quix Us",
        "Lyricsz Games",
        "Have fun with Valentine Quix",
        "./../gameicons/valentinequixus.png",
        "https://lyricsz.itch.io/valentine-quix-us"
    ),
    stArrayGenerator(
        "Santa Please Concentrate",
        "Lyricsz Games",
        "A simple Christmas Memory game",
        "./../gameicons/santapleaseconcentrate.png",
        "https://lyricsz.itch.io/santa-please-concentrate"
    )
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

function stArrayGenerator(name, author, description, src, url){
    return {
        name: name,
        author: author, 
        description: description,
        src: src,
        url: url
    }
}