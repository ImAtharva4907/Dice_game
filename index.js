//for palyer 1

var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage1="dice"+randomNumber1+".png";

var randomImageSource1 = "images/"+randomDiceImage1;

var image1=document.querySelector(".img1");

image1.setAttribute("src",randomImageSource1);

//for palyer 2
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomDiceImage2;

var image2=document.querySelector(".img2");

image2.setAttribute("src",randomImageSource2);


//H1 heading

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML="Draw!";
    
}