// JavaScript File
//july
var myImage = document.getElementById("mjuly"); 
var imageArray = ["images/mus.jpg", "images/baseball.jpg", "images/tech.jpeg",  "images/bread.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,2000);

