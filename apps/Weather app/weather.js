// -----------------------------------------
//-- This start the website with a default city
// -----------------------------------------
window.onload = startApp;

// ---------------------------------------------------
// ------Started aplication with Oslo as default city
// --------------------------------------------------
function startApp() {
	getResults('Oslo');
	opening();
};

// -----------------------
//The key for the api call 
// ------------------------
const api = {
	key: "c12aafeddd994d51bb66ba46d740709e",
	base: "https://api.openweathermap.org/data/2.5/"
};

// -------------------------------------------------------------------------
//-- We storge an input from the search box and we set a event listener to them
// -------------------------------------------------------------------------
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {

	if (evt.keyCode == 13) {

		//Animation staggering after the city is submit in the search box
		// --------------------------------------------------------------
		var staggering = anime({
			targets: ['.location, .current'],
			duration: 12000,
			opacity: [0, 1],
			delay: anime.stagger(180) // increase delay by 100ms for each elements.
		});

		var rotation = anime({
			targets: '.temp',
			rotateY: [0, 360],
			delay: 200,
			duration: 300,
			easing: 'linear'
		});

		var rotation = anime({
			targets: '.icon',
			rotateY: [0, 360],
			delay: 400,
			duration: 300,
			easing: 'linear'
		});
		
		setTimeout(getResults(searchbox.value), 2000);
	};
};

// ---------------------
// Performs the api call
// ---------------------
function getResults(query) {
	fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
		.then(weather => {
			return weather.json();
		}).then(displayResults);
};

function displayResults(weather) {
	console.log(weather);
	let city = document.querySelector('.location .city');
	city.innerHTML = `${weather.name}, ${weather.sys.country}`;

	let now = new Date();
	let date = document.querySelector('.location .date');
	date.innerHTML = dateBuilder(now);

	let temp = document.querySelector('.current .temp');
	temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;


	// --------------------------------------------------------
	//Creating and icon accord to the weather conditions report
	// --------------------------------------------------------
	var imageCode = weather.weather[0].icon;
	var insertCode;
	
	if (imageCode === '10n') {
		insertCode = '10n';
	} else if (imageCode === '10d') {
		insertCode = '10d';
	} else if (imageCode === '11n') {
		insertCode = '11n';
	} else if (imageCode === '11d') {
		insertCode = '11d';
	} else if (imageCode === '09d') {
		insertCode = '09d';
	} else if (imageCode === '09n') {
		insertCode = '09n';
	} else if (imageCode === '13d') {
		insertCode = '13d';
	} else if (imageCode === '13n') {
		insertCode = '13n';
	} else if (imageCode === '50d') {
		insertCode = '50d'
	} else if (imageCode === '50n') {
		insertCode = '50n';
	} else if (imageCode === '01d') {
		insertCode = '01d'
	} else if (imageCode === '01n') {
		insertCode = '01n'
	} else if (imageCode === '02d') {
		insertCode = '02d';
	} else if (imageCode === '02n') {
		insertCode = '02n';
	} else if (imageCode === '03d') {
		insertCode = '03d';
	} else if (imageCode === '03n') {
		insertCode = '03n'
	} else if (imageCode === '04d') {
		insertCode = '04d';
	} else if (imageCode === '04n') {
		insertCode = '04n';
	};
	
	var imageIcon = document.querySelector('.icon')
	imageIcon.src= `http://openweathermap.org/img/wn/${insertCode}@2x.png`;
	
	//--------------------------------------------------------------------------
	
	// ----------------------------------------------------
	// The code below allows to show the weather conditions
	// ----------------------------------------------------
	let weather_el = document.querySelector('.current .weather');
	var storageWeather = weather.weather[0].main;

	if (storageWeather === "Thunderstorm") {
		weather_el.innerText = 'Tordenvær';
	} else if (storageWeather === "Drizzle") {
		weather_el.innerText = 'Duskregn';
	} else if (storageWeather === "Rain") {
		weather_el.innerText = 'Regn';
	} else if (storageWeather === "Snow") {
		weather_el.innerText = 'Snø';
	} else if (storageWeather === "Sunny") {
		weather_el.innerText = 'Solfylt';
	} else if (storageWeather === 'Clouds') {
		weather_el.innerText = 'Skyer';
	} else if (storageWeather === 'Clear') {
		weather_el.innerText = 'Klar himmel'
	} else if (storageWeather === 'Atmosphere') {
		weather_el.innerText = 'Stemning';
	};

	let hilow = document.querySelector('.hi-low');
	hilow.innerText = `${Math.round( weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

};

// -----------------------------------
//-- This made possible to show the date
// -----------------------------------
function dateBuilder(d) {
	let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
	let days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return `${day} , ${date} ${month} ${year}`;
};

// ------------------------------------------------
//-- Animations (This made app-wrap appear or fade in)
// --------------------------------------------------
function opening() {
	var appWrap = anime({
		targets: '.app-wrap',
		points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
		baseFrequency: 0,
		scale: [0, 1],
		loop: false,
		direction: 'alternate',
		easing: 'easeInOutExpo'
	});
};