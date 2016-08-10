// JavaScript File
//oct
var myImage = document.getElementById("moct"); 
var imageArray = ["images/col.jpg", "images/concert.jpeg", "images/wrtg.jpg",  "images/cameratkg.jpg" ];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,2000);