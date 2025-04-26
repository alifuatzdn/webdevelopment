const apiKey = "4f06e9478c3969f8806c43af90afe47f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

let lastCity;
search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});

searchButton.addEventListener("click", (e) => {
  var cityName = search.value.toLowerCase();
  if (cityName !== lastCity) {
    checkWeather(cityName);
  }
  lastCity = cityName;
})


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    weather.style.display = "none";
  }else {
    document.querySelector(".error").style.display = "none";
    var data = await response.json();

    var name = data.name;
    if (name.includes(" Province")) {
      name = name.replace(" Province", "");
    }

    document.querySelector(".city").innerHTML = name + " " + data.sys.country;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

    weatherType = data.weather[0].main;
    weatherImg.src = `images/${weatherType.toLowerCase()}.png`;

    weather.style.display = "block";
  }
}