// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// JS for gallery images and text scroll
const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function(){
  for(let i = 0; i < revealElements.length; i++){
    const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;
    
    if(isElementsOnScreen){
      revealElements[i].classList.add("revealed")
    } else {
      revealElements[i].classList.remove("revealed")
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);