async function getWeatherData(place) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=ffbe3dc4ce984a67a8333912240302&q=${place}&days=7`;
  const jsonData = await fetch(url, { mode: "cors" });
  const weatherData = await jsonData.json();
  return weatherData.forecast.forecastday;
}

const NUMBER_OF_DAYS = 7;

export { getWeatherData, NUMBER_OF_DAYS };
