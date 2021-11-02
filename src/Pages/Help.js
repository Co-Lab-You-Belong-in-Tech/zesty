import React from "react";
import PageTitle from "../Components/PageTitle/PageTitle";
import "../App.css";
import RadsImg from "../Rads-01.png";
import CheckIcon from "@mui/icons-material/Check";
import FeedbackIcon from "@mui/icons-material/Feedback";


import "../App.css";

function Help() {
  return (
    <section className="help">
      <PageTitle
        text="Meal Planning Made EASY!"
        className="help-title"
      />
      <hr />
      <article className="help-item">
        <CheckIcon className="helpScreen-icon" />
        <p>Set your meal PREFERENCES based on serving size, allergies, and more!</p>
      </article>
      <article className="help-item">
        <CheckIcon className="helpScreen-icon" />
        <p>Easily SEARCH for your favorite meals!</p>
      </article>
      <article className="help-item">
        <CheckIcon className="helpScreen-icon" />
        <p>Coming Soon! SAVE your meals and a shopping list is automatically created for you!</p>
      </article>
      <article className="help-item">
        <CheckIcon className="helpScreen-icon" />
        <p>Don't lose what you saved! EMAIL recipes to yourself before you close the app.</p>
      </article>
      <article className="help-item">
        <FeedbackIcon className="helpScreen-icon" />
        <p>As we continue to build Zesty, we'd love your feedback! Feel free to fill out our 
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQ_H9ZV5_HT71LiGWAQN-iQTdX0814dxFZk1Qdwg7kbNzQWA/viewform" className="help-link"> feedback survey </a> 
          or send us an <a href="mailto:zestier.than.ever@gmail.com" className="help-link">email</a> with your ideas!</p>
      </article>
      <img src={RadsImg} alt="radishes" className="rads-img" />
    </section>
  );
}

export default Help;
