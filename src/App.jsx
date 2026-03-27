import React from "react";
import SideBar from "./SideBar";
import "./weather.css";
import SearchBar from "./SearchBar";
import WeatherCard from "./Weather-card";
import TodayForCast from "./TodayForCast";
import WeekForCast from "./WeekForCast";
function App() { 
  const [city, setCity] = React.useState("Lagos");
  
  return (
    
      <div className="app-container">

    <SideBar/>
    
    <div className="main-content">
      <SearchBar setCity={setCity} />
      <WeatherCard city={city} />
    
      </div>
      <div>
  
     
      
    
      </div>
    </div>
  
  );
}
export default App;