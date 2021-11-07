// alert('this is an alert that says js is working');

// *****************Checking is js is loaded!

// $(document).ready(function(){
//     if (jQuery) {  
//       // jQuery is loaded  
//       alert("Yeah!");
//     } else {
//       // jQuery is not loaded
//       alert("Doesn't Work");
//     }
//  });


// Rotate X example!!!
// const rotateX = anime({
//     targets: ".footer-center i",
//     loop: true,
//     rotateY: 360,
//     duration: 3000,
//     easing: 'linear'
// });

//****************** ANIMATIOM for the NAVBAR!
// LOGO
anime({
    targets: '.imageLogo',
    rotateY: {
        value: 360,
        duration: 500,
        delay: 400,
        easing: 'easeInOutSine',
    },
});

// LINKS
anime({
    targets: '.ul-links',
    rotateX: {
        value: 360,
        duration: 400,
        delay: 500,
        easing: 'easeInOutSine',
    },
});

// ************************* FOOTER ANIMATION!
// Logo footer rotation animation 
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


