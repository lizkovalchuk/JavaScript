/*STEPS 1 - 2
* Create variables to hold the username, “monkey”, and the
password, “banana”. 

alert("Hello World");*/

var username = "monkey";
var password = "banana";
var check = true;

/*STEP 3 - 7
* Create a popup box that asks the user for their username.
* Output the provided username to the console with some text.
* Create a popup box that asks the user for their password.
* Output the provided password to the console with some text.
*Create the logic to check if the username and password provided
*by the user match the stored username/password.
*/

while (check == true)

{   var askUsername = prompt("What is your username?");
	console.log(askUsername + " is what the user provided");

	var askUserpassword = prompt("What is your password?");
	console.log(askUserpassword + " is what the user provided");

	if (askUsername == username && askUserpassword == password)

		{ alert("Welcome Monkey");
		  check = false;
		} 

		else 
			{
			alert("Access Denied");
			}
}






