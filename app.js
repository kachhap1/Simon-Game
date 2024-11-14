let gameSeq=[];
let userSeq=[];

let btns = ["red","blue","green","yellow"];

let start = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(event){
    if(start == false){
        console.log("Game Started");
        start = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn
    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randombtn);
}

function checkAns(idx){
   // console.log("Curr level :",level);
//    let idx = level-1;
if(userSeq[idx] === gameSeq[idx]){
   if(userSeq.length == gameSeq.length){
    setTimeout(levelUp,1000);
    }
   }else{
    h2.innerHTML =`Game Over!! Your score was <b>${level}</b> <br>Press any key to Start`;
    document.querySelector("body").style.background = "red";
    setTimeout(function(){
        document.querySelector("body").style.background = "white";
    },150);
    reset();
   }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSEq =[];
    userSeq = [];
    level =0;
}