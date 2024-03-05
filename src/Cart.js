import { UserContext } from "./userContext";
import { useContext } from "react";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid"; // Import Grid from @mui/material
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export function CartPage({ product }) {
  const [count, setCount] = useState(1);
const { removeFromCart } = useContext(UserContext);
  const increaseCount = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleRemoveItem = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cart">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            className="cardcart"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              maxWidth: { xs: "300px", sm: "fit-content" },
            }}
          >
            <CardMedia
              component="img"
              height="65"
              image={product.thumbnail}
              alt={product.title}
              sx={{ height: "300px" }}
              className="img"
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography variant="h6" component="div" sx={{ textAlign: "left" }} className="title">
                {product.title}
                <div>
                  <StarIcon sx={{ color: "yellow" }} />
                  {product.rating}
                </div>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: "left" }}>
                {product.description}
                <div>
                  MRP: <span style={{ textDecoration: "line-through" }}>₹{product.price}</span>
                </div>
                Our price : ₹{(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <IconButton color="primary" onClick={decreaseCount}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1" sx={{ mx: 2 }}>
                  {count}
                </Typography>
                <IconButton color="primary" onClick={increaseCount}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button color="error" onClick={handleRemoveItem} sx={{ mt: 2 }}>
                DELETE
              </Button>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", mt: 2 }}>
                <Typography variant="body2" sx={{ bgcolor: "#FFC107", p: 1, borderRadius: 1 }}>
                  {product.discountPercentage}% off
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                  ₹{(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
                  M.R.P : ₹<span style={{ textDecoration: "line-through" }}>{product.price}</span>
                </Typography>
              </Box>
              <hr />
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                <Typography variant="body1">Total({count} Items) : </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  ₹{((product.price - (product.price * product.discountPercentage / 100)) * count).toFixed(2)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

