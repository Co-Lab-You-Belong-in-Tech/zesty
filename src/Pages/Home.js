import React from "react";
import SearchBar from "../Components/SearchBar/SearchBar";

function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="greeting">Hello! What will you be planning to make?</h1>
      </div>
      <SearchBar />
    </div>
  );
}

export default Home;
