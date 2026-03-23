import React from "react";
function TodayForCast({city = "Lagos"}) {
    const [forecastData, setForecastData] = React.useState(null);
    const API_KEY = "da73444597e3b7a7701ad56438f94598"

    React.useEffect(() => {
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=da73444597e3b7a7701ad56438f94598`)
                .then(response => response.json())
                .then(data => setForecastData(data))
                .catch(error => console.error("Error fetching forecast data:", error));
        }
    }, [city]);
    if (!forecastData) {
        return <div>Loading...</div>;
    }   
    const todayForecast = forecastData.list.filter(item => item.dt_txt.includes(new Date().toISOString().split('T')[0]));   
        const temperature = (todayForecast[0].main.temp - 273.15).toFixed(1);
        const time = todayForecast[0].dt_txt.split(' ')[1].slice(0, 5);
        const iconurl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

    return (
        <div className="today-forecast">
        <h2>TODAY'S FORECAST</h2>
        <img src={iconurl} alt={todayForecast[0].weather[0].description} />
        <p>{todayForecast[0].weather[0].description}</p>
        <h3>{temperature}°C at {time}</h3>
        </div>  
    );
} 
export default TodayForCast;
