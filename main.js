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
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".city_error_2").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".weather_more").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".city_error_2").style.display = "none";
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
      "Wind Degree: <strong>" + Math.round(data.wind.deg) + " °C </strong>";
    document.querySelector(".weather_temp_max_num").innerHTML =
      "Max Temperature: <strong>" +
      Math.round(data.main.temp_max) +
      " °C </strong>";
    document.querySelector(".weather_temp_min_num").innerHTML =
      "Min Temperature: <strong>" +
      Math.round(data.main.temp_min) +
      " °C </strong>";
    document.querySelector(".weather_pressure").innerHTML =
      "Pressure: <strong>" + data.main.pressure + "</strong>";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".weather_more").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();
