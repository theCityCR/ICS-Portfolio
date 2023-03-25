document.addEventListener("DOMContentLoaded", createHeader);

function createHeader() {
    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.innerText = document.title;
    console.log(document.title);
    header.appendChild(title);
    header.appendChild(createMenu());
    document.body.prepend(header);
}

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const main = document.createElement("a");
    main.href = "./Main.html";
    main.innerText = "Home";
    menu.appendChild(main);
    menu.appendChild(createTutorials());
    // menu.appendChild(createAbout());
    return menu;
}

function createTutorials() {
    const tutorialButtonText = "Tutorials";
    const tutorialContentInfo =
        [   ["OOP1.html",           "OOP Part 1"],
            ["OOP2.html",           "OOP Part 2"],
            ["Arrays.html",         "Arrays and Arraylists"],
            ["SearchAndSort.html",  "Search and Sort"],
            ["Recursion.html",      "Recursion"]]
    return createMenuContainers(tutorialButtonText, tutorialContentInfo);
}

function createAbout() {
    const aboutMe = document.createElement("div");
    return aboutMe;
}

function createMenuContainers(buttonText, contentInfo) {
    const container = document.createElement("div");
    container.classList.add("menu-containers");
    const button = document.createElement("button");
    button.classList.add("menu-button");
    button.innerText = buttonText;
    container.appendChild(button);
    const content = document.createElement("div");
    content.classList.add("menu-content");
    for (const anchorInfo of contentInfo) {
        const anchor = document.createElement("a");
        anchor.href = anchorInfo[0];
        anchor.innerText = anchorInfo[1];
        content.appendChild(anchor);
    }
    container.append(content);
    return container;
}