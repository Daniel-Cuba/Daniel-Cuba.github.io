// -------------------------------------------------------------------------------------
// -------------Element groups from the animation section, leftSide , center , rightSide
// -------------------------------------------------------------------------------------
var leftSquare = document.querySelectorAll('.leftSide');
var centerSquare = document.querySelectorAll('.center');
var rightSquare = document.querySelectorAll('.rightSide');

// --------------------------------------
// --------- Function to play the sound
// --------------------------------------
function playSound(event) {

	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
	var keyPiano = document.querySelector(`div[id="${event.keyCode}"]`);
	var convertKeyCode = String.fromCharCode(event.keyCode);

	// ----------------------------------
	//---------- Left side play animation
	// ----------------------------------
	if (convertKeyCode == 'A' || convertKeyCode == 'S' || convertKeyCode == 'W' || convertKeyCode == 'D') {

		for (var i = 0; i < leftSquare.length; i++) {
			leftSquare[i].style.animationName = 'wave';
		};
	};

	// ----------------
	//---------- Center
	// ----------------
	if (convertKeyCode == 'F' || convertKeyCode == 'G' || convertKeyCode == 'H' || convertKeyCode == 'J') {

		for (var i = 0; i < centerSquare.length; i++) {
			centerSquare[i].style.animationName = 'wave';
		};
	};

	// ---------------------------------
	//-------- Right side play animation
	// ----------------------------------
	if (convertKeyCode == 'I' || convertKeyCode == 'K' || convertKeyCode == 'L' || convertKeyCode == 'À') {

		for (var i = 0; i < rightSquare.length; i++) {
			rightSquare[i].style.animationName = 'wave';
		};
	};

	// ---------------------------------------
	//-----------Conditional to play the sound
	// ----------------------------------------
	if (!audio) return
	audio.currentTime = 0;
	audio.play();

	// ---------------------------------------------------------
	//--------Give the red color to the keys when they are press
	// ---------------------------------------------------------
	key.style.backgroundColor = 'rgba(201, 48, 48, 0.918)';
	keyPiano.style.backgroundColor = 'rgba(201, 48, 48, 0.918)';
};

// -------------------------------------------------------------------------------------
// Function stopAnime stop the animation but also return their natural color to the keys
// --------------------------------------------------------------------------------------

function stopAnime(event) {

	// This will also remove the color red after the event keyup its perform
	var key = document.querySelector(`div[data-key="${event.keyCode}"]`);
	var keyPiano = document.querySelector(`div[id="${event.keyCode}"]`);
	var convertKeyCode = String.fromCharCode(event.keyCode);

	if (key.style.backgroundColor == 'rgba(201, 48, 48, 0.918)' || keyPiano.style.backgroundColor == 'rgba(201, 48, 48, 0.918)') {
		key.style.backgroundColor = 'rgba(92, 245, 78, 0.055)';
		keyPiano.style.backgroundColor = 'white';
	};

// --------------------------------------------------
//-------Remove animation section inside stop function
// ----------------------------------------------------

// ----------------------
//-------This is left side
// -----------------------
	if (convertKeyCode == 'A' || convertKeyCode == 'S' || convertKeyCode == 'W' || convertKeyCode == 'D') {
		setTimeout(() => {

			for (var i = 0; i < leftSquare.length; i++) {
				leftSquare[i].style.animationName = 'none';
			};
		}, 90);
	};

	// -----------------------
	//------This is the center
	// -----------------------
	if (convertKeyCode == 'F' || convertKeyCode == 'G' || convertKeyCode == 'H' || convertKeyCode == 'J') {
		setTimeout(() => {

			for (var i = 0; i < centerSquare.length; i++) {
				centerSquare[i].style.animationName = 'none';
			};
		}, 90);
	};

// ----------------------------
//------------This is right side
// -----------------------------
	if (convertKeyCode == 'I' || convertKeyCode == 'K' || convertKeyCode == 'L' || convertKeyCode == 'À') {
		setTimeout(() => {

			for (var i = 0; i < rightSquare.length; i++) {
				rightSquare[i].style.animationName = 'none';
			};
		}, 90);
	};
};

// --------------------------------------------------------
//Event listeners that trigger the actions of play and stop
// --------------------------------------------------------
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', stopAnime);


