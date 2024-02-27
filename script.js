"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number! ";
// //console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
// //console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } 
  else if (guess === secretNumber) 
  {
    document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".message").textContent = "correct number!";
  document.querySelector('body').style.backgroundColor = 'green';
  document.querySelector(".number").style.width = '400px';
  if(score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
  } 
  else if (guess > secretNumber)
   {
    if (score > 0) 
    {
      document.querySelector(".message").textContent = "⬆️ Too High";

      score--;
      document.querySelector(".score").textContent = score;
    } else 
    {
      document.querySelector(".message").textContent = " 😥😔You lost the Game";

      document.querySelector(".score").textContent = 0;
    }
  } 
  else if (guess < secretNumber) {
    if (score > 1) 
    {
      document.querySelector(".message").textContent = " ⬇️ Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the Game";
      document.querySelector(".score").textContent = 0;
    }
  }
  document.querySelector(".again").addEventListener("click", function()
  {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#48a4ce';
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = " ";
    document.querySelector(".number").style.width = '200px';
    document.querySelector(".message").textContent = "Start Guess Again!";

  });

});
