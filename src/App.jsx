import React from "react";
import SideBar from "./SideBar";
import "./weather.css";
import SearchBar from "./SearchBar";
import WeatherCard from "./Weather-card";
import TodayForCast from "./TodayForCast";
import WeekForCast from "./WeekForCast";
function App() { 
  const [city, setCity] = React.useState("Lagos");
  const[sidebarOpen,setSideOpen] =React.useState(false);
  return (
    
      <div class="app-container">
        <div className="top-bar">
          <div className="menu-toggle" onClick={() =>setSideOpen(!sidebarOpen)}>

          </div>
        </div>
    <SideBar  isOpen={sidebarOpen}/>
    
    <div className="main-content">
      <SearchBar setCity={setCity} />
      <WeatherCard city={city} />
      <TodayForCast city={city} />
      </div>
      <div>
      <WeekForCast city={city} />
     
      
    
      </div>
    </div>
  
  );
}
export default App;