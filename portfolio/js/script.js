// find out what time it is

var currenttime = new Date();

// retrieve offset from GMT in mins and convert to hour

var timedifference = currenttime.getTimezoneOffset()/60;

// add this to the current hour to get the relative time in UK

var UKcurrenthour = currenttime.getHours() + timedifference;

console.log(UKcurrenthour);

// do a conditional

var emailmessage = "It <strong>is</strong> currently my working hours";

if (UKcurrenthour < 9 || UKcurrenthour > 22) {
  emailmessage = "It is currently <strong>outside</strong> my working hours, I will respond as soon as possible.";
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);



var findLocation = document.getElementById("switch");

// create a button in code

var button = document.createElement("button");
button.setAttribute("class", "js-lightmode"); // add a class we can use to style the button in CSS
button.setAttribute("id", "lightmode"); // add an ID to listen out for clicks on the button
button.textContent = "Change the page"; // add the text for the button

// add this created button to our HTML at the place we've saved in the 'findLocation' variable

findLocation.append(button); // add the button to the HTML

// point JavaScript at the button we have just added and save the button location to do things with later

var listenForInteraction = document.getElementById("lightmode");

// This changePage function runs whenever the button is clicked on - you can see where it's being 'called' in line 34 and 35 below.

function changePage() {
  // 'toggle' means swop between adding and removing the class from the class list for the HTML element. You will be able to see this happening in the web developer tools.
  document.documentElement.classList.toggle("js-modify-page");
}

// create a click event on our new button that runs a function whenever the button is clicked

listenForInteraction.addEventListener("click", changePage);

