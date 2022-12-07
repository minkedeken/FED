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


// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header nav:nth-of-type(2) button:nth-of-type(1)");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("header nav:nth-of-type(1)");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("header nav:nth-of-type(1) button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}




/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("header nav:nth-of-type(1)");
    deNav.classList.remove("toonMenu");
  }
}