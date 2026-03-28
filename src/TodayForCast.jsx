import axios from "axios";
import React from "react";
 function TodayForCast({city="Lagos"}) {
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


    
const firstThreeHours = weatherData?.list?.slice(0, 3) || [];
    return (
        <div className="today-forecast">

        <div className="forecast-row">
            {firstThreeHours.map((item, index) => {
        const temperature = item.main.temp.toFixed(1);
        const time = item.dt_txt.split(' ')[1].slice(0, 5);
        const iconurl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        
        return (
            <div key={index} className="forecast-item">
                  {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <>
                    <h3>{time}</h3>
                    <img src={iconurl} alt="Weather icon" /> 

                    <h4>{temperature}°C</h4>
                </>
            )}
            </div>
        );
    })}
        </div>
        </div>
    );
} 

export default TodayForCast;