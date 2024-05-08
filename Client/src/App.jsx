import React, { useState, useEffect } from "react";
import NewPost from "./NewPost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllPosts from "./AllPosts";
import Navbar from "./Navbar";
import Shows from "./Shows";
import Actors from "./Actors";
import Filters from "./Filters";

export default function App() {
  const [actors, setActors] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getActors();
    getShows();
  }, []);

  async function getActors() {
    const response = await fetch("http://localhost:8080/actors");
    const data = await response.json();
    setActors(data);
  }

  async function getShows() {
    const response = await fetch("http://localhost:8080/shows");
    const data = await response.json();
    setShows(data);
  }

  return (
    <div>
      <h1>TV Review</h1>
      <h2>Please leave a review for your favourite show and actor</h2>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/filters" element={<Filters />} />
        </Routes>
      </Router>
    </div>
  );
}
