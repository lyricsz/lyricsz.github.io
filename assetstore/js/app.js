const allPrice = document.querySelectorAll(".price")
const allDescription = document.querySelectorAll(".description")


function _refreshColors(){
    document.querySelectorAll(".frameTitle").forEach((el, index) => {
        const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
        el.style.color = color;
        allPrice[index].style.color = color;
        allDescription[index].style.color = color;
    })
}

function random(min, max){
    return Math.floor(Math.random() * (max - min) + min) 
}

refreshColors.onclick = () => _refreshColors()

_refreshColors()
