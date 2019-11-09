//var randomNumber1=Math.random(1,6) * 6;

//randomNumber1 = Math.round(randomNumber1);
var randomNumber1 = randGen();
var imageSrc = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",imageSrc);


var randomNumber2 = randGen();
 imageSrc = "images/dice" + randomNumber2 + ".png";
 //document.querySelector(".img2").setAttribute("src",imageSrc);
 document.querySelectorAll("img")[1].setAttribute("src",imageSrc);

if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "🏳️‍🌈Player 1 Wins";
}
else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏳️‍🌈";
}
else
{
  document.querySelector("h1").innerHTML = "Draw !";
}
function randGen()
 {
 var randomNumber1=(Math.random() * 6) + 1;
 return Math.floor(randomNumber1);
 }
