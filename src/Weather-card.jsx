import React from "react";
 function WeatherCard({city="Lagos"}) {
const [weatherData, setWeatherData] = React.useState(null);
const API_KEY = "834e027f37e0f7fbf990990dbae1d71ff";

React.useEffect(() => {
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=834e027f37e0f7fbf990990dbae1d71ff&units=metric`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error("Error fetching weather data:", error));
  }
}, [city]);
    if (!weatherData) {
        return <div>Loading...</div>;
    }
    const temperature = (weatherData.main.temp - 273.15).toFixed(1);
    const cityName = weatherData.name;
    const description = weatherData.weather[0].description;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

    return (
        <div className="weather-card">
            <h2>{cityName}</h2>
            <img src={iconUrl} alt={description} />
            <p>{description}</p>
            <h3>{temperature}°C</h3>  
        </div>
    );
}

export default WeatherCard;