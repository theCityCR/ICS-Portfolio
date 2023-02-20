function ll(link) {
    window.location = link;
}

function tutorialHover() {
    let tutHov = document.getElementById("tutorials").matches(":hover");
    let menHov = document.getElementById("tutorialsExpandedMenu").matches(":hover");
    if (tutHov || menHov) {
        document.getElementById("tutorialsExpandedMenu").style.display = "block";
    } else {
        document.getElementById("tutorialsExpandedMenu").style.display = "none";
    }
}

function aboutMeHover() {
    let abmHov = document.getElementById("aboutMe").matches(":hover");
    let menHov = document.getElementById("aboutMeExpandedMenu").matches(":hover");
    if (abmHov || menHov) {
        document.getElementById("aboutMeExpandedMenu").style.display = "block";
    } else {
        document.getElementById("aboutMeExpandedMenu").style.display = "none";
    }
}

setInterval(tutorialHover, 10);
setInterval(aboutMeHover, 10);