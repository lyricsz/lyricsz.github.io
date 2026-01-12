function sortingFn (arraySort = [], inputElClassName) {
    let currentTutorialsDisplayTag = arraySort;
    console.log(currentTutorialsDisplayTag);
    let inputClass = inputElClassName;

    document.querySelectorAll(`.${inputClass}`).forEach(el => {
        el.onchange = (e) => {
            console.log(typeof currentTutorialsDisplayTag)
            const tagName = e.target.name;
            if (!el.checked && currentTutorialsDisplayTag.indexOf(tagName) > -1) {
                currentTutorialsDisplayTag = currentTutorialsDisplayTag.filter((el) => {
                    return (el != tagName)
                })
                updateTutorialsDisplay([tagName], false);
            } else {
                if (currentTutorialsDisplayTag.indexOf(tagName) == -1) {
                    currentTutorialsDisplayTag.push(tagName);
                }
                updateTutorialsDisplay([tagName], true);
            }
            updateTutorialsDisplay(currentTutorialsDisplayTag, true)
        }
    })

    function updateTutorialsDisplay (tag, displayQ) {
        tag.forEach((el) => {
            document.querySelectorAll(`.${el}`).forEach(el => {
                if (displayQ) el.style.display = "inline"
                else el.style.display = "none" 

            })
        })
    }
}

sortingFn(["games", "webdevelopment", "model3d", "assets"], "tutorialCheck")
sortingFn(["games2d", "games25d", "games3d", "platformer"], "gamesCheck")

function closeDock() {
    document.getElementById("inDevelopment").style.display = "none";
}

function showDock() {
    window.scroll(0, 0)
    document.getElementById("inDevelopment").style.display = "block";
}