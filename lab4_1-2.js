//=====================================================
//LAB 4-1
//alert("hello World");

//Create a JavaScript array of fruits with 5 fruits in it. 
//Have an alert box output one of those fruits. */


var FruitArray = ["banana", "cherry", "pineapple", "melon", "tomatoe"];
alert(FruitArray[3]);

//======================================================
//LAB 4-2
//Create Array for your team members
//Use JavaScript to remove the last member of the team.
//Use JavaScript to add me (“Sean”) to the front of the array.
//Use JavaScript to organize the array alphabetically.
 
var ourTeam = ["Matt", "Liz", "Deigo", "Nelia"];
ourTeam.pop();
ourTeam.unshift("Sean");
ourTeam.sort(ourTeam);
console.log(ourTeam);

//A message on the console should say, “We have NUMBER people
//in our group.”, where NUMBER is a dynamic number that is the
//number of items in the ourTeam array.

console.log("we have " + ourTeam.length + " people our group");

//Have the console display the names of the group members
//with each team member's name on its own line. 
//Beside each name should be " is # NUM." with the person's number for NUM. 
//Remember: we want ‘1’ and not ‘0’ for the first person.

//The best method for this is a for loop.
//step 1 create a variable to hold the team length
var teamLenght = ourTeam.length;

//compose and execute the for loop
for (var i = 0; i < teamLenght; i = i + 1){
	console.log(ourTeam[i] + " is # ");
}

//We must introduce a new variable that holds a number
//so we can increment it and include it in the for loop.

var displayNumber = 1

for (var i = 0; i < teamLenght; i++){
	console.log(ourTeam[i] + " is # " + displayNumber);
	displayNumber++;
}














