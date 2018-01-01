//=============SUP3================//
//ARRAYS AND LOOPS
//create an empty array for a shopping cart

var shoppingCart = [];

//create an array of 5 grocery items.

var Items = ["bananas", "lemons", "milk", "eggs", "cheese"];

//create an array of prices for the above items

var Prices = [0.99, 1, 3.99, 1.29, 5.99];

//output the first and last items from both arrays to console

console.log(Items[0], Prices[0]);
console.log(Items[4], Prices[4]);

//create an empty array for a music playlist

var playlist = [];

//use the push function to add 5 songs to the end
//of the playlist.

playlist.push("Main girl", "Joanne", 
				"Fire and Rain", "Jiji", "A Million Reasons");

console.log(playlist.length);

//use shift to remove the first song of th array and
//output the title to the console

var nextSong = playlist.shift(0);
console.log(nextSong);

//output the remaining array

console.log(playlist);

//use a for loop to count from 0-10 in the console

for(i = 0; i <= 10; i++) {
	console.log(i);
};

//use a for loop to count down from 10 to 0

for(i = 10; i > 0; i--) {
	console.log(i);
}

//use a for loop to count from 0 to 100 by twenty in the console.

for(i = 0; i <= 100; i += 20) {
	console.log(i);
}

//create an empty array to hold colours

var colours = [];

//create a loop that asks users to add a colour four times

for (i = 1; i <= 4; i++) {
	var userinput = prompt("Please pick a colour");
	colours.push(userinput);
};

for (i = 1; i <= colours.length; i++) {
	console.log(colours)
}

//declare and initiale a false variable.

var flagVar = false;

while (flagVar == false) {
		var prompt = confirm("Are you sure?");
			if (prompt == false) {
				flagVar = false;
				} else {
					flagVar = true;
					alert("Oh, good");
					}
};












