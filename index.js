const clock = document.getElementById("clock");

//created a new date object that holds the current time.
let currentTime = new Date();


//Get the time hours, minutes, and seconds
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();


//add a leading zero to the minutes and the seconds values if required:

minutes = (minutes < 10 ? "0" : "") + minutes;
seconds = (seconds < 10 ? "0" : "" ) + seconds;


// set the time day depending on wether currentHours is greater or less than 12.
let timeOfDay = (hours < 12) ? "AM" : "PM";

//change hours to 12 hour format
hours = ( hours > 12 ) ? hours - 12 : hours;
hours = ( hours == 0 ) ? 12 : hours;

//Format the Time String hours:minutes:seconds timeOfDay

let setCurrentTime = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;


//set the contents of the clock div with the currentTime variables value. 
clock.innerHTML = setCurrentTime;