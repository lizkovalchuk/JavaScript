//========= LAB 2.2 OPERATORS WITH VARIABLES AT A RESTAURANT =======
//Two diners at a table in your restaurant are ready 
//for their bill – and have a five dollar discount coupon.

//ALL VARIABLES ARE DECLARED HERE
var varItem1 = 9.99; //CHICKEN PASTA
var varItem2 = 14.50; //STEAK
var varItem3 = 7.85; //GARLIC BREAD
//var varSubtotal; //TOTAL OF BILL BEFORE DISCOUNT AND TAX
var varDiscount = 5; //FIVE BUCKS OFF COUPON
var varSubAfterDiscount;  //TOTAL AFTER COUPON AND BEFORE TAX
var varTax = 1.13;  //HST
//var varTotal; //TOTAL AFTER TAX
var varDiners = 2;//NUMBER OF PEOPLE AT A TABLE
var varEach; //TOTAL FOR EACH CUSTOMER (TWO CUSTOMERS)
var varBillMessage = "You each owe $";  //OUTPUT MESSAGE FOR ALERT BOX

//======== LOGIC PROGRAMMING GOES AFTER VARIABLE DECLARATIONS ========
//Assign the total of the items to the subtotal.
//Subtract the $5 discount coupon from the subtotal.
//Multiply this new amount by the tax to get the total.
//Divide this amount evenly for the two customers.
//The alert() message should read: “You each owe $xx.xx”
//with the correct amount.

var varTotal = ((varItem1 + varItem2 + varItem3 - varDiscount) * varTax);
var varEach = (varTotal / varDiners);

alert(varBillMessage + varEach.toFixed(2))