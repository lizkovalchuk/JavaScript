//LAB 10-DATA STORAGE: PRODUCTS PAGE
//alert("products");//DELETE AFTER CONFIRMING CONNECTION


document.body.style.background = localStorage.getItem("inColor");
document.getElementById("newMsgBox").innerHTML += " " + localStorage.getItem("username");