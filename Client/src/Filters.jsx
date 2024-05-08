import React from "react";
import { useState } from "react";

export default function Filters({ onFilter }) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(filter); 
  };

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search by Actor:
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Enter actor's name"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
