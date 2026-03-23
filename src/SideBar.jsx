import React from "react";
import { WiDaySunny,WiCloud,WiRain } from "react-icons/wi";
import { FaCog ,FaCity,FaMapMarkedAlt,FaCloudSun } from "react-icons/fa";
 function SideBar() {
    const SideBarItems = [
        { icon: <WiDaySunny />, label: "Weather" },
        { icon: <FaCity />, label: "Cities" },
        { icon: <FaMapMarkedAlt />, label: "Map" },
        { icon: <FaCog />, label: "Setting" }
    ];

  return (
    <div className="side-bar">
    
      {SideBarItems.map((item, index) => (
        <div key={index} style={{color:"white"}}> {item.icon} <h2>{item.label}</h2> </div>
      ))}   
    </div>
  );
}
export default SideBar;