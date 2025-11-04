const projectImage = document.getElementById("projectImage");
const previousImage = document.getElementById("previousImage");
const nextImage = document.getElementById("nextImage");
let index = 0;
let imagesToShow = {
    DesignForUnderstanding: ["../Images/PortfolioWorks/DesignForUnderstanding/FinalClearDesign.png",
    "../Images/PortfolioWorks/DesignForUnderstanding/FinalPersuasiveDesign.png"],
};

previousImage.addEventListener("click", function() {
    let photoArray = getCorrectPhotoArray();
    if (index > photoArray.length) {
    projectImage.setAttribute("src",photoArray[index]);
    index--;
    } else {
        projectImage.setAttribute("src", photoArray[index]);
        index = photoArray.length - 1;
    }
})

nextImage.addEventListener("click", function() {
    let photoArray = getCorrectPhotoArray();
    if (index < photoArray.length) {
        projectImage.setAttribute("src",photoArray[index]);
        index++;
    } else {
        projectImage.setAttribute("src", photoArray[index]);
        index = 0;
    }
})

function getCorrectPhotoArray() {
    if(projectImage.dataset.project === "DesignForUnderstanding") {
        return imagesToShow.DesignForUnderstanding;
    }
    if(projectImage.dataset.project === "DesignForUnderstanding") {
        return imagesToShow.DesignForUnderstanding;
    }
}