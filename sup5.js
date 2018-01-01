//===========SUP 5=================//
//FUNCTIONS AND OBJECTS
//create a function that when called, sends a pop-up
//with the message "Hello World"

function ex1(){
	alert("Hello World");
};

ex1();

//create a function that will send a pop-up
//with whatever message the user provides

function ex2(){
	var userInput = prompt("Enter how you feel?");
	alert(userInput);
}

ex2();

//create a function that takes a 4-digit code
//and a name, then sends a pop-up with the message:
//"________ teaches this course ________"


function ex3(code, name){
	var code = prompt("what is your course code?");
	var name = prompt("Who teaches your course?");
	alert(name + " teaches " + code);
};

ex3();

//create a function that returns a value
//that takes a subtotal, adds the sales tax (13%)
//then returns the new total (to 2 decimal points)
//have the console log the function result

function postTax(subtotal) {
	var total = subtotal * 1.13;
	return total.toFixed(2);
}

var test = postTax(10);
console.log(test);


//create a vriable and assign it an empty object

var emptyObject = {};

//create a videogame character object
//give it three properties (string, interger and boolean)
//output each property to the console.
//give your character a method called Bonus life

var vidChar = {
	level: "beginner",
	livesleft: 4,
	superSize: true,

	bonuslife: function(){
		vidChar.livesleft = (vidChar.livesleft + 1);
		}
}

console.log(vidChar.level);
console.log(vidChar.livesleft);
console.log(vidChar.superSize);

//without manually coding, advance your character to the next level.
//however at the cost of one life (so lower livesleft var)
//also change the superSize to false, because a life was lost

vidChar.level = "medium";
vidChar.livesleft = 3;
vidChar.superSize = false;

console.log(vidChar.level);
console.log(vidChar.livesleft);
console.log(vidChar.superSize);

//first output the livesleft property
//then call the bonuslife method
//then output the livesleft property again

console.log(vidChar.livesleft);
vidChar.bonuslife();
console.log(vidChar.livesleft);

//create an object called myScore to track score for mini-golf
//give it 4 properties (one must be an array)
//create a method that adds scores from rounds to score and to the Array
//since mini-gold has 9 holes, the method should check to make sure
//there are fewer than nine items in the array before inserting a new item


var myScore = {
    name: "liz",
    colour: "green",
    score: 0,
    scoreArray: [],

    scoreAdder: function(holeScore){
        var holeScore;
        if(myScore.scoreArray.length >= 9){
			alert("Cannot add score, you have played 9 holes");
		return(myScore.score)
		}	else {
        	myScore.score += holeScore;
        	myScore.scoreArray.push(holeScore);
        	return myScore.score;
		}
    }
}


//output the score to the console
//call the method with a score of 2, 3, and 4
//the score should be 9, and the array should be [2,3,4]


console.log(myScore.score);
myScore.scoreAdder(2);
console.log(myScore.score);
myScore.scoreAdder(3);
myScore.scoreAdder(4);

console.log(myScore.score, myScore.scoreArray);
/*
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);
myScore.scoreAdder(1);

console.log(myScore.score, myScore.scoreArray)*/



































