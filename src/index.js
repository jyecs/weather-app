import { getWeatherData } from "./weather";

const weatherDiv = document.querySelector(".weather-display");

function createDay(day) {
  const container = document.createElement("div");
  container.classList.add("weather-day-container");
  const dayData = day[1].day;
  const maxTempF = document.createElement("div");
  const minTempF = document.createElement("div");
  const dayImage = document.createElement("img");

  maxTempF.innerHTML = `${dayData.maxtemp_f} F`;
  minTempF.innerHTML = `${dayData.mintemp_f} F`;
  const imageUrl = dayData.condition.icon.substring(2);

  dayImage.src = `https://${imageUrl}`;
  container.appendChild(dayImage);
  container.appendChild(maxTempF);
  container.appendChild(minTempF);
  return container;
}

function capitalizeFirst(string) {
  console.log(string);
  let str = string.substring(0, 1).toUpperCase();
  str += string.substring(1);
  return str;
}

async function buildDivs(place = "London") {
  weatherDiv.replaceChildren();
  const placeTitle = document.querySelector(".weather-place");
  placeTitle.innerHTML = capitalizeFirst(place);
  const data = await getWeatherData(place);
  Object.entries(data).forEach((day) => {
    const div = createDay(day);
    weatherDiv.appendChild(div);
  });
}

const button = document.querySelector("#submit-button");
button.addEventListener("click", () => {
  console.log(document.querySelector("#place"));
  const { value } = document.querySelector("#place");
  buildDivs(value);
});

buildDivs();
