import React, { useContext } from "react";
import { Button, Typography, Grid } from "@mui/material";
import { CartPage } from "./Cart";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const { productlist } = useContext(UserContext);
  const navigate = useNavigate();

  const totalQuantity = productlist.length;
  // const totalQuantity = productlist.reduce((total, product) => total + product.quantity, 0);

  const totalAmount = productlist.reduce((total, product) => {
    return total + (product.price - (product.price * product.discountPercentage) / 100);
  }, 0);
  // const totalAmount = productlist.reduce((total, product) => {
  //   return total + ((product.price - (product.price * product.discountPercentage) / 100) * product.quantity);
  // }, 0);

  return (
    <section>
      {productlist.length > 0 ? (
        <div id="totalcart">
        <Grid container spacing={2} id="cartd">
          {productlist.map((product) => (
            <Grid item xs={12}  id="totalcart" key={product.id}>
              <CartPage product={product} />
            </Grid>
          ))}
          <Grid item xs={12}>
           <Grid container justifyContent="center" >
              <Grid item xs={12} md={4} lg={4}  >
                <Typography variant="h5" gutterBottom align="right">Order Details</Typography>
                <Typography variant="body1" gutterBottom align="right">Total Quantity: {totalQuantity} Items</Typography>
                <Typography variant="body1" gutterBottom align="right">Shipping: FREE</Typography>
                <Typography variant="body1" gutterBottom align="right">Total Amount: ₹{totalAmount.toFixed(2)}</Typography>
                <Typography gutterBottom align="right"><Button variant="contained" color="primary" onClick={() => navigate('/')}>Proceed to Buy</Button></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </div>
      ) : (
        <Grid container spacing={2} justifyContent="center" alignItems="center" id="cartfg">
          <Grid item xs={12} id="cartfg">
          <img src="https://zoe.menu/assets/images/empty_cart.gif" alt="Cart is Empty" />
            <br/>
            <Button variant="contained" color="success" onClick={() => navigate('/')}>Continue Shopping</Button>
          </Grid>
        </Grid>
      )}

    </section>
  );
};

export default CartDetails;
