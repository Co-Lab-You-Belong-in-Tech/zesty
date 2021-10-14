import React from "react";
import SearchBar from "../Components/SearchBar/SearchBar";

function Home() {
  return (
    <div className="home">
      <section className="header">
        <h1>Hello! Welcome to Zesty!</h1>
        <h2>What would you like to eat this week?</h2>
        <SearchBar />
      </section>
    </div>
  );
}

export default Home;
