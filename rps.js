

//functions prints button choice on screen
function rock(){
let para = document.getElementById('choice');
let choice = document.createTextNode('rock ')
	para.appendChild(choice);
};

function paper(){
let para = document.getElementById('choice');
let choice = document.createTextNode('paper ')
	para.appendChild(choice);
};

function scissors(){
let para = document.getElementById('choice');
let choice = document.createTextNode('scissors ')
	para.appendChild(choice);
};




//Game Logic



//global variables
let playerScore = 0
let computerScore = 0
let round = 1

//decides what choice computer chooses
function computerPlay(){
	let choices = ["rock", "paper", "scissors"];

	let cpuChoice = choices[Math.floor(Math.random() * choices.length)];

	return cpuChoice;
}

//decides who wins
function selections(playerSelection, computerSelection){

	

	if (playerSelection == computerSelection){
		alert("It's a tie! " + playerSelection + " and "   + computerSelection + " are the same!");
			return round +=1;
	}

	else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
			playerSelection == 'scissors' && computerSelection == 'paper' || 
			playerSelection == 'paper' && computerSelection == 'rock'){
		
		alert('Player Wins! ' + playerSelection + ' beats ' + computerSelection);
		return playerScore += 1, round +=1;
		
	}
	
	else {
		
		alert('computer wins! ' + computerSelection + ' beats ' + playerSelection);
		return computerScore +=1, round +=1;

	}
	
	
}  



//runs a round of the game

function playRound(){

let playerSelection = prompt("Round " + round + " Player: " + playerScore + " Computer: " + computerScore)
let computerSelection = computerPlay()
selections(playerSelection, computerSelection)

}

//runs a full game which would be 5 rounds

/*function game(){
	

	playRound()
	playRound()
	playRound()
	playRound()
	playRound()

//announces the winner via alert
	if(playerScore == computerScore){
		alert("The game ended in a tie....BORING!")
	} else if(playerScore > computerScore){
		alert("Player Wins the Game!" )
	} else{
		alert("You suck. Computer Wins the Game.")
	};

}



game()*/






