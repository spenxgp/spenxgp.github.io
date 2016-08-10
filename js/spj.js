// JavaScript File
//june
var myImage = document.getElementById("mjune"); 
var imageArray = ["images/build.jpg", "images/river.jpg", "images/sun.jpg",  "images/sql.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,2000);
