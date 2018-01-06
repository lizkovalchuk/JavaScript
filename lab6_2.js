//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX
//alert("test");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

//LISTEN FOR load EVENT

window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC

function pageReady(){


	//GET DOM ELEMENTS WE'LL NEED

	var mysBoxhover = document.getElementById("mysteryBox");
	mysBoxhover.onmouseover = askWhenOver;

	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER

	function askWhenOver(){
		var userInput = confirm("Do you want to see something?");
	

	//FUNCTION TO CHANGE buttonBox

		if(userInput === true){
		mysteryBox.style.display = "none";
		clickMe.style.display = "block";
		} //end of if statement

	//SETUP LISTENERS

	} // end of askWhenOver function

	var clickMe = document.getElementById("buttonBox");
	clickMe.onclick = transformButtonbox;

	function transformButtonbox(){
		clickMe.style.background = "orange";
		clickMe.style.width = "600px";
		clickMe.innerHTML = "<h2>SURPRISE!</h2>";
	}
}

//END onload FUNCTION








