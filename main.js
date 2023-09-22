const apiKey = "deda89a9d5943d80a12b75e1c9835446";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Surat";
//
async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
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

checkWeather();
