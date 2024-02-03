import { getWeatherData } from "./weather";

const body = document.querySelector("body");

function createDay(day) {
  const container = document.createElement("div");
  const dayData = day[1].day;
  const maxTempF = document.createElement("div");
  const minTempF = document.createElement("div");
  const dayImage = document.createElement("img");

  maxTempF.innerHTML = dayData.maxtemp_f;
  minTempF.innerHTML = dayData.mintemp_f;
  const imageUrl = dayData.condition.icon.substring(2);

  dayImage.src = `https://${imageUrl}`;
  container.appendChild(maxTempF);
  container.appendChild(minTempF);
  container.appendChild(dayImage);
  return container;
}

async function buildDivs() {
  const data = await getWeatherData();
  Object.entries(data).forEach((day) => {
    const div = createDay(day);
    body.appendChild(div);
  });
}

console.log(body);
buildDivs();
