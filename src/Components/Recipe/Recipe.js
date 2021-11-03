import React from "react";
import "./Recipe.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: "#6a784d;",
  },
});

function Recipe({ image, title }) {
  return (
    <ThemeProvider theme={theme}>
      <CardActions>
        <Card
          sx={{
            boxShadow: 2,
            mx: "auto",
            width: {
              xs: 400,
              sm: 600,
            },
          }}
        >
          <CardMedia component="img" height="140" image={image} title={title} />
          <CardContent className="recipe-card">
            <Typography gutterBottom component="div" className="recipe-title">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </CardActions>
    </ThemeProvider>
  );
}

export default Recipe;
