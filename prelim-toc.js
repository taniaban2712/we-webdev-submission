function createTocFigure() {
    let tocFigure = document.createElement("figure");
    let tocFigCaption = document.createElement("figcaption");
    tocFigCaption.innerText = "Table of Contents";
    tocFigure.append(tocFigCaption);
    return tocFigure;
}

function createTocListItem(href, linkText) {
    let tocItemElem = document.createElement("li");
    let anchorElem = document.createElement("a");
    anchorElem.href = href;
    anchorElem.innerText = linkText;
    tocItemElem.append(anchorElem);
    return tocItemElem;
}

/* Definitely not meant to be used, but a starting point for discussion*/
function _generateH1OnlyToc() {
    let tocFigure = createTocFigure();
    let tocElem = document.createElement("ol");
    document.querySelectorAll("h1").forEach((elem) => tocElem.append(
        createTocListItem("#" + elem.id, elem.innerText)
    ));
    tocFigure.append(tocElem);
    document.querySelector("body").prepend(tocFigure);
}

document.addEventListener("DOMContentLoaded", _generateH1OnlyToc);