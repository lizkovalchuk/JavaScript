//=============SUP2================//
//VARIABLES & OPERATORS
//Create a program that sends a popup box with the message: 
//"Your average for the past 5 games is: "
//Create a second popup that tells her how many points her average is away 
//from the required average to improve her score at the next try outs. 
//That number should not have more than one decimal place.


var game1 = 190;
var game2 = 155;
var game3 = 186;
var game4 = 145;
var game5 = 170;
var gameNumbers = 5;

function average(a,b,c,d,e){
	var result = (a + b + c + d + e)/gameNumbers;
	return result;
}

var pointsAverage = average(game1, game2, game3, game4, game5);
alert("Your average for the past 5 games is " + pointsAverage);

if (pointsAverage < 185){
	var pointsRemaining = 185 - pointsAverage;
	alert("Your points average is " + parseFloat(pointsRemaining).toFixed(1) + " away to make the tryouts")
};