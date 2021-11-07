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