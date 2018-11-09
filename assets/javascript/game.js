//Javascript framework
//Theme: Fantasy


var game = {
    //Array with list of words
    wordList: ["alicorn", "banshee", "basilisk", "bogeyman", "brownies", "centaur", "cerberus", "chimera", "cockatrice", 
        "cyclops", "demon", "doppelganger", "dragon", "dwarf", "elf", "fairy","ghost", "gnome", "goblin", "golem", "gorgon", 
        "griffin", "hobgoblin", "hydra", "imp", "lamia", "leprechaun", "manticore", "medusa", "mermaid", "minotaur", "nymph", 
        "ogre", "pegasus", "phoenix", "pixie", "sasquatch", "satyr", "shade", "shapeshifter", "sirens", "sphinx", "sprite", 
        "sylph", "thunderbird", "unicorn", "valkyries", "vampire", "wendigo", "werewolf", "wraith", "zombie"],

    //function to select random word from wordList
    randWord: function() {
        var randNum = Math.floor(Math.random()*game.wordList.length);
        console.log("wordList.length: "+game.wordList.length);
        console.log("randNum: "+randNum);
        return game.wordList[randNum];
    }
}
document.onkeyup = function(event){
    if(event.key === "w") {
        var check = game.randWord();
        console.log(check);
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