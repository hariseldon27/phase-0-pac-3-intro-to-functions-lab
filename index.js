function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    string = "hello"
    console.log(string.toUpperCase());
}
//logShout()

function logWhisper(string) {
    string = "HELLO"
    console.log(string.toLowerCase())
}
//logWhisper()

//What do we want to say to old Grammy?  Put it down below:
// let myWords = "Oh you old bag!"  <-- my initial approach that the tester didn't like!

let string = "HELLO";

function sayHiToGrandma(string) {
    let answer;
    //string = myWords;
    if (string === "I love you, Grandma.") {
        answer = "I love you, too.";
        }
    else if (string === string.toUpperCase()) {
        answer = "YES INDEED!";
    }
    else if (string === string.toLowerCase()) {
        answer = "I can\'t hear you!";
    }
        console.log(answer)
        return answer;    
    }
sayHiToGrandma()

/*
//variables for answers
const love = "I love you, too."
const noHear = "I can\'t hear you!"
const canHear = "YES INDEED!"

function sayHiToGrandma(string) {
    let answer;
    string = myWords;
    if (string === "I love you, Grandma.") {
        answer = love;
        }
    else if (string === string.toUpperCase()) {
        answer = canHear
    }
    else if (string === string.toLowerCase()) {
        answer = noHear;
    }
        return answer
        console.log(answer);
    }
sayHiToGrandma()

//console.log(string)


function capstester(workingstring) {
    workingstring = string
    console.log(workingstring);
    console.log(workingstring.toLowerCase());
    let result;
    workingstring === workingstring.toLowerCase() ? (result = "yessir") : (result="nope") ;
    console.log(result);
}
capstester()
*/