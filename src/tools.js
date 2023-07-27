function createParagraph(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function createDiv(divClass, text) {
    let div = document.createElement("div");
    div.classList.add(divClass);
    div.innerText = text;
    return div;
}

export {
    createParagraph,
    createDiv
}