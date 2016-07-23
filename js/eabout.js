// JavaScript File

//ES About page  
var myImage = document.getElementById("abt"); 
var imageArray = ["images/nycabt.jpg", "images/ttnyctwr.png", "images/winter.jpg", "images/nycfi.jpg"];
var imageIndex = 0
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>=imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage,4000);


var time = new 
Date ().getHours();
if (time < 12) {document.getElementById("tm").innerHTML="BIENVENIDOS y BUENOS D&Iacute;AS";    
} else if (time < 17) 
    {document.getElementById("tm").innerHTML="BIENVENIDOS y BUENOS TARDES";    
} else 
    {document.getElementById("tm").innerHTML="BIENVENIDOS y BUENOS NOCHES";    
}
    
    















