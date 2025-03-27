const assetsEl = document.getElementById("assets");

class Asset {
    constructor(name, url, description){
        this.name = name;
        this.url = url;
        this.description = description;
        this.cDescription = [];
        this.descriptionText = "";
        this.wait = Math.floor(Math.random() * 3);
    }
    updateDescription() {
        if(this.cDescription.length == this.description.length){
            if (this.wait > 20) {
                this.cDescription = [];
                this.wait = 0;
            }
            else {
                this.wait++;
            }
            return;
        }
        this.cDescription.push(this.description[this.cDescription.length])
        this.descriptionText = this.cDescription.join("");
    }
    appendAll(){
        const div = document.createElement("div");
        div.id = "AssetCard"
        div.innerHTML = "Name: <a href=" + this.url + "\">" + this.name + "</a><br>" + "Description: " + this.descriptionText;
        assetsEl.appendChild(div);
    }
}

const assetArr = [
    ["Wizard", "ooo", "IIII "],
    ["Hello", "WOW", "It Works! Yay!"]
]

const asset = [

];

assetArr.forEach(el => {
    generateAsset(el[0], el[1], el[2]);
});

function animate(){
    assetsEl.innerHTML = '';
    asset.forEach(el => {
        el.updateDescription();
        el.appendAll();
    })    
    window.setTimeout(animate, 100);
}

animate();

function generateAsset(name = "", url = "", description = ""){
    asset.push(new Asset(name, url, description));
}