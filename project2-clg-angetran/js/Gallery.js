// toggle menu
var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})

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