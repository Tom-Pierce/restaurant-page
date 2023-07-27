function createParagraph(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function createDiv(text, divId, ...divClasses) {
    let div = document.createElement("div");
    if (divId) {
        div.id = divId;
    }
    if (text !== "") {
        div.innerText = text;
    }
    divClasses.forEach((divClass) => {
        div.classList.add(divClass);
    });
    return div;
}

export {
    createParagraph,
    createDiv
}