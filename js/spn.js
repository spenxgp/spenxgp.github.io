// JavaScript File
//nov
var myImage = document.getElementById("mnov"); 
var imageArray = ["images/np.jpg", "images/recipes.jpg", "images/goodtimes.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000);
