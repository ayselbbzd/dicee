var name1 = prompt("Enter the name of first player:");
var name2 = prompt("Enter the name of second player:");

document.querySelectorAll("p")[0].textContent=name1;
document.querySelectorAll("p")[1].textContent=name2;



var randomNumber1 = Math.floor(Math.random()*6)+1;
var i1 = document.querySelectorAll("img")[0] ;

if(randomNumber1===1){
  i1.setAttribute("src", "images/dice1.png");
}


if(randomNumber1===2){
  i1.setAttribute("src", "images/dice2.png");
}


if(randomNumber1===3){
  i1.setAttribute("src", "images/dice3.png");
}


if(randomNumber1===4){
  i1.setAttribute("src", "images/dice4.png");
}


if(randomNumber1===5){
  i1.setAttribute("src", "images/dice5.png");
}


if(randomNumber1===6){
  i1.setAttribute("src", "images/dice6.png");
}

var randomNumber2 = Math.floor(Math.random()*6)+1;
var i2 = document.querySelectorAll("img")[1] ;

if(randomNumber2===1){
  i2.setAttribute("src", "images/dice1.png");
}


if(randomNumber2===2){
  i2.setAttribute("src", "images/dice2.png");
}


if(randomNumber2===3){
  i2.setAttribute("src", "images/dice3.png");
}


if(randomNumber2===4){
  i2.setAttribute("src", "images/dice4.png");
}


if(randomNumber2===5){
  i2.setAttribute("src", "images/dice5.png");
}


if(randomNumber2===6){
  i2.setAttribute("src", "images/dice6.png");
}

var winner;

if(randomNumber1>randomNumber2) {
  document.querySelectorAll("h1")[0].textContent= "Winner is "+ name1 +"!" ;
}

if(randomNumber1<randomNumber2) {
  document.querySelectorAll("h1")[0].textContent= "Winner is "+ name2 +"!";
}

if(randomNumber1===randomNumber2) {
  document.querySelectorAll("h1")[0].textContent= "Try again!";
}
