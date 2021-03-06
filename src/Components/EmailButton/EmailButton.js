import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import './EmailButton.css'

function EmailButton({ recipe }) {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [url, setUrl] = useState("");

    useEffect(() => {
      setTitle(recipe.title);
      setUrl(recipe.sourceUrl);
      const ingr = recipe.extendedIngredients.map((ingredient) => {
        return "• " + ingredient.originalString
      });
      setIngredients(ingr);

    }, [recipe]);

    const isValid = () => {
        const checkValidity = (value) => {
          const valid = value !== undefined && value !== "" && value !== [];
          return valid ? true : false
        };
        
        const isNameValid = checkValidity(title);
        const isIngredientsValid = checkValidity(ingredients);
        const isUrlValid = checkValidity(url);

        if (
          isNameValid &&
          isIngredientsValid &&
          isUrlValid 
        ) {
          return true
          
        } else {
          return false
        };
    };


    const handleSubmit = async(e) => {
      e.preventDefault();

      let email = prompt("What email would you like to send this recipe to?");

      console.log(title)

      if( email !== undefined && 
          email !== "" && 
          email !== null &&
          isValid()) {
    
        let templateParams = {
          title: title,
          ingredients: ingredients,
          url: url,
          email: email
        };

        emailjs.send(
          "Zesty",
          "template_rvxwqyr",
          templateParams,
          "user_cz4VlkTanRaVSInl80gsa"
        );

        swal("Success!", `This recipe has been sent to ${email}`, "success")
  
        console.log(`
        ----SUBMITTING----
        Recipe: ${title},
        Ingredients: ${ingredients}
        Source: ${url},
        Email: ${email}
        `);
      }
      else {
        swal("Oh no!", "Something went wrong - check that your email is correct, or contact us at zestier.than.ever@gmail.com", "error")
      };
      email = ""
    };

    

    return (
      <form onSubmit={handleSubmit}>
        <button type="submit" className="email-btn">Email recipe</button>
      </form>
      
    );
};

export default EmailButton;
