let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let refresh_btn = document.getElementById("refresh");

function getRandomChoice() {
  let choices = ["r", "p", "s"];
  let randChoices = Math.floor(Math.random() * choices.length);
  return choices[randChoices];
}

function getLetter(userLetter) {
  if (userLetter === "r") return "Rock";
  if (userLetter === "p") return "Paper";
  if (userLetter === "s") return "Scissors";
}

function win(userChoice, compChoice) {
  userScore++;
  computerScore;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  userText = getLetter(userChoice);
  compText = getLetter(compChoice);
  userSub = "user".fontsize("3px").sub();
  compSub = "comp".fontsize("3px").sub();
  result_p.innerHTML = `${userText}${userSub} wins ${compText}${compSub}`;
}
function lose(userChoice, compChoice) {
  computerScore++;
  userScore;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  userText = getLetter(userChoice);
  compText = getLetter(compChoice);
  userSub = "user".fontsize("3px").sub();
  compSub = "comp".fontsize("3px").sub();
  result_p.innerHTML = `${userText}${userSub} loses to ${compText}${compSub}`;
}

function draw(userChoice, compChoice) {
  computerScore;
  userScore;
  userText = getLetter(userChoice);
  compText = getLetter(compChoice);
  userSub = "user".fontsize("3px").sub();
  compSub = "comp".fontsize("3px").sub();
  result_p.innerHTML = `${userText}${userSub} draws to ${compText}${compSub}`;
}

function game(userChoice) {
  let computerChoice = getRandomChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });

  scissors_div.addEventListener("click", () => {
    game("s");
  });
}

main();

refresh_btn.addEventListener("click", (e) => {
  e.preventDefault();
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
});
