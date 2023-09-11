

let citySearch = document.querySelector("#city-input");
citySearch.addEventListener('submit', displayCity);


function displayCity (response) {
  let h3 = document.querySelector("#country");
  h3.innerHTML = console.log(displayCity);
  
  let h5 = document.querySelector("#temperature");
  h5 = console.log(cityTemperature);
}


let buttonSearch = document.querySelector("#searchWeather");
buttonSearch.addEventListener('click', displayCurrentLocation);

function displayCurrentLocation(response) {
  let formInput = document.querySelector("#form-text");
  formInput.addEventListener("submit",buttonSearch.value );
  let city = document.querySelector("country");
  city.innerHTML = console.log(formInput.value);
}


let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
let apiUrl = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${latitude}&lon=${longitube}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayCurrentLocation)


/*function displayWeather(response) {
    let weatherDiv = document.querySelector("#weather");
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;

    weatherDiv.innerHTML = `It is ${temperature} degrees, ${description}, in ${response.data.name
      }`;
  }

  let city = "Rome";
  let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  axios.get(url).then(displayWeather);

  https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY`)
                    .then(response => response.json())

//5fd76c7bf2bc408becb3b8761cc524bf*/