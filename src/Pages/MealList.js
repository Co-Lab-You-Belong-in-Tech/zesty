import React, { useContext, useState } from "react";
import { FavoriteContext } from "../Contexts/FavoriteContext";
import PageTitle from "../Components/PageTitle/PageTitle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import EmailButton from "../Components/EmailButton/EmailButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: "#6a784d;",
  },
});

function MealList(meal) {
  const [email, setEmail] = useState("");
  const { favorites } = useContext(FavoriteContext);
  // console.log(favorites);

  const favoritesList = favorites.map((favorite) => {
    //create function to remove favorite based off of id

    // const removeFromFavorite = (meal) => {
    //   favorites.pop(meal);
    //   console.log(favorites);
    // };
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
          <Card sx={{ maxWidth: 600, mx: 5, mt: 2 }}>
            <Link key={favorite.id} to={`/meal/${favorite.id}`}>
              <CardMedia
                component="img"
                height="140"
                image={favorite.image}
                title={favorite.title}
              />
            </Link>
            <CardContent className="recipe-card">
              <Typography gutterBottom component="div" className="recipe-title">
                {favorite.title}
              </Typography>
              <EmailButton recipe={favorite} email={email} />
            </CardContent>
          </Card>
        </Box>
      </ThemeProvider>
    );
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <PageTitle text="My Meal List" />
      <label>Please enter your email</label>
      <input type="email" placeholder="email" onChange={handleEmail} />
      <div>{favoritesList ? favoritesList : "Your meal list is empty!"}</div>
    </div>
  );
}
export default MealList;
