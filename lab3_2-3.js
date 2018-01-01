//=====================================================
//LAB 3-2&3
//Create pop-up to ask "want to join newsletter?"
//If they say "ok", ask for email
//Their email shouldn't be the default
//If they say "no" output appropriate message


//alert("Hello World");


var asktoSignup = confirm("Would you like to sign up for the email newsletter?");

if (asktoSignup == true) {
	while (asktoSignup == true)
		{
		var yesMessage = prompt("Please input your email", "me@example.com");	
		console.log(yesMessage);
		asktoSignup = false;

			if (yesMessage == "me@example.com" || yesMessage == "" || yesMessage == null)
				{
				asktoSignup = true;
				} else 
					{
					alert("Thank you, expect an email shortly");
					asktoSignup = false;
					}		
		}
}

else {
	alert("Thank you regardless")
}



