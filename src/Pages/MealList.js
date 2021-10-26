import React, { useContext } from "react";
import { FavoriteContext } from "../Contexts/FavoriteContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//create function to remove favorite based off of id

function MealList(meal) {
  const { favorites } = useContext(FavoriteContext);
  console.log(favorites);

  const favoritesList = favorites.map((favorite) => {
    // const removeFromFavorite = (meal) => {
    //   favorites.pop(meal);
    //   console.log(favorites);
    // };
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} md={8}>
            {/* <Item> */}
            <Card sx={{ maxWidth: 600 }}>
              <CardMedia
                component="img"
                height="140"
                image={favorite.image}
                alt={favorite.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {favorite.title}
                </Typography>
              </CardContent>
              {/* <button onClick={() => removeFromFavorite(meal)}>
          Remove from meal list
        </button> */}
            </Card>
            {/* </Item> */}
          </Grid>
        </Grid>
      </Box>
    );
  });
  return (
    <div>{favoritesList ? favoritesList : "Your meal list is empty!"}</div>
  );
}
export default MealList;
