const clock = document.getElementById("clock");

//created a new date object that holds the current time.
let currentTime = new Date();


//Get the time hours, minutes, and seconds
let currentHours = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();
let currentSeconds = currentTime.getSeconds();


//add a leading zero to the minutes and the seconds values if required:

currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
currentSeconds = (currentSeconds < 10 ? "0" : "" ) + currentSeconds;


// set the time day depending on wether currentHours is greater or less than 12.
let timeOfDay = (currentHours < 12) ? "AM" : "PM";

//change hours to 12 hour format
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0 ) ? 12 : currentHours;

//Format the Time String hours:minutes:seconds timeOfDay

let setCurrentTime = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;


//set the contents of the clock div with the currentTime variables value. 
clock.innerHTML = setCurrentTime;