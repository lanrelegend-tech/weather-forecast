import React from "react";
function WeekForCast({city="london"} ) {
    const [forecastData, setForecastData] = React.useState(null);
    const API_KEY = "834e027f37e0f7fbf990990dbae1d71ff"

    React.useEffect(() => {
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=834e027f37e0f7fbf990990dbae1d71ff`)
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
    
const dailyForecast = [];
forecastData.list.forEach(item => {

    if (item.dt_txt.includes("12:00:00")) {
        dailyForecast.push(item);
    }
});
const firstFiveDays = dailyForecast.slice(0, 5);
    return (


    <div className="week-forecast-row">
            <h2>WEEKLY FORECAST({city})</h2>
            {firstFiveDays.map((item, index) => {
        const date =new Date(item.dt * 1000 );
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const iconurl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        
        return (
            <div key={index} className="week-forecast-item">
                <h3>{dayName}</h3>
                <img src={iconurl} alt="Weather icon" /> 
                <h2>{date.toLocaleDateString()}</h2>
            </div>
        );
    })}
        </div>

    );
} 
export default WeekForCast;


