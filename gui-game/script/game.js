
        let playerSelection;
        let computerSelection;
        let playerScore=0;
        let computerScore=0;
    
        const playerButtons = document.querySelectorAll('button');
        playerButtons.forEach(button => button.addEventListener('click', setPlayerChoice));
    
        function setPlayerChoice(e){
            if(e.srcElement.name == 'play'){
                game();
                return;
            }
            console.log(e.srcElement.name);
            playerSelection = e.srcElement.name;
        }
    
        function setComputerChoice(){
            const randomNum = getRandomInt(3);
            if(randomNum==0){
                return "Rock";
            }else if(randomNum==1){
                return "Paper";
            }else{
                return "Scissors";
            }
        }
    
        function playRound(playerSelection, computerSelection){
            if((playerSelection.toLowerCase()=='rock' && computerSelection.toLowerCase()=='scissors') || (playerSelection.toLowerCase()=='paper'
                && computerSelection.toLowerCase()=='rock') || (playerSelection.toLowerCase()=='scissors' && computerSelection.toLowerCase()=='paper')){
                    playerScore++;
                    updateScore();
                    return `You Won! ${playerSelection} beats ${computerSelection}`;
                }else if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){
                    return `Tied! You both chose ${playerSelection}`;
                }else{
                    computerScore++;
                    updateScore();
                    return `You Lost! ${computerSelection} beats ${playerSelection}`;
                }

        }

        function updateScore(){
            const scorePlayer = document.querySelector('#player-score');
            const scoreComputer = document.querySelector('#computer-score');

            scorePlayer.textContent = playerScore;
            scoreComputer.textContent = computerScore;

        }
    
        function game(){
                computerSelection = setComputerChoice();

                const container = document.querySelector('#container');
                const result = document.createElement('div');
                result.classList.add('result');
                result.textContent = playRound(playerSelection, computerSelection);

                container.appendChild(result);

                endGame();
        }

        function endGame(){
            if(playerScore == 5){
                const finalScore = document.createElement('div');
                finalScore.classList.add('final-score')
                finalScore.textContent = 'You did it! You beat the machine!!!'

                container.appendChild(finalScore);
                resetGame();
            }else if(computerScore == 5){
                const finalScore = document.createElement('div');
                finalScore.classList.add('final-score')
                finalScore.textContent = 'The computer beat you! This can not stand! \
                                        Try again and bring honor to the human race!';
                
                container.appendChild(finalScore);
                resetGame();
            }
        }

        function resetGame(){
            const reset = document.createElement('button');
            reset.setAttribute('type', 'button');
            reset.setAttribute('name', 'reset');
            reset.textContent = 'Again?';
            buttons.appendChild(reset);
            
            playerButtons.forEach(button => button.removeEventListener('click', setPlayerChoice));
            
            reset.addEventListener('click', refresh);
        }

        function refresh(){
            location.reload();
        }
    
        function getRandomInt(max){
            return Math.floor(Math.random() * Math.floor(max));
    }