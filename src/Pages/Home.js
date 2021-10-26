import React from "react";
import SearchBar from "../Components/SearchBar/SearchBar";

function Home() {
  return (
    <div className="home">
      <div>
        <p>Hello! What will you be planning to make?</p>
      </div>
      <SearchBar />
    </div>
  );
}

export default Home;
