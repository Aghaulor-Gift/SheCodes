let form = document.querySelector("#search-form1");
form.addEventListener("submit", search)

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-engine");

    console.log(searchInput.value);
    let h1 = document.querySelector("#country");
    
    if (searchInput.value) { h1.innerHTML = `${searchInput.value}`; }
    else {
        h1.innerHTML = null;
        alert("Type a city");
    }
showCurrentDate(searchInput.value);
}

function formatTwoDigits(number) {
    return number < 10 ? `0${number}` : number;
}
let currentDate = document.querySelector("#current-date");
currentDate.addEventListener("submit", showCurrentDate);

function showCurrentDate(cityName) {

    let now = new Date();
    
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayIndex = now.getDay();
    let day = daysOfWeek[dayIndex];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let formattedTime = `${hours}:${minutes}`;

    let h2 = document.querySelector("#current-date");

    if (cityName) {
        h2.innerHTML = `${day} ${formattedTime}`;
    } else {
        h2.innerHTML = null;
        alert("No city provided");
    }
}

/*let celsuisLink = document.querySelector("#celsius-link");
let fahrenheitLink = document.querySelector("#fahrenheit-link");

celsuisLink.addEventListener("click", showCelsuisLinkValue);
function showCelsuisLinkValue() {
    let C = 19;
    let F = 66;
    let a = document.querySelector("#celsuis-link");
    a.innerHTML = `${C}`;
   
    if (C) { console.log(C) } else { console.log(F); }
}*/


/*let temperatureElement = document.querySelector("#temperature");
let celsiusLink = document.querySelector("#celsius-link");
let fahrenheitLink = document.querySelector("#fahrenheit-link");

let temperatureCelsius = 19;
let temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;

celsiusLink.addEventListener("click", function(event) {
  event.preventDefault();
  temperatureElement.textContent = `⛅ ${temperatureCelsius}`;
});

fahrenheitLink.addEventListener("click", function(event) {
  event.preventDefault();
  temperatureElement.textContent = `⛅ ${temperatureFahrenheit}`;
});*/


let temperatureElement = document.querySelector("#temperature");
let celsiusLink = document.querySelector("#celsius-link");
let fahrenheitLink = document.querySelector("#fahrenheit-link");

let temperatureCelsius = 19;
let temperatureFahrenheit = 66; // Fixed value

celsiusLink.addEventListener("click", function(event) {
  event.preventDefault();
  temperatureElement.textContent = `⛅ ${temperatureCelsius}`;
});

fahrenheitLink.addEventListener("click", function(event) {
  event.preventDefault();
  temperatureElement.textContent = `⛅ ${temperatureFahrenheit}`;
});
