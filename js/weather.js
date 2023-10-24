const weatherContainer = document.querySelector("#weather");
const weather = document.querySelector("#weather .weather");
const city = document.querySelector("#weather .city");
const temp = document.querySelector("#weather .temp");
const weatherImg = document.querySelector("#weather .weatherImg");
const API_KEY = "b25793a9f8f667ef0d466e33d79ea8b6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}`;
      weather.innerText = `${data.weather[0].main}`;
  
      const weatherIconCode = data.weather[0].icon;
      weatherContainer.style.backgroundImage = `url(../todo/img/icon/${weatherIconCode}.png)`;
      /*weatherContainer.style.backgroundRepeat = "no-repeat";
      weatherContainer.style.backgroundSize = "50%";
      weatherContainer.style.backgroundPosition = "100% 100%";*/
      
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);