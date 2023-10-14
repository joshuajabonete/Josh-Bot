// Constants
const ACTIVE_TIME_MS = 5000;
const DEACTIVATION_TIME_MS = 750;

// Variables
var felix = document.getElementById("felix");
var responseFrame = document.getElementById("response-frame");
var responseMessage = document.getElementById("response-message");
var userMadeDecision = false;
var jokes = [
	'na magiging tayo.',
	'Ano ang tawag ng batang langgam sa kapatid na babae ng nanay niya?......Eh di ANTY!',
	'Bakit maswerte ang kalendaryo?.......Kasi maraming siyang date.',
	'Bakit malungkot ang kalendaryo?...Kasi bilang na ang araw niya.',
	'Ano ang pagkakaparehas ng UTOT at TULA?....Pareho silang nagmula sa POET.',
	'Anong isda ang nakalutang sa tubig?......Eh di yung patay na isda!',
	'Anong paboritong palaman ng MMDA?....Eh di TRAFFIC JAM!',
	'Ano sa Japanese ang speechless?.....Eh di WASABI.'
];

// Activate felix and set timeout for awaiting a command.
function activateFelix() {
	userMadeDecision = false;
	felix.classList.remove("inactive");
	felix.classList.add("active");
	setTimeout(function() {
		if (!userMadeDecision) {
			felix.classList.remove("active");
			felix.classList.add("inactive");
			setTimeout(function() {
				felix.classList.remove("inactive");
			}, 750);
		}
	}, 5000);
}
function deactivateFelix() {
	userMadeDecision = true;
	felix.classList.remove("active");
	felix.classList.add("inactive");
	setTimeout(function() {
		felix.classList.remove("inactive");
	}, 750);
}
function getWeather() {
	responseMessage.innerText = "Ang lamig payakap ako, char ";
	showResponse();
}
function getTime() {
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();
	responseMessage.innerText = "Perhaps, It's time for you to love me? Char It's " + time + ".";
	showResponse();
}
function getDate() {
	var today = new Date();
	var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
	responseMessage.innerText = "Mas maganda mag invest ka ng time saakin char, today is " + date + ".";
	showResponse();
}
function tellJoke() {
	var index = Math.floor((Math.random() * jokes.length) - 1);
	responseMessage.innerText = jokes[index];
	showResponse();
}
function searchGoogle() {
	deactivateFelix();
	window.open("https://www.facebook.com/joshjabonete", "_blank");
}
function showInspiration() {
	deactivateFelix();
	window.open("https://cdn.discordapp.com/attachments/1092407723896877148/1162572519144951868/MY_GIRLFRIEND.png", "_blank");
}
function showResponse() {
	responseFrame.classList.add("active");
	deactivateFelix();
}
function closeResponse() { responseFrame.classList.remove("active"); }
changeTheme(SiteTheme.Dark);
