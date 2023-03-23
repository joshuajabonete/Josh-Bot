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
	'Bakit may black eye yung juice?......Kasi nasa pack sya',
	'Anong isda ang pwede mong isulat?.......Lafish',
	'anong sabi ng anak na gulong sa kanyang mama na gulong na sumali sa marathon?...Go!Ma!',
	'anong sabi ng nanay na donut sa kanyang anak na donut na umakyat ng puno?....Anak! Baba-rian!',
	'Anong hayop ang madalas mauntog?......DOG',
	'Anong hayop ang gusto maging direktor?....Cat!',
	'Anong sabi ng kabilang kilay sa kabilang kilay?.....Hi Brow!'
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
	responseMessage.innerText = "Ang lamig payakap ako, char";
	showResponse();
}
function getTime() {
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();
	responseMessage.innerText = "Perhaps it's time for you to like me? Char It's " + time + ".";
	showResponse();
}
function getDate() {
	var today = new Date();
	var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
	responseMessage.innerText = "Mas maganda mag invest ka ng time saakin char jk, today is " + date + ".";
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
	window.open("https://cdn.discordapp.com/attachments/1010408085514371082/1057241692643790869/GUSTO_KO_SANA_LAGAY_DITO_KASU_BAKA_D_AKO_GUSTO_AT_BAKA_MAY_JOWA_SYA__1.png", "_blank");
}
function showResponse() {
	responseFrame.classList.add("active");
	deactivateFelix();
}
function closeResponse() { responseFrame.classList.remove("active"); }
changeTheme(SiteTheme.Dark);
