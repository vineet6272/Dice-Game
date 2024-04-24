var random_number1 = Math.floor(Math.random() * 6)+1;

var rdiceImage1 = "dice" + random_number1 + ".png";

var randomImageSource1 = "images/"+rdiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var random_number2 = Math.floor(Math.random() * 6)+1;

var randomImageSource2 = "images/dice" + random_number2 + ".png"

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (random_number1>random_number2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if(random_number2>random_number1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
