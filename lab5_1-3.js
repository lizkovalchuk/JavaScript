//=====================================================
//LAB 5-1
//Create a function that takes 5 parameters.
//This function will return the average of the five numbers it
//receives (to one decimal place)
//Test your new function by outputting to the console with the
//values: 5, 10, 15, 20, 25. The result should be 15.0.
//use your function to determine your program average.
//send a success popup message if the overall average is 65 or more

function average (a,b,c,d,e) {
	var anwser = (a + b + c + d + e) / 5 ;
	return anwser;
}

var firstQ = (average(5, 10, 15, 20, 25));
var secondQ = (average(89, 99, 100, 92, 97));

if ( secondQ > 65) {
	alert("Success");
} else {
	alert("Study more");
}

//=====================================================
//LAB 5-2
//Create a JavaScript object named meObject with 4 properties
//Use the console to output one of those properties.

var meObject = {
	age : 27 ,
	sunSign : "Sagittarius" ,
	birthPlace : "Riga" ,
	firstPet : "Ruby",
	message: function(){
				alert("My age is " + meObject.age + 
					" and I was born in " + meObject.birthPlace);	
	}
}

console.log(meObject.firstPet);

meObject.message();

//Create a popup that will output two of those properties
//concatenated together.


//alert("My age is " + meObject.age + " and I was born in " + meObject.birthPlace);

//=====================================================
//LAB 5-3
//Create a JavaScript object named bankCustomer with 4 properties
//lastName, branchNumber, accountBalance, & interestRate (as a decimal value).
//create methods makeDeposit, makeWithDrawal, & addInterest.
//(addInterest should simply multiply the current balance)
//make sure to save input so transactions are cumulative
//EXTRA CHALLENGE: Add another property: multipleAccounts. 
//This will hold a Boolean value. If set to true, 
//the addInterest method will add .005 to the interest rate.

var bankCustomer = {
	lastName : "Gabriel" ,
	branchNumber : 001 ,
	accountBalance : 500.47 ,
	interestRate : 1.75 ,
	multipleAccounts : true ,

	makeDeposit: function(deposit){
		bankCustomer.accountBalance = (bankCustomer.accountBalance + deposit);
		console.log(bankCustomer.lastName + " has " + bankCustomer.accountBalance + " in his account now.");
		return bankCustomer.accountBalance;
	},
	makeWithDrawal: function(withdrawal){
		bankCustomer.accountBalance = (bankCustomer.accountBalance + withdrawal);
		console.log(bankCustomer.lastName + " has " + bankCustomer.accountBalance + " in his account now")
	},
	addInterest: function() {
		bankCustomer.accountBalance = (bankCustomer.accountBalance * bankCustomer.interestRate);
		console.log(bankCustomer.lastName + "'s account balance post interest is " + bankCustomer.accountBalance);
	}
}

bankCustomer.makeDeposit(75);
bankCustomer.makeDeposit(100);
bankCustomer.makeWithDrawal(100);

if (multipleAccounts = true) {
	bankCustomer.addInterest() * 0.005;
} else {
	bankCustomer.addInterest();
}
















