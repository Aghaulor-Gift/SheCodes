let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  }
  
  
  /*let cityName = prompt("What is your city name");
  if (weather.hasOwnProperty(cityName)) {
    let cityWeather = weather[cityName];
    alert("Temperature: " + cityWeather.temp + "°C\nHumidity: " + cityWeather.humidity + "%");
  } else {
    alert("City not found in weather data");
  }*/
  
   
    
  let cityName = prompt("Enter a city");
  let cityKey = cityName.toLowerCase();
  
  if (weather.hasOwnProperty(cityKey)) {
    let cityWeather = weather[cityKey];
    let tempCelsius = Math.round(cityWeather.temp);
    let tempFahrenheit = Math.round((cityWeather.temp * 9) / 5 + 32);
    let humidity = cityWeather.humidity;
  
    alert(
      "It is currently " +
        tempCelsius + "°C (" +
        tempFahrenheit + "°F) in " +
        cityName +
        " with a humidity of " +
        humidity +
        "%"
    );
  } else {
    alert(
      "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
        cityName
    );
  }
  
  /*Sandy's method
  console.log(weather.paris.temp)
    let cityname = prompt("What is your city name");
  
  let weatherCity = cityname.toLowerCase()
  if(cityname){
    alert(`it is currently ${Math.round(weather.[weatherCity].temp)}`)
  }
  */
  
  /* SheCode solution
  let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    moscow: {
      temp: -5,
      humidity: 20
    }
  };
  
  let city = prompt("Enter a city?");
  city = city.toLowerCase();
  if (weather[city] !== undefined) {
    let temperature = weather[city].temp;
    let humidity = weather[city].humidity;
    let celsiusTemperature = Math.round(temperature);
    let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
  
    alert(
      `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
    );
  } else {
    alert(
      `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }
  */
  
  
  /*chat gpt
  Sure, here's a simpler list of the methods and techniques we discussed for checking if a property exists in an object:
  
  Using hasOwnProperty:
  Check if the property is directly present in the object without considering inherited properties.
  
  javascript
  Copy code
  if (object.hasOwnProperty(property)) {
    // Property exists in the object.
  } else {
    // Property doesn't exist in the object.
  }
  Using the in operator:
  Check if the property exists in the object, including inherited properties from the prototype chain.
  
  javascript
  Copy code
  if (property in object) {
    // Property exists in the object.
  } else {
    // Property doesn't exist in the object.
  }
  Using !== undefined:
  Directly access the property and compare it to undefined to determine if it exists.
  
  javascript
  Copy code
  if (object[property] !== undefined) {
    // Property exists in the object.
  } else {
    // Property doesn't exist in the object.
  }
  Each of these methods achieves the same goal of checking whether a property exists in an object, but they might have different considerations based on the scenario and the nature of the properties you're working with.
  
  
  
  
  User
  Assuming I have  bulleted words like dog, cats, and lion, how do I use javascript to color only the bullet part without affecting the text.
  ChatGPT
  If you want to color only the bullet part of a bulleted list without affecting the text, you'll need to use CSS to apply the styling. JavaScript is not necessary for this task unless you want to dynamically manipulate the styles based on certain conditions.
  
  Here's an example of how you could achieve this using CSS:
  
  HTML:
  
  html
  Copy code
  <ul class="colored-list">
    <li>dog</li>
    <li>cats</li>
    <li>lion</li>
  </ul>
  CSS:
  
  css
  Copy code
  .colored-list {
    list-style: none; /* Remove default bullet styles */
   /* padding-left: 20px; /* Add some padding to provide space for the bullet */
  /*}
  
  /*.colored-list li::before {
    content: "•"; /* Use the bullet character as content */
   /* color: red; /* Set the color for the bullet */
   /* display: inline-block; /* Make sure the bullet takes up space */
  /*  width: 10px; /* Adjust the width of the bullet */
   /* margin-left: -20px; /* Negative margin to pull the bullet back into the padding area */
  /*}
  In this example, the ::before pseudo-element is used to add a custom bullet character (in this case, a bullet point) before each list item. The color property is used to set the color of the bullet, and other properties are adjusted to ensure proper alignment and spacing.
  
  You can modify the CSS properties to customize the appearance of the bullet as needed.
  
  Remember that this is a purely visual change and doesn't involve JavaScript unless you want to dynamically apply or change these styles based on specific conditions.*/

  // other examples
  
  // for each loop
//let fruits = ['apples', 'oranges', 'bananas'];
//fruits.forEach(function(fruit) {
 // alert("I have " + fruit + " in my shopping bag");
//});


// for loop
//for (let i = 0; i < 10; i++) {
 // console.log("i is " + i);
//}for (let i = 0; i < myList.length; i++) {
//  alert("I have " + myList[i] + " in my shopping bag");
//}

//do while loop
//let times = 0;
//do {
  //console.log(times);
  //times = times + 1;
//} while(times < 10)

//while loop
//let times = 0;
//while (times < 10) {
  //console.log(times);
 // times = times + 1;
//}