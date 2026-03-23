import React from "react";
function TodayForCast({city = "London"}) {
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
    
const firstThreeHours = forecastData.list.slice(0, 3);
    return (
        <div className="today-forecast">

        <div className="forecast-row">
            <h2>TODAY'S FORECAST({city})</h2>
            {firstThreeHours.map((item, index) => {
        const temperature = item.main.temp.toFixed(1);
        const time = item.dt_txt.split(' ')[1].slice(0, 5);
        const iconurl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        
        return (
            <div key={index} className="forecast-item">
                <h3>{time}</h3>
                <img src={iconurl} alt="Weather icon" /> 

                <h4>{temperature}°C</h4>
            </div>
        );
    })}
        </div>
        </div>
    );
} 
export default TodayForCast;
