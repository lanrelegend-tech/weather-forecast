import React from "react";
export default function SearchBar({city="london"}) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();


    const trimmedValue = inputValue.trim();
  

    if (trimmedValue == "") {
      alert("Please enter a city name."

      );
    }
    console.log("Submitting city:", trimmedValue);
    setCity(trimmedValue);
       setInputValue(""); 
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a city..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

