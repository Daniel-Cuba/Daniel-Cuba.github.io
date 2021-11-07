// --------------------------------------------------------------
//------------ Animation for the NAVBAR!-------------------------
// -------------------------------------------------------------


// ---------LOGO
// ---------------
anime({
    targets: '.imageLogo',
    rotateY: {
        value: 360,
        duration: 500,
        delay: 200,
        easing: 'easeInOutSine',
    },
});

// --------------' ICON navbar!
// -----------------------------
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

// ---------------------CONTACT SECTION CONTAINER
// -----------------------------------------------

// Header and list animation left side
// -----------------------------------
anime({
    targets: '.list-info li, .contact-header',
    translateX: [-203, 5],
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
});

// Rotate map right section
// -------------------------
anime({
    targets: '.map',
    scale: {
        value: 2.3,
        duration: 500,
        easing: 'linear',
        elasticity: 0.4
      }
});

// ------------------------------------------
// ------------------------ FOOTER ANIMATION!
// ------------------------------------------

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