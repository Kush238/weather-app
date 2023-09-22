// Add an event listener to the input field
document
  .getElementById("cityInput")
  .addEventListener("keyup", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === "Enter") {
      // Trigger a click event on the search button
      document.getElementById("searchButton").click();
    }
  });

const apiKey = "deda89a9d5943d80a12b75e1c9835446";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".weather_city").innerHTML = data.name;
  document.querySelector(".weather_temperature").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".weather_humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".weather_wind").innerHTML =
    Math.round(data.wind.speed) + " Km/h";
  document.querySelector(".weather_wind_deg_num").innerHTML =
    Math.round(data.wind.deg) + " °C";
  document.querySelector(".weather_temp_max_num").innerHTML =
    Math.round(data.main.temp_max) + " °C";
  document.querySelector(".weather_temp_min_num").innerHTML =
    Math.round(data.main.temp_min) + " °C";
  document.querySelector(".weather_pressure").innerHTML = data.main.pressure;
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();
