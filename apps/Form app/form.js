// ---------------------------------------------------------------------------
//Hide the confirmation alert to submit the form to be able to show at the end
// ---------------------------------------------------------------------------
document.querySelector('#resumeContainer').style.display = 'none';

// -------------------------------------------------------------------
//Create a call to validate function when the user click submit button
// -------------------------------------------------------------------
var btnSubmit = document.getElementById('btnSubmit');
btnSubmit.onclick = validate;

function validate() {
	//Variables that storage elements from the DOM
	// ---------------------------------------------
	var nameInput = document.getElementById('nameinput');
	var emailInput = document.getElementById('emailinput');
	var phoneInput = document.getElementById('phoneinput');
	var subjectInput = document.getElementById('subjectinput');
	var warning = document.getElementById('warning');
	var formContainer = document.getElementById('container');

	var formEl = document.querySelector('form').classList;


	// This conditonal will check is NAME input field is empty
	// --------------------------------------------------------
	if (document.myForm.name.value == '') {

		warning.innerHTML = '* Navnet kan ikke være tomt';
		document.myForm.name.focus();
		formEl.add('form-alert');

		//Remove the alert message after the field is fill
		// ------------------------------------------------
		nameInput.addEventListener('focusout', function () {
			warning.innerHTML = '';
			formEl.remove('form-alert');
		});
		return false;
	};

	// -----------------------------------------
	// Checking if the navn is mix with a number
	// -----------------------------------------

	var storageTxt = nameInput.value;
	var regExp = "^[a-zA-Z\øæå\ÅØÆ\ \]*$";

	if (!storageTxt.match(regExp)) {
		warning.innerHTML = '* Ikke tillat spesial karakter og tall';
		document.myForm.name.focus()
		formEl.add('form-alert');

		nameInput.addEventListener('focusout', function () {
			warning.innerHTML = '';
			formEl.remove('form-alert');
		});
		return false;
	};

	// ---------------------------------------
	// Checking conditional for the email field
	// ---------------------------------------
	if (document.myForm.email.value == '') {
		warning.innerHTML = '* E-post kan ikke være tomt';
		document.myForm.email.focus();
		formEl.add('form-alert');

		emailInput.addEventListener('focusout', function () {
			warning.innerHTML = '';
			formEl.remove('form-alert');
		});
		return false;
	};

	// ----------------------------------------------------------
	// We check is EMAIL adress is a valid adress
	// ----------------------------------------------------------
	var emailID = document.myForm.email.value;
	var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID);

	if (!mailFormat) {
		warning.innerHTML = '* Skriv inn et gyldig E-post';
		document.myForm.email.focus();
		formEl.add('form-alert');

		emailInput.addEventListener('focusout', function () {
			warning.innerHTML = '';
			formEl.remove('form-alert');
		});
		return false;
	};

	// ---------------------------------------------
	//Checking if the PHONE number is a valid number 
	// ---------------------------------------------
	if (document.myForm.phone.value == '' || isNaN(document.myForm.phone.value) || document.myForm.phone.value.length != 8) {
		warning.innerHTML = '* Skriv inn et gyldig 8-sifret telefonnummer';
		document.myForm.phone.focus();
		formEl.add('form-alert');

		phoneInput.addEventListener('focusout', function () {
			warning.innerHTML = '';
			formEl.remove('form-alert');
		});

		return false;
	};

	//--------------------------------------
	//Checking is the subject field is mark 
	// --------------------------------------
	if (document.myForm.subject.value == '0') {
		warning.innerHTML = '* Oppgi ditt kompetanseområde';
		document.myForm.subject.focus();
		formEl.add('form-alert');

		subjectInput.addEventListener('focusout', function () {
			warning.innerHTML = '';
			formEl.remove('form-alert');
		});
		return false;
	};

	// ------------------------------------------------------
	// Add green color and icons after all fields are correct
	// ------------------------------------------------------
	nameInput.classList.add('form-green');
	emailInput.classList.add('form-green');
	phoneInput.classList.add('form-green');
	subjectInput.classList.add('form-green');

	// ---------------------------------------------------
	//This setTimeout add the submit confirmation alert
	// --------------------------------------------------
	setTimeout(() => {
		fadeDiv(resumeContainer, 100, 0);
		formContainer.style.display = 'none';
		document.querySelector('#resumeContainer').style.display = 'flex';
	}, 600);

	// -----------------------------------------------------
	//This setTimeout submit the form after the confirmation
	// -----------------------------------------------------
	setTimeout(() => {
		if (document.getElementById('warning').innerHTML == '') {
			return document.getElementById('mainForm').submit();
		};
	}, 3000);
};

// ----------------------------------------
//Animations to the form and other elements
// -----------------------------------------
var fadeDiv = function (value, duration, delay) {
	anime({
		targets: value,
		opacity: ['0', '1'],
		duration: duration,
		delay: delay,
		easing: 'linear',
	});
};

// ---------------------------------------------------
//Animate the form container onload page at first time 
// ---------------------------------------------------
fadeDiv(container, 600, 100);