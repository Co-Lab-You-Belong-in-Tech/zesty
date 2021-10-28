import React from "react";
import PageTitle from "../Components/PageTitle/PageTitle";
import SearchBar from "../Components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <PageTitle text="Hello! What are you planning to make?" />
      <div>
        New to Zesty? Click{" "}
        <Link to="/help">
          <span className="help-link">here</span>
        </Link>{" "}
        to learn about the app!
      </div>
      <SearchBar />
    </div>
  );
}

export default Home;
