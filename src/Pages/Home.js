import React from "react";
import PageTitle from '../Components/PageTitle/PageTitle';
import SearchBar from "../Components/SearchBar/SearchBar";

function Home() {
  return (
    <div className="home">
      <PageTitle text="Hello! What are you planning to make?" />
      <SearchBar />
    </div>
  );
}

export default Home;
