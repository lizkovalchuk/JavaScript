//=====================================================
//LAB 4-3
//Amasean offers free shipping once the total purchases are more than $35
//Let the shopper know when they cross the free shipping threshold

//Create an array to hold the shopping cart items.

var items = [];

//As long as the shipping threshold hasn’t been met, a popup box
//will ask the user for the dollar value of each new item.

//a while loop is perfect for this
//create an incrementor to plug into your array

var subTotal = 0;
var i = 0;

while (subTotal <= 35) {

	items[i] = prompt("What is your purchase's price?");
	subTotal = subTotal + parseInt(items[i]);

}

alert("Your shipping will be free");

