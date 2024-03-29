document.addEventListener("DOMContentLoaded", init);

function init() {
    addCSSFile();
    createHeader();
}

function addCSSFile() {
    const menu = document.createElement("link");
    menu.rel = "stylesheet";
    menu.href = "./Menu.css";
    document.head.appendChild(menu);
}

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
    const moreMenu = document.createElement("div");
    moreMenu.classList.add("more-menu");
    moreMenu.appendChild(createTutorials());
    moreMenu.appendChild(createAbout());
    const bibliography = document.createElement("a");
    bibliography.href = "./Bibliography.html";
    bibliography.innerText = "Bibliography";
    moreMenu.appendChild(bibliography);
    menu.appendChild(moreMenu);
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
    const aboutMeButtonText = "About Me";
    const aboutMeContentInfo =
        [   ["WhoAmI.html",         "Who Am I"],
            ["Works.html",          "My Projects"],
            ["Achievements.html",   "Achievements"],
            ["Learning.html",       "My Learning"]]
    return createMenuContainers(aboutMeButtonText, aboutMeContentInfo);
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
