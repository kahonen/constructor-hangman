// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object 
// representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first 
//     function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function 
//     defined in Letter.js)
var Letter = require('./letters')


function Word(userWord){

    this.letters = [];

    for(let i = 0; i < userWord.length; i++){
        var currentLetters = new Letter(userWord[i]);
        this.letters.push(currentLetters);
    };
     
    this.toString = function(){
        var tempStr = "";
        for(let i = 0; i < this.letters.length; i++){
            tempStr.toLowerCase();
            tempStr += this.letters[i].toString();
        }
        return tempStr;
    };

    this.userGuess = function(character){
        for(let i = 0; i < this.letters.length; i++){
            this.letters[i].checkLetter(character);
        }
    //     var tempArr = [];
    //    if(character){
           
    //        console.log("You Guessed Correct!")

    //    }
    //    else{
    //        console.log("Sorry, Try Again!")
    //    }
    }
}

// var currentWord = new Word(randomWord);
// currentWord.userGuess("a");
// console.log(currentWord.toString());


module.exports = Word;