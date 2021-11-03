import React from "react";
import PageTitle from "../Components/PageTitle/PageTitle";
import SearchBar from "../Components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page-container">
      <PageTitle text="Hello! What are you planning to make?" />
      <p>
        New to Zesty? Click{" "}
        <Link to="/help">
          <span className="help-link">here</span>
        </Link>{" "}
        to learn about the app!
      </p>
      <SearchBar />
    </main>
  );
}

export default Home;
