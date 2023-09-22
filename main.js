const apiKey = "deda89a9d5943d80a12b75e1c9835446";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Ahmedabad";
//
async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();

// const apiKey = "deda89a9d5943d80a12b75e1c9835446";
