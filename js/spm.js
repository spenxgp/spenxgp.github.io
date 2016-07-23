// JavaScript File


//May
var myImage = document.getElementById("mmay"); 
var imageArray = ["images/chick.jpg", "images/bks.jpg", "images/movie.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000);