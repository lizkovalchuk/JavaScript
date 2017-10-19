//#### LAB 2.2 OPERATORS WITH VARIABLES AT A RESTAURANT ####

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

//VVVVVVV   LOGIC PROGRAMMING GOES AFTER VARIABLE DECLARATIONS   VVVVVVVVV

var varTotal = ((varItem1 + varItem2 + varItem3 - varDiscount) * varTax);
var varEach = (varTotal / varDiners);

alert(varBillMessage + varEach.toFixed(2))