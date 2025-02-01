let userScore =0;
let compScore =0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx =  Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was draw . Play again !";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,UserChoice,compChoice) =>{
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${UserChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You loose! beats ${compChoice} your ${UserChoice}`;
    msg.style.backgroundColor = "red";
}
};

const gamePlay = (UserChoice,) => {
 console.log("user choice = ", UserChoice);
 const compChoice = genCompchoice();
 console.log("Comp-Choice =", compChoice);

 if(UserChoice === compChoice){
 drawGame();
 }else{
    let userWin = true;
    if(userWin === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userWin === "paper"){
        userWin = compChoice === "paper"? false : true;
    }else{
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin, UserChoice,compChoice);
 }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const UserChoice = choice.getAttribute("id")
        gamePlay(UserChoice);
    });
});