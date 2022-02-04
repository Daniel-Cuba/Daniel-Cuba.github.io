// ---------------------------------------------------------------------
// -------- Navbar Animation
// ---------------------------------------------------------------------

// -------LOGO
anime({
    targets: '.imageLogo',
    rotateY: {
        value: 360,
        duration: 500,
        delay: 400,
        easing: 'easeInOutSine',
    },
});

// -------LINKS
anime({
    targets: '.ul-links',
    rotateX: {
        value: 360,
        duration: 400,
        delay: 500,
        easing: 'easeInOutSine',
    },
});

// --------------------------------------------
// ------------ GREETINGS!section
// --------------------------------------------

var hei = document.getElementById('dateHour');
var today = new Date();
var hourNow = today.getHours();
var greeting;

// -----------------------------------------------
// Display the greeting base in the current time
// -----------------------------------------------
if (hourNow > 18 && hourNow <= 24) {
    greeting = ' god natt!';
} else if (hourNow >= 12 && hourNow <= 18) {
    greeting = ' god ettermiddag!';
} else if (hourNow > 0 && hourNow < 12) {
    greeting = ' god morgen!';
} else {
    greeting = ' velkommen';
};

hei.textContent = greeting;

// --------------------------------------
//-------------------ICON MENU 
// --------------------------------------

var icon = document.getElementById('iconNav');
var menuEL = document.getElementById('menuEl')

icon.onclick = showMenu;

function showMenu() {
    if (menuEL.style.display === 'none') {
        menuEL.style.display = 'flex';
    }else{
        menuEL.style.display = 'none';
    }
}

// ----------------------------------
// -------------------- SLIDER!
// ----------------------------------

var slideIndex = 0;
showSlides();

function currentSlide(n) {
    clearInterval(showSlides);
    slideIndex = n - 1;
};

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activo", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activo";
}

setInterval(showSlides, 2500); // Change image every 2.5 seconds


// ----------------------------------------------
// --------------------- FOOTER ANIMATION!
// ----------------------------------------------

// Logo footer rotation animation 
// ------------------------------
const rotateEffect = document.querySelector('.rotateY');

function animeRotate(value, duration) {
    anime.remove(rotateEffect);
    anime({
        targets: rotateEffect,
        rotateX: value,
        duration: duration,
        easing: 'linear',
    });
}

function enterRotate() {
    animeRotate(360, 300)
};

function leaveRotate() {
    animeRotate(-360, 400)
};

rotateEffect.addEventListener('mouseover', enterRotate, false);
rotateEffect.addEventListener('mouseleave', leaveRotate, false);