let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let compScore = document.querySelector("#compScore");
let playerScore = document.querySelector("#playerScore");
let drawScore = document.querySelector("#drawScore");

let result = document.querySelector("#result");
let info = document.querySelector("#info");

//let claps = document.querySelector("#claps");
//let boo = document.querySelector("#boo");
//let ohno = document.querySelector("#ohno");

let iterations = document.querySelector("#iterations");

let timesPlayed = 0;

let score_Comp = 0;
let score_Player = 0;
let score_Draw = 0;

const randomGen = () =>{
  return(Math.floor(Math.random() * 3) + 1);
}; 

let compVal = 0;

let st = 0,pa = 0,sc = 0;

stone.addEventListener("click", () => {
    timesPlayed++;
    iterations.innerText = ""+timesPlayed;
    boo.pause();
    claps.pause();
    ohno.pause();
    compVal=randomGen();
  if (compVal == 1) {
    result.innerText = "Draw, Computer chose Stone";
    info.style.backgroundColor = "blue";
    score_Draw++;
    drawScore.innerText = ""+score_Draw;
    ohno.play();
  }
  if (compVal == 2) {
    result.innerText = "You Lost, Computer chose Paper";
    info.style.backgroundColor = "red";
    score_Comp++;
    compScore.innerText = ""+score_Comp;
    boo.play();
  }
  if (compVal == 3) {
    result.innerText = "You Win, Computer chose Scissor";
    info.style.backgroundColor = "green";
    score_Player++;
    playerScore.innerText = ""+score_Player;
    claps.play();
  }
});

paper.addEventListener("click", () => {
    timesPlayed++;
    iterations.innerText = ""+timesPlayed;
    boo.pause();
    claps.pause();
    ohno.pause();
    compVal=randomGen();
  if (compVal == 1) {
    result.innerText = "You Win, Computer chose Stone";
    info.style.backgroundColor = "green";
    score_Player++;
    playerScore.innerText = ""+score_Player;
    claps.play();
  }
  if (compVal == 2) {
    result.innerText = "Draw, Computer chose Paper";
    info.style.backgroundColor = "blue";
    score_Draw++;
    drawScore.innerText = ""+score_Draw;
    ohno.play();
  }
  if (compVal == 3) {
    result.innerText = "You Loose, Computer chose Scissor";
    info.style.backgroundColor = "red";
    score_Comp++;
    compScore.innerText = ""+score_Comp;
    boo.play();
  }
});

scissor.addEventListener("click", () => {
    timesPlayed++;
    iterations.innerText = ""+timesPlayed;
    boo.pause();
    claps.pause();
    ohno.pause();
    compVal=randomGen();
  if (compVal == 1) {
    result.innerText = "You Loose, Computer chose Stone";
    info.style.backgroundColor = "red";
    score_Comp++;
    compScore.innerText = ""+score_Comp;
    boo.play();
  }
  if (compVal == 2) {
    result.innerText = "You Win, Computer chose Paper";
    info.style.backgroundColor = "green";
    score_Player++;
    playerScore.innerText = ""+score_Player;
    claps.play();
  }
  if (compVal == 3) {
    result.innerText = "Draw, Computer chose Scissor";
    info.style.backgroundColor = "blue";
    score_Draw++;
    drawScore.innerText = ""+score_Draw;
    ohno.play();
  }
});
