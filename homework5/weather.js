/*function getWeatherByCity(cityName) {
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&units=${units}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(`Weather in ${cityName}:`, data);
    })
    .catch(error => {
      console.error(`Error fetching weather data for ${cityName}:`, error);
    });
}

// Initialize an empty array to store city names
let cities = [];

// Prompt the user to input cities until they enter an empty string
while (true) {
  let userInput = prompt("Enter a city name (or press Cancel to finish):");
  if (userInput === null || userInput === "") {
    break; // Exit the loop if the user presses Cancel or enters an empty string
  }
  cities.push(userInput);
}

// Iterate through the array and fetch weather for each city
cities.forEach(city => {
  getWeatherByCity(city);
});
*/




/*function getWeatherByCity(cityName) {
  let units = "metric";
  let apiKey = "e165ab4o82t6774be34bfe406eaaafd2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=${units}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(`Weather in ${cityName}:`, data);
    })
    .catch(error => {
      console.error(`Error fetching weather data for ${cityName}:`, error);
    });
}

// Array of city names
let cities = ["London", "New York", "Tokyo", "Paris", "Sydney", "Lagos"];

// Iterate through the array and fetch weather for each city
cities.forEach(city => {
  getWeatherByCity(city);
});
*/









///function getWeatherByCity(cityName) {
  // You can adjust the units parameter based on your preference (metric, imperial, standard)
/*  let units = "metric";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&units=${units}`;

  // Fetch the weather data
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Handle the weather data
      console.log(`Weather in ${cityName}:`, data);
    })
*///.catch(error => {
    //  console.error(`Error fetching weather data for ${cityName}:`, error);
  ///  });
//}

// Example usage with multiple cities
//getWeatherByCity("London");
//getWeatherByCity("New York");
//getWeatherByCity("Tokyo");






/*
function getWeatherByCity(cityName) {
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&units=${units}`;

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      return { city: cityName, weatherData: data };
    })
    .catch(error => {
      return { city: cityName, error: error.message };
    });
}

// Array of city names
const cities = ["London", "New York", "Tokyo", "Paris", "Sydney"];

// Fetch weather for each city
const fetchWeatherForCities = async () => {
  const weatherPromises = cities.map(city => getWeatherByCity(city));
  const weatherResults = await Promise.all(weatherPromises);

  weatherResults.forEach(result => {
    if (result.error) {
      console.error(`Error fetching weather data for ${result.city}:`, result.error);
    } else {
      console.log(`Weather in ${result.city}:`, result.weatherData);
    }
  });
};

// Call the function to fetch weather for each city
fetchWeatherForCities();
*/








/*let locationQuery = "cityName"; // Replace with the actual city or location you're interested in
let units = "metric"; // You can change this to other units like "imperial" or "standard"

let url = `https://api.shecodes.io/weather/v1/current?query=${locationQuery}&units=${units}`;

// Now you can use this URL in a fetch request
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the weather data
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });

*/


//let apiUrl = "https://api.shecodes.io/weather/v1/current?query=Lagos&key=e165ab4o82t6774be34bfe406eaaafd2&units=metric";

   //axios.get(apiUrl).then(displayUser);


   /*
   let units = "metric";
   let apiKey = "e165ab4o82t6774be34bfe406eaaafd2";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
   
   
   function getCurrentWeather() {
    axios
      .get(apiUrl)
      .then(response => {
        let temperatureElement = document.querySelector("#temperature-value");
        // Extract temperature from the API response
        let temperature = Math.round(response.data.temperature.current);
        temperatureElement.innerHTML = `${temperature}`;
      })
      .catch(error => {
        console.error("Error fetching current weather data:", error);
      });
  }




   function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  getCurrentWeather(); 
  
}*/




// perfect code for Shecode homework 5
let units = "metric";
let apiKey = "e165ab4o82t6774be34bfe406eaaafd2";

function getCurrentWeather(cityName) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=${units}`;

  axios
    .get(apiUrl)
    .then(response => {
      let temperatureElement = document.querySelector("#temperature-value");
      let temperature = Math.round(response.data.temperature.current);
      temperatureElement.innerHTML = `${temperature}`;
    })
    .catch(error => {
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



// Matthieu SheCodes Homework 5 Solution

/*function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}*/



/*function getCurrentWeather(temperatureElement) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let temperatureElement = document.querySelector("#temperature-value");
      // Extract temperature from the API response
      let temperature = Math.round(data.temperature.current);
      temperatureElement.innerHTML = `${temperature}`;
    })
    .catch(error => {
      console.error("Error fetching current weather data:", error);
    });
}
*/


/*function getCurrentWeather(response){
 let temperatureElement = document.querySelector("#temperature-value");
let temperature = math.round(response.temperature.current);
temperatureElement.innerHTML = `${temperature}`;


}
*/

//axios.get(apiUrl).then(getCurrentWeather);







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
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
