/* LAB 7.2 - STOP TIME */
//alert("Lab 2 is connected");//delete once confirming your page is connected. 

//create page load listener

window.onload = pageReady;
var dateVar = new Date();

//create page load function

function pageReady(){
//	var timeGoing;

//create variables for required HTML elements

function setTime() {
	var dateVar = new Date();
	var hrs = document.getElementById("hoursOut");
	var mins = document.getElementById("minsOut");
	var sec = document.getElementById("secsOut");

	var nowHour = dateVar.getHours();
	hrs.innerHTML = nowHour + ":";

	var nowMins = dateVar.getMinutes();
	mins.innerHTML = nowMins + ":";

	var nowSec = dateVar.getSeconds();
	sec.innerHTML = nowSec;


	if (nowMins < 10) {
		nowMins = "0" + nowMins;
	}
  } // end of setTime function



  

    var btn = document.getElementById("btnStart");
  	btn.onclick = startTimer;
     var startTimer2;

 	function startTimer(){
 		 startTimer2 = setInterval(setTime, 1000);
 	}

 	var stopbtn = document.getElementById("btnStop");
 	stopbtn.onclick = stopTimer;
 	var stopTimer2

 	function stopTimer(){
 	    clearInterval(startTimer2);
 	}

}
 
 	
 /*	function myTimer() {
 		var d = new Date();
 		document.getElementById("hoursOut");
		document.getElementById("minsOut");
		document.getElementById("secsOut");
 	}*/

 	

 	

 
 



/*  if (nowSec < 10)
  {
  	//add a zero before it

  }*/



	
	
	//create time variable so all functions have access to it
	
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	
	
	//CREATE FUNCTION TO START THE CLOCK.
	
	
	//CREATE FUNCTION TO STOP THE CLOCK
	
	
	// SET EVENT LISTENERS
