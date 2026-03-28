import React, { useEffect } from "react";
function SearchBar({ setCity }) {
    const [inputValue, setInputValue] = React.useState("");
    const [history , setHistory] = React.useState(() => JSON.parse(localStorage.getItem("cityHistory") || "[]"));
    const [inputFocus,setInputFocus] = React.useState(false);
    useEffect(() => {
      localStorage.setItem("cityHistory", JSON.stringify(history));
    }, [history]);

    useEffect(() => {
      console.log("Updated cityHistory:", history);
    }, [history]);

    const handleSubmit = (event) => {
      event.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue === "") {
        alert("Please enter a city name.");
        return;
      }

      setCity(trimmedValue);
      setInputValue("");
      setHistory((prev) => {
        const updated = [...prev, trimmedValue];
        return updated.slice(-5);
      });
    };
    return (
      <div className="search-bar">
      <form onSubmit={handleSubmit} >
      
        <input
        onFocus={() =>setInputFocus(true)}
        onBlur={() =>setInputFocus(false)}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a city name......"
        />
        <button type="submit" style={{cursor:"pointer"}}>Search</button>
        {inputFocus &&(
          <div className="history-searched">
            <ul>
            
              {history.map(search=>{
                return(
                  <li key={search}>{search}</li>
                )
              })}
            </ul>
        
          </div>
        )}
      
        
        
      </form>
      </div>
    );
  }
  export default SearchBar;