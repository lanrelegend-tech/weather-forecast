import React from "react";
import SideBar from "./SideBar";
import "./weather.css";
import SearchBar from "./SearchBar";
import WeatherCard from "./Weather-card";
import TodayForCast from "./TodayForCast";
function App() { 
  return (
    
      <div>
      <SearchBar />
      <WeatherCard/>
      <TodayForCast />
      <SideBar />

      
    </div>
  
  );
}
export default App;