document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){
    var moving_value = move.getAttribute("data-value");
    var x = e.clientX * moving_value / 250;
    var y = e.clientY * moving_value / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
} 
// end of mousemove js

function reveal() {
  var reveals = document.querySelectorAll(".gradient-align, .background-gradient");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 250;

    if (elementTop < windowHeight - elementVisible) 
            {reveals[i].classList.add("active");} 
      else  {reveals[i].classList.remove("active");}
  }
}

window.addEventListener("scroll", reveal);
// end of scroll animation js

function openNav() {
  document.getElementById("nav-overlay").style.height = "100%";
  document.getElementById("body").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("nav-overlay").style.height = "0%";
  document.getElementById("body").style.overflow = "scroll";
}
// end of nav js

document.getElementById("nav-link1").addEventListener("mouseover", mouseOver1);
document.getElementById("nav-link1").addEventListener("mouseout", mouseOut1);
document.getElementById("nav-link2").addEventListener("mouseover", mouseOver2);
document.getElementById("nav-link2").addEventListener("mouseout", mouseOut2);
document.getElementById("nav-link3").addEventListener("mouseover", mouseOver3);
document.getElementById("nav-link3").addEventListener("mouseout", mouseOut3);
document.getElementById("nav-link4").addEventListener("mouseover", mouseOver4);
document.getElementById("nav-link4").addEventListener("mouseout", mouseOut4);


function mouseOver1() {document.getElementById("nav-bg1").classList.add("active");}
function mouseOut1() {document.getElementById("nav-bg1").classList.remove("active");}
function mouseOver2() {document.getElementById("nav-bg2").classList.add("active");}
function mouseOut2() {document.getElementById("nav-bg2").classList.remove("active");}
function mouseOver3() {document.getElementById("nav-bg3").classList.add("active");}
function mouseOut3() {document.getElementById("nav-bg3").classList.remove("active");}
function mouseOver4() {document.getElementById("nav-bg4").classList.add("active");}
function mouseOut4() {document.getElementById("nav-bg4").classList.remove("active");}

// mouseover