import React from "react";
import "../App.css";

function Help() {
  return (
    <div className="home">
      <div className="container">
        <img src="logo.png" alt="logo" className="logo" />
        <h1 className="help-title">Your Meal Planning Assistant Made EASY!</h1>
        <ul className="helpful-tips">
          <li className="helpful-tip-item">
            Set your meal PREFERENCES based on serving size, allergies, and
            more!
          </li>
          <li className="helpful-tip-item">
            Easily SEARCH for your favorite meals!
          </li>
          <li className="helpful-tip-item">
            SAVE your meals and a shopping list is automatically created for
            you!
          </li>
          <li className="helpful-tip-item">
            Don't lose what you saved! EMAIL multiple meals to yourself before
            you close the app.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
