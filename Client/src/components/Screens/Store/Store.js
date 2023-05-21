import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import './Store.css';
import products from './Products';


function Store({filter, onClothClick}){
  return (
    <div className='store'>
      {products.map((item) => {
          if(item.type === filter || filter === 'all')
          return(
            <div className='products'><ProductCard product={item} onClothClick={onClothClick}/></div>
          )
      })}
    </div>
  )
}

export default Store;