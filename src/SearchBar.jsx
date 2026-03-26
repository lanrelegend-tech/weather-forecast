import React from "react";
function SearchBar({ setCity }) {
    const [inputValue, setInputValue] = React.useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue === "") {
        alert("Please enter a city name.");
        return;
        
      }
      setCity(trimmedValue);
      setInputValue("");
    };
    return (
      <div className="search-bar">
      <form onSubmit={handleSubmit} >
      
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a city name"
        />
        <button type="submit" style={{cursor:"pointer"}}>Search</button>
      </form>
      </div>
    );
  }
  export default SearchBar;