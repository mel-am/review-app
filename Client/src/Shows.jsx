import React, { useState, useEffect } from "react";

export default function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    const response = await fetch("https://review-app-2zpg.onrender.com/shows");
    const data = await response.json();
    setShows(data);
  };

  return (
    <div className="table-container">
      <h2>Popular TV Shows</h2>
      <table>
        <thead>
          <tr>
            <th>Show</th>
            <th>Year</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {shows.map((show, index) => (
            <tr key={index}>
              <td>{show.show}</td>
              <td>{show.year}</td>
              <td>{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
