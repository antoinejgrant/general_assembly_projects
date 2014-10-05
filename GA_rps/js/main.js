//var computerChoice ="paper";
var choices = ["rock", "paper", "scissors"];
var outcome = "";
var playerScore = 0;
var computerScore = 0;

function choice(playerChoice){
	var computerChoice = choices[Math.floor(Math.random()*choices.length)];

	if(playerChoice == computerChoice){
		console.log(playerChoice);
		console.log(computerChoice);
		document.getElementById('title').innerHTML="draw";
		titleBar.style.backgroundColor = "F39C12";
		home.style.backgroundColor = "#ECF0F1";
		away.style.backgroundColor = "#ECF0F1";

	}
	else if(playerChoice == "rock" && computerChoice == "scissors"){
		console.log(playerChoice);
		console.log(computerChoice);
		document.getElementById('title').innerHTML="you win - computer played scissors";
		playerScore ++;
		titleBar.style.backgroundColor = "16A085";
		home.style.backgroundColor = "#16A085";
		away.style.backgroundColor = "#C0392B";
	}
	else if(playerChoice == "rock" && computerChoice == "paper"){
		console.log(playerChoice);
		console.log(computerChoice);
		document.getElementById('title').innerHTML="you lose - computer played paper";
		computerScore ++;
		titleBar.style.backgroundColor = "C0392B";
		home.style.backgroundColor = "#C0392B";
		away.style.backgroundColor = "#16A085";
	}
	else if(playerChoice == "scissors" && computerChoice == "paper"){
		console.log(playerChoice);
		console.log(computerChoice);
		document.getElementById('title').innerHTML="you win - computer played paper";
		playerScore ++;
		titleBar.style.backgroundColor = "16A085";
		home.style.backgroundColor = "#16A085";
		away.style.backgroundColor = "#C0392B";
	}
	else if(playerChoice == "scissors" && computerChoice == "rock"){
		console.log(playerChoice);
		console.log(computerChoice);
		document.getElementById('title').innerHTML="you lose - computer played rock";
		computerScore ++;
		titleBar.style.backgroundColor = "C0392B";
		home.style.backgroundColor = "#C0392B";
		away.style.backgroundColor = "#16A085";
	}
	else if(playerChoice == "paper" && computerChoice == "scissors"){
		console.log(playerChoice);
		console.log(computerChoice);
		document.getElementById('title').innerHTML="you lose - computer played scissors";
		computerScore ++;
		titleBar.style.backgroundColor = "C0392B";
		home.style.backgroundColor = "#C0392B";
		away.style.backgroundColor = "#16A085";
	}
	else if(playerChoice == "paper" && computerChoice == "rock"){
		console.log(playerChoice);
		console.log(computerChoice);
		document.getElementById('title').innerHTML="you win - computer played rock";
		playerScore ++;
		titleBar.style.backgroundColor = "16A085";
		home.style.backgroundColor = "#16A085";
		away.style.backgroundColor = "#C0392B";
	}

	console.log(playerScore);
	console.log(computerScore);

	document.getElementById('homeScore').innerHTML = playerScore;
	document.getElementById('awayScore').innerHTML = computerScore;

	//if(playerChoice = "rock" && computerChoice = "paper"){
	//	alert("you lost");
	//else{
	//	if(playerChoice = "rock" && computerChoice = "scissors" ){
	//	playerScore ++;
	//	}
	//	console.log(playerScore);
	//};
};