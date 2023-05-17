import React, { useEffect } from 'react';
import './Cart.css';

const CartDummyData = [
  {
    OrderID: 1,
    OrderType: "store_purchase",
    ItemID: 123,
    ItemTitle: "Shirt",
    TailorID: null,
    TailorName: null,
    Size: "Large",
    Measurements: {
      height: null,
      weight: null,
      chest: null,
      waist: null,
      hips: null,
      shoulder: null,
      sleeves: null,
      neck: null
    },
    ClothUI: null,
    Design: null,
    Catalogue: null,
    CatalogueID: null,
    Price: 100,
    Title: "Trendy Shirt"
  },
  {
    OrderID: 2,
    OrderType: "store_purchase_with_stitching",
    ItemID: 456,
    ItemTitle: "Cloth",
    TailorID: 123,
    TailorName: "Elegant Tailors",
    Size: null,
    Measurements: {
      height: 5,
      weight: 5,
      chest: 5,
      waist: 5,
      hips: 5,
      shoulder: 5,
      sleeves: 5,
      neck: 5
    },
    ClothUI: true,
    Design: {
      beltStyle: "Style 01",
      cuffsStyle: "Style 02",
      bottomStyle: "Style 03",
      trouserStyle: "Style 01",
      stitchStyle: "Style 02",
      collarStyle: "Style 03",
      sleevesStyle: "Style 01",
      shoulderStyle: "Style 02",
      neckStyle: "Style 03",
      lacingStyle: "Style 01"
    },
    Catalogue: false,
    CatalogueID: null,
    Price: 2000,
    Title: "Store Purchase with Stitching Item"
  },
  {
    OrderID: 3,
    OrderType: "store_purchase_with_stitching",
    ItemID: 456,
    ItemTitle: "Cloth",
    TailorID: 123,
    TailorName: "Elegant Tailors",
    Size: null,
    Measurements: {
      height: 5,
      weight: 5,
      chest: 5,
      waist: 5,
      hips: 5,
      shoulder: 5,
      sleeves: 5,
      neck: 5
    },
    ClothUI: false,
    Design: {
      beltStyle: null,
      cuffsStyle: null,
      bottomStyle: null,
      trouserStyle: null,
      stitchStyle: null,
      collarStyle: null,
      sleevesStyle: null,
      shoulderStyle: null,
      neckStyle: null,
      lacingStyle: null
    },
    Catalogue: true,
    CatalogueID: 254,
    Price: 3000,
    Title: "Store Purchase with Stitching Item"
  }
];

function Cart({ setCartItemCount }) {
  const cartItemCount = 4;

  useEffect(() => {
    setCartItemCount(cartItemCount);
  }, [cartItemCount, setCartItemCount]);

  return (
    <div className='Cart'>
      Cart
    </div>
  );
}

export default Cart;