import React, { useState } from "react";
import emailjs from "emailjs-com";

// this works to send 1 recipe. How can I send more?
// only works when clicked twice :(

function EmailButton({ recipe, email }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  const [url, setUrl] = useState("");

  const getFormValues = (recipe) => {
    setTitle(recipe.title);

    const ingr = recipe.extendedIngredients.map((ingredient) => {
      return ingredient.originalString;
    });
    setIngredients(ingr);

    const dir = recipe.analyzedInstructions[0].steps.map((direction) => {
      return direction.step;
    });
    setDirections(dir);

    setUrl(recipe.sourceUrl);

    return (
      title === "" && ingredients === [] && directions === [] && url === ""
    );
  };

  const isValid = () => {
    const checkValidity = (value) => {
      const valid = value !== undefined && value !== "" && value !== [];
      return valid ? true : false;
    };

    const isNameValid = checkValidity(title);
    const isIngredientsValid = checkValidity(ingredients);
    const isDirectionsValid = checkValidity(directions);
    const isUrlValid = checkValidity(url);
    const isEmailValid = checkValidity(email);

    if (
      isNameValid &&
      isIngredientsValid &&
      isDirectionsValid &&
      isUrlValid &&
      isEmailValid
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getFormValues(recipe);

    // having this log here makes state update faster - so weird!
    console.log(title, ingredients, directions, url, email);

    if (isValid()) {
      let templateParams = {
        title: title,
        ingredients: ingredients,
        directions: directions,
        url: url,
        email: email,
      };

      // This is the Zesty one, switch before demo!
      // emailjs.send(
      //   "Zesty",
      //   "template_rvxwqyr",
      //   templateParams,
      //   "user_cz4VlkTanRaVSInl80gsa"
      // );

      emailjs.send(
        "Zesty",
        "zesty-test",
        templateParams,
        "user_uFBt7OJSbpoxTLb0kocyH"
      );

      console.log(`
          ----SUBMITTING----
          Recipe: ${title},
          Ingredients: ${ingredients},
          Directions: ${directions},
          Source: ${url}
          Email: ${email}
          `);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Email recipe</button>
    </form>
  );
}

export default EmailButton;
