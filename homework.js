let firstAnswer = prompt("Rock, Paper or Scissors ?");

let randomNumber = Math.random ()*3;
let randomRoundNumber = Math.floor (randomNumber + 1);
let stringAnswer;

if (randomRoundNumber===1) {  
    stringAnswer = "Rock";            
}else if (randomRoundNumber===2) {
    stringAnswer = "Paper";

}else{
    stringAnswer = "Scissors";
}

console.log (stringAnswer);


if (firstAnswer === "Paper" || firstAnswer ==="paper" || firstAnswer ==="Rock" || firstAnswer === "rock" || firstAnswer ==="Scissors" || firstAnswer === "scissors") {
   
    if (firstAnswer === "Paper" || firstAnswer === "paper") {
        if (stringAnswer === "Paper") {
            alert("It's tie !");
        }else if (stringAnswer === "Rock") {
            alert("You won !");
        }else{
            alert("You Lost !");
        }
    }else if (firstAnswer ==="Rock" || firstAnswer === "rock") {
        if (stringAnswer === "Paper") {
            alert("You won !");
        }else if (stringAnswer === "Rock") {
            alert("It's tie!");
        }else{
            alert("You lost !");
        }
        
    } else {
    
        if (stringAnswer === "Paper"){
            alert("You won !");
        }else if (stringAnswer === "Rock") {
            alert("You lost!");
        }else if (stringAnswer === "Scissors") {
            alert("It's tie!");
        }
    }

}else{
    alert("You have to enter something valid (Rock,Paper,Scissors)");
}


