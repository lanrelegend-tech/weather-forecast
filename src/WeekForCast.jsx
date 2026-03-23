import React from "react";
function WeekForeCast({city = "Texas"}) {
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
    if (!forecastData.list || forecastData.list.length === 0) {
        return <div>No forecast data available.</div>;
    }   
    const dailyForecast = {};
    const dates = new Set();
    forecastData.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        if (!dates.has(date)) {
            dates.add(date);
        dailyForecast[date].push(item);
        }
    });
    const firstFiveDays = dailyForecast.slice(0, 5);
    return (
        <div className="week-forecast">
        <h2>WEEKLY FORECAST({city})</h2>
        <div className="forecast-row">
            {firstFiveDays.map((day, index) => {    
                const temperature = day[0].main.temp.toFixed(1);
                const date = day[0].dt_txt.split(' ')[0];
                const iconurl = `https://openweathermap.org/img/wn/${day[0].weather[0].icon}.png`;
                const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
                return (
                    <div key={index} className="forecast-item">
                        <h3>{dayName}</h3>
                        <img src={iconurl} alt="Weather icon" />
                        <h4>{temperature}°C</h4>
                    </div>
                );
            })}
        </div>
        </div>
    );
}       

export default WeekForeCast;