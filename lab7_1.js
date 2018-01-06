/* LAB 7-1 - FINAL COUNTDOWN!! */
//alert("Lab 7 - 1");//Please delete once you have confirmed your page is connected...seriously, if I see this popup when I check out your work, I will go coo-coo bananas.

//create page load listener

window.onload = goNow;

var dateVar = new Date();

//create page load function

function goNow(){

//FIRST DATA CHANGE
//create variables for required HTML elements
var nowTime = document.getElementById("todayData");
var dateHolder = dateVar.toDateString();
nowTime.innerHTML = dateHolder;


//SECOND DATA CHANGE
var dueDate = document.getElementById("finalData");
var dueHolder = new Date ("Sunday, January 14 2018");
dueDate.innerHTML = dueHolder.toDateString();

//THIRD DATA CHANGE
var daysTill = document.getElementById("dueData");
var daysTillmath = dueHolder - dateVar;
daysTill.innerHTML = Math.ceil(daysTillmath/86400000);



}

	

	//create variables for now date and due date

	
	
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE