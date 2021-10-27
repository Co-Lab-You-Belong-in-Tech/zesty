import React, { useContext } from "react";
import { FavoriteContext } from "../Contexts/FavoriteContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";

const theme = createTheme({
  palette: {
    background: "#6a784d;",
  },
});

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        mx: "auto",
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "400",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

function MealList(meal) {
  const { favorites } = useContext(FavoriteContext);
  console.log(favorites);

  const favoritesList = favorites.map((favorite) => {
    //create function to remove favorite based off of id
    // const removeFromFavorite = (meal) => {
    //   favorites.pop(meal);
    //   console.log(favorites);
    // };
    return (
      <ThemeProvider theme={theme}>
        <div style={{ maxWidth: "100%" }}>
          <Box
            sx={{
              display: "grid",
              columnGap: 3,
              rowGap: 1,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <Item>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={favorite.image}
                  title={favorite.title}
                />
                <CardContent className="recipe-card">
                  <Typography
                    gutterBottom
                    // variant="h6"
                    component="div"
                    className="recipe-title"
                  >
                    {favorite.title}
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Box>
        </div>
      </ThemeProvider>
    );
  });
  return (
    <div>{favoritesList ? favoritesList : "Your meal list is empty!"}</div>
  );
}
export default MealList;
