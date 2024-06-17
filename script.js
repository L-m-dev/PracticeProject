console.log("Hello World..!")

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

function getHumanChoice(){
    let chosenPlay;
    try {
        chosenPlay = window.prompt('Choose\n 1. Rock\n 2.Paper\n 3. Scissors');
        if (!(chosenPlay == 1 || chosenPlay == 2 || chosenPlay == 3)) {
            throw new InvalidChoiceException();
        }
    } catch (error) {
        return error;
    } finally {
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
}   

function playRound(humanChoice, computerChoice){
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
        
            return winner;
        }
    
function playGame(){
    let humanScore=0;
    let computerScore=0;
    let cChoice;
    let hChoice;

    while(!(humanScore==5^computerScore==5)){
          cChoice = getComputerChoice();
           hChoice = getHumanChoice();
         let winner = playRound(hChoice, cChoice);

        console.log(`Winner : ${winner}`);
        if(winner=='HumanWin'){
            humanScore++;
        }else
        if(winner=='ComputerWin'){
            computerScore++;
        }
        console.log(winner);
        console.log(`Score: \nhuman: ${humanScore}\ncomputer: ${computerScore} `);
    }



}
 