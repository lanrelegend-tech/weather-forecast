import React from "react";
function TodayForCast({city = "lagos"}) {
    const [forecastData, setForecastData] = React.useState(null);
    const [error, setError] = React.useState("");
    


    React.useEffect(() => {
        if (city) return;

        setForecastData(null);
        setError("");

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=37a81d9ce8d20708a838c320aa89c091&units=metric`)
                .then(response => {
                    if(!response.ok) {
                        throw new Error("city not found");
                    }
                    return response.json();
                })
                .then((data) => setForecastData(data))
                .catch((err) => setError(err.message));
        
    }, [city]);
    if (error) {
        return<div style={{ color: "red"}}>Error: {error}</div>;
    }

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
