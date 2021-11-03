import React, { useContext } from "react";
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
import Grid from "@material-ui/core/Grid";

const theme = createTheme({
  palette: {
    background: "#6a784d;",
  },
});

function MealList() {
  const { favorites } = useContext(FavoriteContext);

  const favoritesList = favorites.map((favorite) => {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
          <Grid container justify="center" spacing={1}>
            {favorites.map((favorite) => (
              <Grid key={favorite.id} item xs={12} sm={8} md={4}>
                <Card sx={{ m: 0.5 }}>
                  <Link key={favorite.id} to={`/meal/${favorite.id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={favorite.image}
                      title={favorite.title}
                    />
                  </Link>
                  <CardContent className="recipe-card">
                    <Typography
                      gutterBottom
                      component="div"
                      className="recipe-title"
                    >
                      {favorite.title}
                    </Typography>
                    <EmailButton recipe={favorite} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    );
  });

  return (
    <main className="page-container">
      <PageTitle text="My Meal List" />
      <section>
        {favorites.length > 0
          ? favoritesList
          : <p>Your list is empty! Go back to the Homepage to add a new meal!</p>}
      </section>
    </main>
  );
}
export default MealList;
