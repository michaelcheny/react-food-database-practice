import React, { useState } from "react";

export default function SearchBar(props) {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.handleFetch(input);
  };

  const handleClick = e => {
    // if (e.target.value === "Search") return;
    setInput("");
  };

  return (
    <form className="form" onSubmit={handleSubmit} onClick={handleClick}>
      <input
        type="text"
        className="search-bar"
        value={input}
        onChange={e => setInput(e.target.value)}
        onClick={handleClick}
        placeholder="Search for food..."
      />
    </form>
  );
}
