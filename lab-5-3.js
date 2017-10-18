//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 3:  MAKE THE BANK
//alert("Connected");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

//step 1 - 3
//create bank customer object
//give the needed properties
//give the object methods

/*var amount1 = 50;
var amount2 = 75;*/

var bankCustomer = {
	lastName: "Gabriel",
	branchNum: 1,
	accBal: 500,
	irate: 1.25,
	

//step 4 - 6
//return strings with updated values post functions
//use your object and its methods to:
// A) make a deposit
// B) make a withdrawal
// C) and add interest
// A) Have a string outputted to the console log after each transaction.

	makeDeposit: function (deposit){
		bankCustomer.accBal = bankCustomer.accBal + deposit;
		return "Thank you your new balance is " + bankCustomer.accBal;

	} ,

	addInterest: function(){
		bankCustomer.accBal = bankCustomer.accBal * bankCustomer.irate;
		return "Thank you your new balance is " + bankCustomer.accBal;
	}

}

var makeDepositresult = bankCustomer.makeDeposit(400);
console.log(makeDepositresult);
console.log(bankCustomer.makeDeposit(100));

//=====================================

var postInterestresult = bankCustomer.addInterest();
console.log(postInterestresult);








