import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Unstable_Grid2';
import { useState,useContext } from 'react';
import "./App.css";
import { Button,  CardActions } from '@mui/material';
 
import {UserContext} from "./userContext"

export  function MultiActionAreaCard( {product}) {

  const { productlist, setProductlist } = useContext(UserContext);

  const [cartname, setCartname] = useState(false);
  const handleAddToCart = (product) => {
    setCartname(!cartname);
    setProductlist([...productlist, product]);
   
    console.log(setProductlist)
  };

  const handleRemoveFromCart = (product) => {
    setCartname(!cartname);
    setProductlist(productlist.filter((item) => item.id !== product.id));
   
  };
  const isInCart = productlist.some((item) => item.id === product.id);

  return (
    <Grid container spacing={3}>
        <Grid xs={12}>
    <Card sx={{ maxWidth: 340 , maxHeight:500}}>
        <CardMedia
          component="img"
          height="110"
          image ={product.thumbnail}
          
          alt={product.Title}
          sx={{height:"300px"}}
          className='img'
        />
        <CardContent>
          <Typography  variant="h6" component="div" sx={{textAlign:"left"}} className='title'>
           {product.title}
         <div><StarIcon sx={{color:"yellow"}}/>{product.rating}</div>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{textAlign:"left"}}>
            {product.description}
            <br/>
            Our price : ₹{(product.price-(product.price*(product.discountPercentage/100))).toFixed(2)}  
            {/* const newPrice = oldPrice - (oldPrice * (percentageToDecrease / 100)); */}
            <span>  MRP:  </span>  <span style={{ textDecoration: 'line-through' }}> ₹{product.price}</span>
          </Typography>
        
        <CardActions>
            
        {isInCart  ? (
                <Button
                  size="medium"
                  variant="contained"
                  color="error"
                  className="addbtn"
                  onClick={()=>handleRemoveFromCart(product)}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  size="medium"
                  variant="contained"
                  className="addbtn"
                  onClick={()=>handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              )}
      </CardActions>
      
     </CardContent>
      
     
    </Card></Grid></Grid>
  );
}
