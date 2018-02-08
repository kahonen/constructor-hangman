var word = require('./word');
var inquirer = require('inquirer');
var guessesLeft = 10;
var lettersGuessed = [];
var wordList = ["apple", "banana", "orange", "pineapple"];
var randomWord = wordList[Math.floor(Math.random()* wordList.length)];
var currentWord = new word(randomWord);
var alreadyGuessed = false;


function start() {

	inquirer.prompt([
	{
		type: "confirm",
		message: "Are you ready to play Hangman?\n",
		name: "play"
	}
		])
	.then(function(answer) {
		if (answer.play) {
            console.log("\nLet's Play!  You have 10 guesses! Good Luck!");
            newGame();
		}
		else {
			console.log("\nBye Felecia! Come back when you're ready for a challenge! ");
		}
    });
};
  
    function newGame(randomWord){
        
        console.log(currentWord.toString());

        if(guessesLeft > 0){

    inquirer.prompt([
        {
            type: "input",
            message: "Pick a letter\n",
            name: "letterPicked"
        }
            ])
        .then(function(answer) {
            
            currentWord.userGuess(answer.letterPicked);
            
            lettersGuessed.push(answer.letterPicked)

            //console.log("\n______________________\n")
            
        for(var i = 0; i < lettersGuessed.length; i++){
            if( lettersGuessed[i] === answer.letterPicked ){
                alreadyGuessed = true;
                return console.log("You already picked that letter! Try again!")
                
            }
        };
        guessesLeft--;
        newGame();
        })
        // .catch(function(err){
        //     console.log(err)
        // })
     }
     else{
        inquirer.prompt([
            {
                type: "confirm",
                message: "Would you like to play again\n?",
                name: "option"
            }
                ])
            .then(function(answer) {
                if( answer.option ){
                    guessesLeft = 10;
                    console.log( "\nYAY! Lets play again! ")
                    start();
                    
                }
                else{
                    console.log("\nSee you next time!")
                }


     })
    };
};


start();