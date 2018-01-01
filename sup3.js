//=============SUP2================//
//CONTROL STRUCTURES
//create a popup box that asks for a yes or no answer 
//and output the user's response to the console.

var userinput = confirm("yes or no");
console.log(userinput);

//create a popup that accepts a string of text
//output the user's response to the console

var userinput2 = prompt("Enter a string of text");
console.log(userinput2);

//enter provided code from brief to observe outcome

if(userinput2 == 4) {alert();}

//create a popup box that asks the user, "Are you sure you 
//want to delete this file?"
//If the user clicks OK, send a popup with the message,
//"File delete", otherwise, nothing happens

var deleteFilecheck = confirm("Are you sure you want to delete this file?");
if (deleteFilecheck === true) {
	alert("File deleted")
};

//create a series of if/else statements for precipitation variations

var pretty = "Looks like a beautfiul day";
var moderate = "Better take an umbrella - just in case";
var heavy = "Looks like a beautiful day to stay inside";

var rainQuestion = prompt("What is the POP?");
var rainQuestionInt = parseInt(rainQuestion);

if(rainQuestionInt < 30){
	alert(pretty);
} else if (rainQuestionInt >= 30 && rainQuestionInt < 60 ){
	alert(moderate);
} else {
	alert(heavy);
}
;

//create the logic that accpets a course code & returns the
//name of the teacher for that course. 

var monNum = 5101;
var monTeacher = "Lee Situ";
var tuesNum = 5104;
var tuesTeacher = "Joanna Kommala";
var wedNum = 5105;
var wedTeacher = "Slavko Stemberger";
var thursNum = 5102;
var thursTeacher = "Bernie Monette";
var friNum = 5103;
var friTeacher = "Sean Doyle";

var classNumber = prompt("Please enter the four digit course code.")
var classNumberInt = parseInt(classNumber);

if (classNumber == false || classNumber == ""){
	alert("You have not entered a valid course code for the HTTP program")
	prompt(classNumber);
} else {
	switch (classNumberInt) {
		case monNum:
		alert(monTeacher + " teaches " + monNum + ".");
		break;

		case tuesNum:
		alert(tuesTeacher + " teaches " + tuesNum + ".");
		break;

		case wedNum:
		alert(wedTeacher + " teaches " + wedNum + ".");
		break;

		case thursNum:
		alert(thursTeacher + " teaches " + thursNum + ".");
		break;

		case friNum:
		alert(friTeacher + " teaches " + friNum + ".");
		break;

		default:
		alert("You did not enter a valid course code");
		break;
		}

	}











