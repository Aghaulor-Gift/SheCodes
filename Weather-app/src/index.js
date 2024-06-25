let units = "metric";
let apiKey = "e165ab4o82t6774be34bfe406eaaafd2";

/*function getWeatherIconByTemperature(temperature) {
  if (temperature < 10) {
    return 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png' ;
  } else if (temperature < 25) {
    return 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png';
  } else {
    return ;
  }
}*/

function getWeatherIconByDescription(description) {
  // Adjust these conditions based on the available weather descriptions in your API response
  if (description.toLowerCase().includes('scattered clouds')) {
    return 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png';
  } else if (description.toLowerCase().includes('rain')) {
    return 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png';
  } else if (description.toLowerCase().includes('light rain')) {
    return 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png';
  } else if (description.toLowerCase().includes('broken cloud')) {
    return 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png';
  } else if (description.toLowerCase().includes('clear sky')) {
    return 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png';
  }
   else {
    // Provide a default icon or handle other cases as needed
    return 'https://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png';
  }
}


function updateWeatherInfo(response) {
  // Update temperature
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}`;

  // Update description
  let descriptionElement = document.querySelector("#weather-description");
  let description = response.data.condition.description;
  descriptionElement.innerHTML = `${description}`;

  // Update wind speed
  let windSpeedElement = document.querySelector("#wind-speed-value");
  let windSpeed =Math.round((response.data.wind.speed) * 3.6).toFixed(2);
  windSpeedElement.innerHTML = `${windSpeed} km/h`;
 /* let windSpeedKmh = Math.round(windSpeed * 3.6).toFixed(2); // Conversion
  windSpeedElement.innerHTML = `Wind: <strong>${windSpeedKmh} km/h</strong>`;*/

  // Update humidity
  let humidityElement = document.querySelector("#humidity-value");
  let humidity = response.data.temperature.humidity; // Adjust this based on your API response
  humidityElement.innerHTML = `${humidity}%`;

   // Get the corresponding weather icon based on description
   let iconElement = document.querySelector("#weather-icon-description");
   let iconUrl = getWeatherIconByDescription(description);
   iconElement.src = iconUrl;
   iconElement.alt = `${description}`;
 

 /* // Get the corresponding weather icon based on temperature
  let iconCode = getWeatherIconByTemperature(temperature);
  let iconElement = document.querySelector("#weather-icon");
  iconElement.src = `https://yourdomain.com/icons/${iconCode}`;
  iconElement.alt = `Weather Icon`;*/
}

function getCurrentWeather(cityName) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=${units}`;

  axios
    .get(apiUrl)
    .then((response) => {
      updateWeatherInfo(response);
    })
    .catch((error) => {
      console.error(`Error fetching current weather data for ${cityName}:`, error);
    });
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let cityName = searchInputElement.value;
  cityElement.innerHTML = cityName;
  getCurrentWeather(cityName);
}

// Use a single declaration for searchForm
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

// Update the current date on page load
let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);








/*let units = "metric";
let apiKey = "e165ab4o82t6774be34bfe406eaaafd2";

function getCurrentWeather(cityName) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=${units}`;

  axios
    .get(apiUrl)
    .then((response) => {
      let temperatureElement = document.querySelector("#temperature-value");
      let temperature = Math.round(response.data.temperature.current);
      temperatureElement.innerHTML = `${temperature}`;
    })
    .catch((error) => {
      console.error(
        `Error fetching current weather data for ${cityName}:`,
        error
      );
    });
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let cityName = searchInputElement.value;
  cityElement.innerHTML = cityName;
  getCurrentWeather(cityName);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
*/
