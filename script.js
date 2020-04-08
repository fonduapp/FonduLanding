const fonduHeaders = {
	'health':"Your personalized healthy relationship training.",
	'fun':"Your personalized healthy relationship guide."
}

const fonduDescriptions = {
	'health':"Trustworthy, easy-to-use, and fun, Fondu trains you to strengthen your existing relationship or future relationships.",
	'fun':"Trustworthy, easy-to-use, and fun, Fondu helps you to improve your existing relationship or future relationships.",
}

const randIntLink = ['health','fun']

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomizeDesc(){
	let rand_int = 1; //getRandomInt(2); //choose between 0 and 1
	let fondu_head = fonduHeaders[randIntLink[rand_int]];
	let fondu_desc = fonduDescriptions[randIntLink[rand_int]];

	document.getElementById("fondu-header").innerHTML = fondu_head;
	document.getElementById("fondu-desc").innerHTML = fondu_desc;

	document.getElementById('beta-button').onclick = function() { gtag('event', 'click', { 'event_label': randIntLink[rand_int]});};

}