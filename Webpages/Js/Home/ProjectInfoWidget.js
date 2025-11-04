const Project1InfoWidget = document.getElementById("designForUnderstandingWidget");
const Project1Div = document.getElementsByClassName("projectEntry").item(0);

Project1Div.addEventListener("click", (e) => {
    Project1InfoWidget.style.display = "flex";
    console.log("pressed");
})