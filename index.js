
// rolls dice for both player 1 and player 2, and returns a random number 1 & 6
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

// function designed to display correct image based on number returned from dice roll
function diceImage(diceNum, imgElement) {
    var randomImageSource = "images/dice" + diceNum + ".png";
    imgElement.setAttribute("src", randomImageSource);
}

// selects all image elements
var images = document.querySelectorAll("img");

// sets the image source for both dice
diceImage(randomNum1, images[0]);
diceImage(randomNum2, images[1]);

// results is stored as a variable that updates its value based on if else conditions
var results
if (randomNum1 > randomNum2) {
    results = "🚩 Play 1 Wins!";
}
else if (randomNum2 > randomNum1) {
    results = "🚩 Player 2 Wins!";
}
else {
    results = "Draw!";
}
// updates the innerHTML of the h1 element to correctly display the results message
document.querySelector("h1").innerHTML = results;
