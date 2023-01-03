import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import './Store.css';

const products = [
  {
    productID: 1001,
    title: "Mens Black Jacket",
    rating: 3,
    reviews: 80,
    availability: true,
    price: 7000
  },
  {
    productID: 1002,
    title: "Girls Red Jacket",
    rating: 2,
    reviews: 134,
    availability: true,
    price: 3500
  },
  {
    productID: 1003,
    title: "Black Trousers",
    rating: 5,
    reviews: 8,
    availability: false,
    price: 1200
  },
  {
    productID: 1004,
    title: "Girls Golden Pants",
    rating: 1,
    reviews: 47,
    availability: true,
    price: 3000
  },
  {
    productID: 1005,
    title: "Brown Shalwar Kameez",
    rating: 4,
    reviews: 74,
    availability: true,
    price: 2800
  },
  {
    productID: 1006,
    title: "Mens Black Shoes",
    rating: 5,
    reviews: 22,
    availability: true,
    price: 2300
  }
];

function Store(){
  return (
    <div className='store'>
      {products.map((item) => {
          return(
            <ProductCard product={item}/>
          )
      })}
    </div>
  )
}

export default Store;