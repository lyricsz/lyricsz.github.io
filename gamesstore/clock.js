const clock =  document.getElementById("time");

function updateClock(){
    const date = new Date();
    clock.innerHTML = date;
    clock.setAttribute("style", `filter: brightness(${date.getSeconds() / 30})`);
    requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);