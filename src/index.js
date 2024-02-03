import "./style.css";
import { getWeatherData } from "./weather";

async function buildDivs() {
  const data = await getWeatherData();
  Object.entries(data).forEach((day) => {
    console.log(day);
    createDay(day);
  });
}

function createDay(day) {
  const dayData = day[1].day;
  const maxTempF = document.createElement("div");
  const minTempF = document.createElement("div");
  const dayImage = document.createElement("img");

  
}

buildDivs();
