//data.js file
import React from "react";
import {MultiActionAreaCard} from "./card";


 export function Data (){
    
    const data =
   [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 15499,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://m.media-amazon.com/images/I/31Q14qzdoZL._SY445_SX342_QL70_FMwebp_.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina...",
                "price": 18999,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/4/43/IPhone_X%2C_back_and_front%2C_Silver.png",
                "images": [
                    "https://i.dummyjson.com/data/products/2/1.jpg",
                    "https://i.dummyjson.com/data/products/2/2.jpg",
                    "https://i.dummyjson.com/data/products/2/3.jpg",
                    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond ",
                "price": 12490,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "data:image/jpeg;base64,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",
                "images": [
                    "https://i.dummyjson.com/data/products/3/1.jpg"
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 52802,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://m.media-amazon.com/images/I/81Lyw+JXkxL._SL1500_.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/4/1.jpg",
                    "https://i.dummyjson.com/data/products/4/2.jpg",
                    "https://i.dummyjson.com/data/products/4/3.jpg",
                    "https://i.dummyjson.com/data/products/4/4.jpg",
                    "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was .",
                "price": 49999,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://m.media-amazon.com/images/I/41GHiSkx3GL._SX300_SY300_QL70_FMwebp_.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/5/1.jpg",
                    "https://i.dummyjson.com/data/products/5/2.jpg",
                    "https://i.dummyjson.com/data/products/5/3.jpg"
                ]
            }
   ]
  
    return(
        <div id="contM">
{data.map((e)=>(
    <MultiActionAreaCard  key ={e.id} product={e} />
))}
        </div>
    );
}
//img={e.thumbnail} Title={e.title} Description={e.description} price={e.price} ofprice={e.discountPercentage} rating={e.rating}