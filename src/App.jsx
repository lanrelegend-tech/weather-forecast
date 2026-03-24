import React from "react";
import SideBar from "./SideBar";
import "./weather.css";
import SearchBar from "./SearchBar";
import WeatherCard from "./Weather-card";
import TodayForCast from "./TodayForCast";
import WeekForCast from "./WeekForCast";
function App() { 
  return (
    
      <div>
      <SideBar />
      <SearchBar />
      <WeatherCard /> 
      <WeekForCast />
      <TodayForCast />
      

      
    </div>
  
  );
}
export default App;