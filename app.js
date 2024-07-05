let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let compScore = document.querySelector("#compScore");
let playerScore = document.querySelector("#playerScore");

let result = document.querySelector("#result");
let info = document.querySelector("#info");

let score_Comp = 0;
let score_Player = 0;

const randomGen = () =>{
    return(Math.floor(Math.random() * 3) + 1);
}; 

let compVal = 0;

let st = 0,
  pa = 0,
  sc = 0;

stone.addEventListener("click", () => {
    compVal=randomGen();
  if (compVal == 1) {
    result.innerText = "Draw, Computer chose Stone";
    info.style.backgroundColor = "blue";
  }
  if (compVal == 2) {
    result.innerText = "You Lost, Computer chose Paper";
    info.style.backgroundColor = "red";
    score_Comp++;
    compScore.innerText = ""+score_Comp;
  }
  if (compVal == 3) {
    result.innerText = "You Win, Computer choose Scissor";
    info.style.backgroundColor = "green";
    score_Player++;
    playerScore.innerText = ""+score_Player;
  }
});

paper.addEventListener("click", () => {
    compVal=randomGen();
  if (compVal == 1) {
    result.innerText = "You Win, Computer chose Stone";
    info.style.backgroundColor = "green";
    score_Player++;
    playerScore.innerText = ""+score_Player;
  }
  if (compVal == 2) {
    result.innerText = "Draw, Computer chose Paper";
    info.style.backgroundColor = "blue";
  }
  if (compVal == 3) {
    result.innerText = "You Loose, Computer choose Scissor";
    info.style.backgroundColor = "red";
    score_Comp++;
    compScore.innerText = ""+score_Comp;
  }
});

scissor.addEventListener("click", () => {
    compVal=randomGen();
  if (compVal == 1) {
    result.innerText = "You Loose, Computer chose Stone";
    info.style.backgroundColor = "red";
    score_Comp++;
    compScore.innerText = ""+score_Comp;
  }
  if (compVal == 2) {
    result.innerText = "You Win, Computer chose Paper";
    info.style.backgroundColor = "green";
    score_Player++;
    playerScore.innerText = ""+score_Player;
  }
  if (compVal == 3) {
    result.innerText = "Draw, Computer choose Scissor";
    info.style.backgroundColor = "blue";
  }
});