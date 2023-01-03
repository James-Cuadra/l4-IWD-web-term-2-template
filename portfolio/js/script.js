// find out what time it is

var currenttime = new Date();

// retrieve offset from GMT in mins and convert to hour

var timedifference = currenttime.getTimezoneOffset()/60;

// add this to the current hour to get the relative time in UK

var UKcurrenthour = currenttime.getHours() + timedifference;


// do a conditional

var emailmessage = "It is currently <strong>within</strong> my working hours";

if (UKcurrenthour < 9 || UKcurrenthour > 22) {
  emailmessage = "It is currently <strong>outside</strong> my working hours, I will respond as soon as possible.";
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);


var icon = document.getElementById("switch");

// This changePage function runs whenever the button is clicked on - you can see where it's being 'called' in line 34 and 35 below.

function changePage() {
  // 'toggle' means swop between adding and removing the class from the class list for the HTML element. You will be able to see this happening in the web developer tools.
  document.documentElement.classList.toggle("js-modify-page");
  if(icon.className!="light")
    {
        icon.src='images/light.png';
        icon.className="light";
    }
    else if(icon.className=="light")
    {
        icon.src='images/dark.png';
        icon.className="dark";
    }
}

// create a click event on our new button that runs a function whenever the button is clicked

icon.addEventListener("click", changePage);

