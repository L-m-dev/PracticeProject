console.log("Hello World..!")

let gameButtons = document.querySelectorAll('.gamebutton');
let humanScoreDom = document.querySelector('#human-score');
let computerScoreDom = document.querySelector('#computer-score');
let winnerTextDom = document.querySelector('#winner-text');
 let humanScore;
 let computerScore;
 let winnerFound = false;

    gameButtons.forEach((b) => { 
        let chosenHumanPlay;
        b.addEventListener('click', function(b){
         chosenHumanPlay = b.target.name;
         console.log(playRound(getHumanChoice(chosenHumanPlay),getComputerChoice()));
    })}); 

        

function getComputerChoice(){

   let numberGenerated = Math.random();

    if(numberGenerated<0.33){
        return 'Rock';
    } 
    else if(numberGenerated<0.66){
        return 'Paper';
    }
    else if(numberGenerated<1){
        return 'Scissors';
    }    

}

function getHumanChoice(chosenPlay){
     console.log(chosenPlay);
        if (chosenPlay == 1) {
            return 'Rock';
        } else if (chosenPlay == 2) {
            return 'Paper';
        } else if (chosenPlay == 3) {
            return 'Scissors';
        } else{
            return 'None';
        }
    }


function playRound(humanChoice, computerChoice){
    if(humanScore == undefined || computerScore == undefined){
     humanScore=0;
     computerScore=0;
    }
    if(winnerFound){
        winnerTextDom.textContent ='';
        winnerFound=false;
        humanScore=0;
        computerScore=0;

          humanScoreDom.textContent=humanScore;
        computerScoreDom.textContent=computerScore;
    }
         humanScoreDom.textContent=humanScore;
        computerScoreDom.textContent=computerScore;

    
    let winner = '';


    if(humanChoice == 'None'){
        winner = 'ComputerWin';
    } else
    if (humanChoice == computerChoice) {
        winner = 'Draw';
    } else
        if (humanChoice == 'Rock' && computerChoice == 'Paper') {
            winner = 'ComputerWin';
        } else
            if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
                winner = 'ComputerWin';
            } else {
                if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
                    winner = 'ComputerWin';
                } else {
                    winner = 'HumanWin';
                }

            }

            if(winner=='HumanWin'){
                humanScore++;
                humanScoreDom.textContent = humanScore;
            }else
            if(winner=='ComputerWin'){
                computerScore++;
                computerScoreDom.textContent = computerScore;
    
            }
            if(computerScore==5 || humanScore==5){
                if(computerScore==5){
                    winnerTextDom.textContent = 'Computer wins';
                    winnerFound=true;

                } else 
                if(humanScore==5){
                    winnerTextDom.textContent = 'Human wins';
                    winnerFound=true;
                }
            }
        
        console.log(`score ${computerScore} and winner is ${winner}`);
            return winner;
        }
    
function playGame(){
    
    let humanScore=0;
    let computerScore=0;
    let cChoice;
    let hChoice;
 
          cChoice = getComputerChoice();
           hChoice = getHumanChoice();
         let winner = playRound(hChoice, cChoice);

        console.log(`Winner : ${winner}`);
        if(winner=='HumanWin'){
            humanScore++;
            humanScoreDom.textContent = humanScore;
        }else
        if(winner=='ComputerWin'){
            computerScore++;
            computerScoreDom.textContent = computerScore;

        }
        console.log(winner);
        console.log(`Score: \nhuman: ${humanScore}\ncomputer: ${computerScore} `);
     
 
        }
    


 