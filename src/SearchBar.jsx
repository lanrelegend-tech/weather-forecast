import React from "react";
export default function SearchBar({ setCity }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted city:", inputValue);
  

    if (inputValue.trim() !== "") {
      setCity(inputValue.trim());
    }
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

