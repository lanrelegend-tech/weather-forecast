import axios from "axios";
import React from "react";
 function  WeekForCast({city="Lagos"}) {
const [weatherData, setWeatherData] = React.useState();
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(null);
const url =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=37a81d9ce8d20708a838c320aa89c091&units=metric`;

React.useEffect(() => {
  const fetchweatherApi = async () => {
    if(city){
        try{
            setLoading(true)
            const response = await axios.get(url)
            console.log(response.data)
                if (response.data){
                    setWeatherData(response.data)
                    setError(null)
                }
            }catch(error){
                console.error(error)
                setError("invalid country")
            }finally{
                setLoading(false)
            }
        }
    };
    fetchweatherApi();
  
}, [city, url]);


    const dailyForecast = [];
weatherData?.list.forEach(item => {

    if (item.dt_txt.includes("12:00:00")) {
        dailyForecast.push(item);
    }
});
const firstFiveDays = dailyForecast.slice(0, 5);
    return (
 <div className="week-forecast-row">
            {firstFiveDays.map((item, index) => {
        const date =new Date(item.dt * 1000 );
        const temperature = item.main.temp.toFixed(1);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const iconurl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        return (
            <div key={index} className="week-forecast-item">
                  {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <>
                   <h3>{dayName}</h3>
                <img src={iconurl} alt="Weather icon" /> 
                <h2>{temperature}°C</h2>
                </>
            )}
            </div>
        );
    })}
        </div>
    
    );
} 
       

export default  WeekForCast;