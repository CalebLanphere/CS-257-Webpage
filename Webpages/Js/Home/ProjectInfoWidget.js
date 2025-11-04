const Project1InfoWidget = document.getElementById("designForUnderstandingWidget");
const Project1Div = document.getElementsByClassName("projectEntry").item(0);
const projectInfoExitButton = document.getElementById("closeProject");

Project1Div.addEventListener("click", (e) => {
    e.preventDefault();
    Project1InfoWidget.style.display = "grid";
})

projectInfoExitButton.addEventListener("click", (e) => {
    e.preventDefault();
    Project1InfoWidget.style.display = "none";
})

