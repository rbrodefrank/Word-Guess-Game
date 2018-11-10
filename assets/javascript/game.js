//Javascript framework
//Theme: Fantasy


var game = {
    //Array with list of words
    wordList: ["alicorn", "banshee", "basilisk", "bogeyman", "brownies", "centaur", "cerberus", "chimera", "cockatrice", 
        "cyclops", "demon", "doppelganger", "dragon", "dwarf", "elf", "fairy","ghost", "gnome", "goblin", "golem", "gorgon", 
        "griffin", "hobgoblin", "hydra", "imp", "lamia", "leprechaun", "manticore", "medusa", "mermaid", "minotaur", "nymph", 
        "ogre", "pegasus", "phoenix", "pixie", "sasquatch", "satyr", "shade", "shapeshifter", "sirens", "sphinx", "sprite", 
        "sylph", "thunderbird", "unicorn", "valkyries", "vampire", "wendigo", "werewolf", "wraith", "zombie"],
    guessedLetters: [],
    word: "",
    wordDisplay: [],
    guesses: 8,

    //function to return random word from wordList
    randWord: function() {
        var randNum = Math.floor(Math.random()*game.wordList.length);
        console.log("wordList.length: "+game.wordList.length);
        console.log("randNum: "+randNum);
        return game.wordList[randNum];
    },

    //function to get new word and display blank on screen
    newWord: function() {
        var wordDiv = document.getElementById("guessWord");
        game.word = game.randWord();
        game.wordDisplay = [];
        for(var i = 0; i < game.word.length; i++) {
            game.wordDisplay.push("__");
            // console.log(game.wordDisplay);
            // console.log("for["+i+"] = " + game.word[i]);
        }
        // console.log("wordDisplay: " + wordDisplay)
        wordDiv.textContent = game.displayGuessWord();
        console.log("game.word: " + game.word);
        console.log("game.word.length: " + game.word.length);

        //reset guessed letters & guesses
        game.guesses = 8;
        document.getElementById("guess-number").textContent = game.guesses;
        game.guessedLetters = [];
        document.getElementById("guessedLetters").textContent = game.guessedLetters;
        document.getElementById("message").textContent = "Guess the Creature!";
        document.getElementById("creature-name").textContent = "";
    },

    displayGuessWord: function () {
        var returnWord = "";
        for(var i=0; i<game.wordDisplay.length; i++) {
            returnWord += game.wordDisplay[i] + " ";
        }
        // console.log("returnWord: " + returnWord);
        return returnWord;
    }
}

game.newWord();

document.onkeyup = function(event){
    // randWord Function test: press w to see resoluts in console
    if(event.keyCode === 16) { //on "Shift" key press
        game.newWord();
    }

    // console.log(event.keyCode);
    // Check if the key pressed is a-z
    if(65 <= event.keyCode && event.keyCode <= 90) {
        // console.log(event);
        // console.log("event.key: " + event.key);
        var letters = document.getElementById("guessedLetters");
        
        //check if already guessed
        if(game.guessedLetters.indexOf(event.key) < 0) {
            //add to guessedLetters element
            if(letters.textContent === ""){
                letters.textContent = event.key.toUpperCase();
            } else {
                letters.textContent = letters.textContent+ ", " + event.key.toUpperCase();
            }

            //add key pressed to guessedLetters array
            game.guessedLetters.push(event.key);

            //if letter pressed is in the word to guess
            if(game.word.indexOf(event.key) >= 0){
                //guessed a letter correctly
                // console.log("inside game.word.indexOf");
                for(var i=0; i<game.word.length; i++) {
                    // console.log("game.word[i]: " + game.word[i]);
                    // console.log("event.key: " + event.key);
                    if(game.word[i].toLowerCase() === event.key){
                        // console.log("word[i] === event.key");
                        // console.log("wordDisplay[i] = " + game.wordDisplay[i]);
                        game.wordDisplay[i] = event.key.toUpperCase();
                        // console.log(game.wordDisplay);
                    }
                }

                //Notify the user they were correct
                document.getElementById("message").textContent = "Correct! " + event.key.toUpperCase() + " is in this word.";
                document.getElementById("guessWord").textContent = game.displayGuessWord();
            } else {
                //did not guess correctly
                game.guesses--;
                document.getElementById("guess-number").textContent = game.guesses;
                document.getElementById("message").textContent = "Incorrect! " + event.key.toUpperCase() + " is NOT in this word.";
            }

            //Check win condition
            if(game.wordDisplay.indexOf("__") < 0) {
                document.getElementById("message").textContent = "You Won!"
                document.getElementById("creature-name").textContent = game.word.toUpperCase() + " is the name of the creature!";
                
            } else if(game.guesses <= 0) {
                document.getElementById("message").textContent = "Game Over!";
                document.getElementById("creature-name").textContent = "The creature was " + game.word.toUpperCase();
                
            }

        } else {
            //inform user they already guessed that number
            document.getElementById("message").textContent = "You've already guessed " + event.key;
        }
    }
}

//randomly select a word
//display word

//document.onkeyup function () 
//need on key up
    //get key pressed
    //check if already guessed
    //if guessed already alert user
    //else check if it is in word
        //if in word reveal the matching letters
        //else inform user
        
        //decriment guesses
        
        //check if entire word is revealed
            //you win
            //restart game
        //else check if out of guesses
            //if so you lose
            //restart game

//list letters guessed
//list num guesses remaining