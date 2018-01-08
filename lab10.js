//LAB 10-DATA STORAGE: INDEX PAGE
//alert("home");//DELETE AFTER CONFIRMING CONNECTION


window.onload = function(){
	document.body.style.background = localStorage.getItem("inColor");
	document.getElementById("inName").value = localStorage.getItem("username");


	//var username = document.getElementById("inName");

}



//set-up page listeners


var subBtn = document.getElementById("btnSub");
subBtn.onclick = submitButton;

function submitButton(){

//make variables

var username = document.getElementById("inName");
var usercolour = document.getElementById("inColor");

console.log(usercolour.value);
console.log(username.value);

localStorage.setItem("username", username.value);
localStorage.setItem("inColor", usercolour.value);


//var body = document.getElementsByTagName("body");

document.body.style.background = localStorage.getItem("inColor");



return false;

}




var deleteBtn = document.getElementById("btnDel");
deleteBtn.onclick = deleteStorage;

function deleteStorage(){
 
 localStorage.clear();

 document.body.style.background = "grey";

}

















