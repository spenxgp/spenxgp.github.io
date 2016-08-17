//Intro
var myImage = document.getElementById("intro"); 
var imageArray = ["images/browns.jpg",  "images/nature.jpg", "images/films.jpeg", "images/sports.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,2000);








