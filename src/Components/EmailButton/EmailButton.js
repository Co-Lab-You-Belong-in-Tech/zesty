import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

// this works to send 1 recipe. How can I send more?
// only works when clicked twice :(

function EmailButton({ recipe, email }) {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    // const [directions, setDirections] = useState([]);
    const [url, setUrl] = useState("");

    useEffect(() => {
      setTitle(recipe.title);
      setUrl(recipe.sourceUrl);

      const ingr = recipe.extendedIngredients.map((ingredient) => {
        return ingredient.originalString
      })
      setIngredients(ingr)

    }, [recipe])

    const isValid = () => {
        const checkValidity = (value) => {
          const valid = value !== undefined && value !== "" && value !== [];
          return valid ? true : false
        };
        
        const isNameValid = checkValidity(title);
        const isIngredientsValid = checkValidity(ingredients);
        // const isDirectionsValid = checkValidity(directions);
        const isUrlValid = checkValidity(url)
        const isEmailValid = checkValidity(email);

        if (
          isNameValid &&
          isIngredientsValid &&
          // isDirectionsValid &&
          isUrlValid &&
          isEmailValid
        ) {
          return true
          
        } else {
          return false
        };
    };

    const handleSubmit = async(e) => {
      e.preventDefault();

      if(isValid()) {
    
        let templateParams = {
          title: title,
          ingredients: ingredients,
          // directions: directions,
          url: url,
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
      }
    };

    

    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Email recipe</button>
      </form>
      
    );
};

export default EmailButton;

