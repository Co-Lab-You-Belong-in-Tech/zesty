import React, {useState} from 'react';
import emailjs from 'emailjs-com';

// this works to send 1 recipe. How can I send more?

function EmailButton({ mealList }) {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);
    const [email, setEmail] = useState("");

    const getFormValues = (title, ingredients, directions) => {
      setTitle(title);
        
      const ingr = ingredients.map((ingredient) => {
        return ingredient.originalString;
      });
      setIngredients(ingr);
      
      const dir = directions.map((direction) => {
        return direction.step;
      });
      setDirections(dir);
    };

    const isValid = () => {
        const checkValidity = (value) => {
          const valid = value !== undefined && value !== "" && value !== [];
          return valid ? true : false
        };
        
        const isNameValid = checkValidity(title);
        const isIngredientsValid = checkValidity(ingredients);
        const isDirectionsValid = checkValidity(directions);
        const isEmailValid = checkValidity(email);

        if (
          isNameValid &&
          isIngredientsValid &&
          isDirectionsValid &&
          isEmailValid
        ) {
          return true
          
        } else {
          return false
        };
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        getFormValues(mealList[0].title, mealList[0].extendedIngredients, mealList[0].analyzedInstructions[0].steps);
        
        // having this log here makes state update faster - so weird!
        console.log(title, ingredients, directions, email);

        if(isValid()) {
    
          let templateParams = {
            name: title,
            ingredients: ingredients,
            directions: directions,
            email: email
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
          Recipe: ${title}
          Ingredients: ${ingredients}
          Directions: ${directions},
          Email: ${email}
          `);
        };
        setEmail("");
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>Please enter your email</label>
            <input type="email" placeholder="email" onChange={handleEmail} />
            <button type="submit">Send Meal List</button>
        </form>
    );
};

export default EmailButton;

