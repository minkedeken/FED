// JavaScript Document
console.log("hi");

var wishlistButton = document.querySelectorAll("main section:nth-of-type(2) button");


function hartjeRood () {
    this.classList.toggle('liked'); 
}

//wishlistButton.addEventListener ("click", hartjeRood); 

for (let i = 0; i < wishlistButton.length; i++) {
    wishlistButton[i].addEventListener("click", hartjeRood);
}