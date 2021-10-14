import React from "react";
import SearchBar from "../Components/SearchBar/SearchBar";

function Home() {
  return (
    <div className="home">
      <section className="header">
        <h1>Hello! Welcome to Zesty!</h1>
        <SearchBar />
      </section>
    </div>
  );
}

export default Home;
