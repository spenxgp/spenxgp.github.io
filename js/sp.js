// JavaScript File

//first for topics page  
var myImage = document.getElementById("toppic"); 
var imageArray = ["images/ttclose.jpg", "images/ttbutc.jpg", "images/ttfd.jpg",  "images/ttgaming.jpg",  "images/ttmtn.jpg",  "images/ttstraw.jpg",  "images/ttwest2b.jpg",  "images/ttwhale.jpg", "images/ttsnownyc.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,2500);

/*
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


//june
var myImage = document.getElementById("mjune"); 
var imageArray = ["images/build.jpg", "images/river.jpg", "images/sun.jpg",  "images/disc.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000);



//july
var myImage = document.getElementById("mjuly"); 
var imageArray = ["images/mus.jpg", "images/baseball.jpg", "images/tech.jpg",  "images/bread.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000);


//August
var myImage = document.getElementById("maug"); 
var imageArray = ["images/shp.jpg", "images/com.jpg", "images/aztec.png",  "images/ar.jpg",  "images/rest.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000);


//Sept
var myImage = document.getElementById("msept"); 
var imageArray = ["images/sql.jpg", "images/theater.jpg", "images/holiday.jpg",  "images/rain.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000);


//oct
var myImage = document.getElementById("moct"); 
var imageArray = ["images/images/col.jpg", "images/concert.jpg", "images/wtg.jpg",  "images/----.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000);


//nov
var myImage = document.getElementById("mnov"); 
var imageArray = ["images/np.jpg", "images/recipes.jpg", "images/----.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000);


//dec
var myImage = document.getElementById("mdec"); 
var imageArray = ["images/wtc.png", "images/mys.jpeg", "images/winter.jpg",  "images/----.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,3000);
*/







