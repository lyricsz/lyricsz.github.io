let timer = 0;
let progress = document.getElementById("progress");
let progress2 =document.getElementById("progress2");
let progress3 = document.getElementById("progress3");
let progress4 = document.getElementById("progress4");
let introduction = document.getElementById("introductionid");
let lyricsLoad = document.getElementById("lyricsid");
let topLyricsLoad = document.getElementById("top");
let partnershipLoad = document.getElementById("partnershipid");
function body(){
    timer += 1;
    
    if (timer > 50){
     progress.style.display = "none";
     progress2.style.display = "none";
     progress3.style.display = "none";
     progress4.style.display = "none";
     introduction.style.display = "block";
     lyricsLoad.style.display = "block";
     topLyricsLoad.style.display = "block";
     partnershipLoad.style.display = "block";
     clearInterval(t);
    }
}
var abcAll = [ [
"1da Banton",
"2Baba",
"9ice"
], [
"AdaEhi",
"Adekunle Gold",
"Afro B",
"Ajebutter22",
"AKA",
"Akon",
"Akwaboah",
"Alpha P",
"Angelique Kidjo",
"Aramide",
"Asa",
"Ayo Jay"
],
 [
"B-Red",
"B4Bonah",
"Bad Boy Timz",
"Bankulli",
"BankyOnDBeatz",
"Barry Jhay",
"Basketmouth",
"Becca",
"Bella Alubo",
"Bella Shmurda",
"Bisa Kdei",
"Bisola",
"Blackface",
"BlackMagic",
"Blaq Jerzee",
"BlaqBonez",
"BOJ",
"Boogey",
"Bracket",
"Brainee",
"Broda Shaggi",
"Brymo",
"Buju",
"Burna Boy"
],
 [
"Camidoh",
"Cassper Nyovest",
"CDQ",
"Ceeza Milli",
"Chidinma",
"Chike",
"Chinko Ekun",
"CKay",
"Cobhams Asuquo",
"Crayon",
"Cynthia Morgan"
],
 [
"D'banj",
"D'Tunes",
"Dagrin",
"Daddy Showkey",
"Dammy Krane",
"Danny S",
"Dapo Turbuna",
"Darey",
"Darkovibes",
"David Meli",
"Davido",
"Davolee",
"Del'B",
"Demmie Vee",
"Diamond Platnumz",
"Dice Ailes",
"Dija",
"DJ Coublon",
"DJ Cuppy",
"DJ Enimoney",
"DJ Jimmy Jatt",
"DJ Kaywise",
"DJ Lambo",
"DJ Neptune",
"DJ Spinall",
"DJ Tunez",
"DJ Xclusive",
"DMW",
"DNA",
"Don Jazzy",
"Dotman",
"Duncan Mighty"
],
 [
"E-Kelly",
"E.L",
"Edem",
"Efya",
"eLDee",
"eMTee",
"Erigga",
"Eugy"
],
 [
"Fally Ipupa",
"Falz",
"Fela Kuti",
"Femi Kuti",
"Fiokee",
"Fireboy DML",
"Flavour",
"Frank Edwards",
"Funbi"
],
 [
"GuiltyBeatz"
],
 [
"Harmonize",
"Harrysong"
],
 [
"Ice Prince",
"Ichaba",
"ID Cabasa",
"Idahams",
"Idowest",
"iLLBliSS",
"Iyanya"
],
 [
"J martins",
"J.Derobie",
"Jaywon",
"Jesse Jagz",
"jhybo",
"Jidenna",
"Jinmi Abduls",
"Johnny Drille",
"Joeboy",
"Juls",
"Junior Boy"
],
 [
"Kcee",
"Kel P",
"Kelvyn Boy",
"Kida Kudz",
"Kiddominant",
"KiDi",
"Killertunes",
"King Perry",
"King Promise",
"Kizz Daniel",
"Kofi Mole",
"Koker",
"Korede Bello",
"Kranium",
"Krizbeats",
"Kuami Eugene",
"Kwesi Arthur"
],
[
"L.A.X",
"Ladipoe",
"Lady Donli",
"Larry Gaaga",
"Laycon",
"Leriq",
"Lil Frosh",
"Lil Kesh",
"Lola Rae",
"Loose Kaynon",
"Lyta"
],
[
"M.anifest",
"M.I Abaga",
"Mafikizolo",
"Maleek Berry",
"Masterkraft",
"May D",
"Mayorkun",
"Mercy Chinwo",
"Mike Abdul",
"Minz",
"Mode9",
"Moelogo",
"Mr 2Kay",
"Mr Eazi",
"Mr P",
"Mr Real",
"Ms Banks",
"Mugeez",
"Mut4y",
"Mystro"
],
 [
"Naeto C",
"Naira Marley",
"Nasty C",
"Nathaniel Bassey",
"Nikki Laoye",
"Niniola",
"Nonso Amadi",
"Nosa"
],
 [
"Odunsi",
"Ola Dips",
"Olakira",
"Olamide",
"Omah Lay",
"Omawumi",
"Omo Akin",
"Orezi",
"OritseFemi"
],
 [
"P-Square",
"Pasuma",
"Patoranking",
"Paul Okoye",
"Pepenazi",
"Peruzzi",
"Pheelz",
"Phyno",
"Popcaan",
"Praiz",
"Prettyboy D-O"
],
 [
"Qdot"
],
 [
"R2Bees",
"Reekado Banks",
"Rema",
"Reminisce",
"Rexxie",
"Rudeboy",
"Ruffcoin",
"Runtown"
],
 [
"Samini",
"Samklef",
"Sammie Okposo",
"Sarkodie",
"Sarz",
"Sauti Sol",
"Sean Tizzle",
"Selebobo",
"Seun Kuti",
"Seyi Shay",
"Shatta Wale",
"Shizzi",
"Show Dem Camp",
"Simi",
"Sina Rambo",
"Sinach",
"Sinzu",
"Skales",
"Skepta",
"Skiibii",
"Slimcase",
"Small Doctor",
"Soft",
"Solidstar",
"Sona",
"Sound Sultan",
"Spellz",
"Strongman",
"Styl-Plus"
],
 [
"T Classic",
"Tay Iwar",
"Teddy A",
"Teeto Ceemos",
"Tekno",
"Telz",
"Tems",
"Teni",
"Terri",
"Terry Apala",
"Terry G",
"Tim Godfrey",
"Timaya",
"Timi Dakolo",
"Tiwa Savage",
"Tolani Otedola",
"Tonto Dikeh",
"Tope Alabi",
"TY Bello"
],
 [
"Umu Obiligbo"
],
[
"Vector",
"Victor AD",
"Viktoh"
],
 [
"Waje",
"Wale Turner",
"Wande Coal",
"Wizkid",
"Wurld"
],[

],
 [
"Ycee",
"Yemi Alade",
"Yemi Sax",
"Young John",
"Youssou N'Dour",
"Yung L",
"Yung6ix"
],
[
"Zinoleesky",
"Zlatan",
"Zoro"
]
];

let aAZ = document.getElementById("azfieldsetid");
let elementToAdd;
for(let i = 0; i < abcAll[0].length; i++){
    elementArtist = abcAll[0][i];
    elementToAdd = document.createElement("button");
    elementToAdd.innerHTML = elementArtist;
    aAZ.appendChild(elementToAdd)
}
function azlyricsi(){
    var empty = document.createElement("code");
    aAZ.replaceChildren(empty)
     var selectedTexti = select.value;
     for (let j = 0; j < select.length; j++){
        check = alphabet[j];
        if (check == selectedTexti){
            display = abcAll[j];
            for (let i = 0; i < display.length; i++){
                elementArtist = display[i];
                let elementToAdd2 = document.createElement("button");
                elementToAdd2.innerHTML = elementArtist;
                aAZ.appendChild(elementToAdd2)
             }
        }
        
     }
     
}
let t = setInterval(body, 100)
let hlyrics = document.getElementById("hlyrics");
let headerul = document.getElementById("headerul");
let click = 1;
hlyrics.onclick = function(){
    click *= -1;
    if (click === -1){
        headerul.style.display = "block"
    }else{
        headerul.style.display = "none";
    }
}
let alphabeto; 
let select = document.getElementById("selectAlphabet");
let alphabet = ["N", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
for (let j = 0; j < alphabet.length; j += 1) {
    let un = alphabet[j];
    alphabeti = "alphabet" + un;
    alphabeti = document.createElement("option");
    alphabeti.innerHTML = un;
    let alphabetall = alphabeti;
    appendi(alphabetall)
}

function appendi(a){
    all = select.append(a);
}
