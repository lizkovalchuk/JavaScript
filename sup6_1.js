//===========SUP 6=================part1//
//WORKING WITH THE DOM
//create an onload listener

window.onload = pageReady;

//create an onload function
//for code accessed via DOM
//capture: h1, 1st and 2nd <p>
//make changes these elements.

function pageReady(){
	var mainHeading = document.getElementById("firstH1");
	mainHeading.innerHTML = "Elizabeth attempting DOM";

	var firstPara = document.getElementById("par1");
	firstPara.style.background = "lightblue";

	var secondPara = document.getElementById("par2");
	secondPara.style.display = "none";

//capture the button and change its text

	var button = document.getElementById("subBtn");
	button.value = "Read more";


//create a listener for when the button is clicked
//function should show hidden 2nd paragraph

	subBtn.onclick = showPara2;

	function showPara2(){
	secondPara.style.display = "block";
	}

//capture the 1st H2 and create a listener
//for when someone hovers over it and off it.
//the 1st H2 should have a yellow background
//when the mouse is over it.

	var firstH2 = document.getElementById("h21");
	firstH2.onmouseover = highliteOn;

	function highliteOn(){
	firstH2.style.background = "yellow";
	}

	firstH2.onmouseout = highliteOff;
	function highliteOff(){
	firstH2.style.background = "white";
	}

}















