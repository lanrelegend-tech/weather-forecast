import axios from "axios";
import React from "react";
 function WeatherCard({city="Lagos"}) {
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


    
    
        const temperature = weatherData?.list[0].main.temp.toFixed(1);
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);
    const description = weatherData?.list[0].weather[0].description;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData?.list[0].weather[0].icon}.png`;

    return (
        <div className="weather-card">
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <>
                    <h2>{cityName}</h2>
                    <img src={iconUrl} alt={description} />
                    <p>{description}</p>
                    <h3>{temperature}°C</h3>
                </>
            )}
        </div>
    );
}

export default WeatherCard;