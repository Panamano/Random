const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=9e9ca3437dc46365b4fd4baec9b6453d";
const API_UNITS = "&units=metric";

const getWeather = () => {
  const city = input.value || "Lodz";
  const URL = API_LINK + city + API_KEY + API_UNITS;

  axios
    .get(URL)
    .then((res) => {
      console.log(res.data);
      const temp = res.data.main.temp;
      const hum = res.data.main.humidity;
      const status = Object.assign({}, ...res.data.weather);

      if (status.id < 300) {
        photo.setAttribute("src", "./img/thunderstorm.png");
      } else if (status.id < 400) {
        photo.setAttribute("src", "./img/drizzle.png");
      } else if (status.id < 600) {
        photo.setAttribute("src", "./img/rain.png");
      } else if (status.id < 700) {
        photo.setAttribute("src", "./img/ice.png");
      } else if (status.id < 800) {
        photo.setAttribute("src", "./img/fog.png");
      } else if (status.id === 800) {
        photo.setAttribute("src", "./img/sun.png");
      } else if (status.id > 800) {
        photo.setAttribute("src", "./img/cloud.png");
      } else {
        photo.setAttribute("src", "./img/unknown.png");
      }

      cityName.textContent = res.data.name;
      weather.textContent = status.main;
      temperature.textContent = Math.floor(temp) + "⁰C";
      humidity.textContent = hum + "%";

      warning.textContent = "";
      input.value = "";
    })
    .catch(() => (warning.textContent = "Wpisz poprawną nazwę miasta."));
};
const enterKey = (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
};

input.addEventListener("keyup", enterKey);
button.addEventListener("click", getWeather);
console.log(URL);
