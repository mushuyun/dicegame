
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomImage1;

var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

function winerFinal() {
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player1 Wins"
        
    } else if (randomImage1 < randomImage2) { 
        document.querySelector("h1").innerHTML = "Player2 Wins!"
    }
    
    else {
        document.querySelector("h1").innerHTML = "It is a Tie!"
    } 

}

winerFinal();