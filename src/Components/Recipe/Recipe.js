import React from "react";
import "./Recipe.css";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";

function Recipe({ image, title }) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      {/* <Button size="small">Add to Favorites</Button> */}
    </Card>
  );
}

export default Recipe;
