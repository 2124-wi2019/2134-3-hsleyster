/*Heather Sleyster
sleyster_a03b
Thoendel
INFO 2134
03/24/2020
*/

//This is my window event listener for the load event.
window.addEventListener('load', function(){

/*This setTime function assigns the element with the id of timeHolder
to the timeHolder variable and then updates the value of the element
to the value returned from the getCurrentTime function.
*/
function setTime() {
    const timeHolder = document.getElementById('timeHolder');
    timeHolder.innerHTML = getCurrentTime();
}
/*This statement sets the interval of the window using the callback function
setTime every second.
*/
window.setInterval(setTime, 1000);

/*These statements assigns the element with the id of currentURL to the variable
currentURL then updates the value of the current URL to the element.
*/
const currentURL = document.getElementById('currentURL');
currentURL.innerHTML = window.location.href;

/*The first statement assigns the element with the id of protocolSecure to the variable
protocolSecure. The if statement evaluates the location.protocol and if it is a secure
protocol updates the value of the protocolSecure element to 'Yes' and if not secure to 'No'.
*/
const protocolSecure = document.getElementById('protocolSecure');
if(window.location.protocol == 'https:'){
    protocolSecure.innerText = 'Yes';
}
    else {
        protocolSecure.innerText = 'No';
    }

/*This statement creates a cookie with the name of author and value of Heather Sleyster
and an expiration date of Wednesday, April 04, 2020 at 05:43:00 GMT.
*/
document.cookie = 'author=HeatherSleyster; expires=Wed, 08 April 2020 05:43:00 GMT';
});
//Add your code above this comment
//do not modify anything beneath this 
//comment
function getCurrentTime() {
    const currentDateTime = new Date();
    const currentMinute = (currentDateTime.getHours() < 10 ? '0' : '') + currentDateTime.getHours();
    const currentHour = (currentDateTime.getMinutes() < 10 ? '0' : '') + currentDateTime.getMinutes();
    const currentSecond = (currentDateTime.getSeconds() < 10? '0' : '') + currentDateTime.getSeconds();
    const currentTimeAsString = currentMinute + ":" + currentHour + ":" + currentSecond;
    return currentTimeAsString;
}
