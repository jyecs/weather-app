import { getWeatherData } from "./weather";

async function buildDivs() {
  const data = await getWeatherData();
  Object.entries(data).forEach((day) => {
    body.appendChild(createDay(day));
  });
}

function createDay(day) {
  const container = document.createElement("div");
  const dayData = day[1].day;
  const maxTempF = document.createElement("div");
  const minTempF = document.createElement("div");
  const dayImage = document.createElement("img");

  maxTempF.innerHTML = dayData.maxtemp_f;
  minTempF.innerHTML = dayData.mintemp_f;
  dayImage.src = dayData.condition.icon.substring(2);

  container.appendChild(maxTempF);
  container.appendChild(minTempF);
  container.appendChild(dayImage);
  return container;

}

const body = document.querySelector("body");
console.log(body);
buildDivs();
