import "./style.css";
import { getWeatherData } from "./weather";

async function buildDivs() {
  const data = await getWeatherData();
  for (let i = 0; i < 7; i++) {
    console.log(data[i]);
  }
}

buildDivs();
