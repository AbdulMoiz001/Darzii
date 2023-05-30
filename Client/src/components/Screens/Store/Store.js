import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import { AuthContext } from "../../../context/authContext/AuthContext";
import './Store.css';
import axios from "axios"
import products from './Products';


function Store({ filter, onClothClick }) {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const accessToken = user.accessToken;


  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/product/getProducts", {
          headers: {
            token: "Bearer " + accessToken,
          },
        });
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchproducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='store'>
      {products.map((item) => {
        if (item.type === filter || filter === 'all')
          return (
            <div className='products'><ProductCard product={item} onClothClick={onClothClick} /></div>
          )
      })}
    </div>
  )
}

export default Store;