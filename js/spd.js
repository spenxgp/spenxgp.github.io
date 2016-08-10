// JavaScript File
//dec
var myImage = document.getElementById("mdec"); 
var imageArray = ["images/central.jpg", "images/mansion.jpg", "images/winter.jpg",  "images/ocean.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,2000);








