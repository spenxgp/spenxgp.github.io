//August
var myImage = document.getElementById("maug"); 
var imageArray = ["images/shp.jpg", "images/com.jpg", "images/aztec.png",  "images/artt.jpg",  "images/rest.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,2500);

