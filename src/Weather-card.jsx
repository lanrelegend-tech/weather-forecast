import React from "react";
 function WeatherCard({city="Lagos"}) {
const [weatherData, setWeatherData] = React.useState();


React.useEffect(() => {
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37a81d9ce8d20708a838c320aa89c091&units=metric`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error("Error fetching weather data:", error));
  }
}, [city]);
    if (!weatherData) {
        return <div>Loading...</div>;
    }
    const temperature = (weatherData.main.temp - 273.15).toFixed(1);
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);
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