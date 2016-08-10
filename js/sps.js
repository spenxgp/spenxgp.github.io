// JavaScript File
//Sept
var myImage = document.getElementById("msept"); 
var imageArray = ["images/trees.jpg", "images/theater.jpg", "images/holiday.jpg",  "images/rain.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,2000);
