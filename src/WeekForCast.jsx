import React from " react";
function WeekForCast({city = "London"}) {
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
    const today = new Date().toISOString().split('T')[0];

    
const firstFiveDay = forecastData.list.filter(item => item.dt_txt.startsWith(today)).slice(0, 5);
    return (

        <div className="week-forecast-row">
            <h2>WEEKLY FORECAST({city})</h2>
            {firstFiveDay.map((item, index) => {
        const temperature = item.main.temp.toFixed(1);
        const time = item.dt_txt.split(' ')[1].slice(0, 5);
        const iconurl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        
        return (
            <div key={index} className="week-forecast-item">
                <h3>{time}</h3>
                <img src={iconurl} alt="Weather icon" /> 

                <h4>{temperature}°C</h4>
            </div>
        );
    })}
        </div>
    
    );
} 
export default WeekForCast;