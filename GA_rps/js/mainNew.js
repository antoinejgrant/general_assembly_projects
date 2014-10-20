var choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;

var playerWins = ["rockscissors", "paperrock", "scissorspaper"];


function choice(playerChoice){
	var computerChoice = choices[Math.floor(Math.random()*choices.length)];
	var msg;
	
	if(playerChoice == computerChoice){
		msg = "Draw";
 	} 
  	else{
    	var outcome = playerChoice + computerChoice;
    	$.each(playerWins, function(index, value){
      		if(outcome == value){
       		msg = "User";
        	} 
    	});
    }   	

    // It's great that you can implement this with pure Javascript. But, do you feel comfortable enough with jQuery to do it using the library if you needed to?
	if(msg == "Draw"){ 
		document.getElementById('title').innerHTML="draw - you both played " + computerChoice;
		titleBar.style.backgroundColor = "F39C12";
		home.style.backgroundColor = "#ECF0F1";
		away.style.backgroundColor = "#ECF0F1";
	}
	else if(msg == "User"){
	    playerScore ++;
	    document.getElementById('title').innerHTML="you win - computer played " + computerChoice;
	    titleBar.style.backgroundColor = "16A085";
		home.style.backgroundColor = "#16A085";
		away.style.backgroundColor = "#C0392B";
	}
	else {
		computerScore ++;
	    document.getElementById('title').innerHTML="you lose - computer played " + computerChoice;
	    titleBar.style.backgroundColor = "C0392B";
		home.style.backgroundColor = "#C0392B";
		away.style.backgroundColor = "#16A085";
	}

	document.getElementById('homeScore').innerHTML = playerScore;
	document.getElementById('awayScore').innerHTML = computerScore;
}
