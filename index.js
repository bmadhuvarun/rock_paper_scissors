const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let ps = 0;
let cs = 0;
function playgame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  let r = "";
  if (playerchoice === computerchoice) {
    r = "IT'S A TIE";
  } else {
    switch (playerchoice) {
      case "rock":
        r = computerchoice === "scissors" ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        r = computerchoice === "rock" ? "YOU WIN" : "YOU LOSE";
        break;
      case "Scissors":
        r = computerchoice === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }
  playerdisplay.textContent = `PLAYER ${playerchoice}`;
  computerdisplay.textContent = `COMPUTER ${computerchoice}`;
  resultdisplay.textContent = r;
  resultdisplay.classList.remove("greenText", "redText");
  switch (r) {
    case "YOU WIN":
      resultdisplay.classList.add("greenText");
      ps++;
      playerscoredisplay.textContent = ps;
      break;
    case "YOU LOSE":
      resultdisplay.classList.add("redText");
      cs++;
      computerscoredisplay.textContent = cs;
      break;
  }
}
