import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css';

const CartItem = ({ item, onRemoveItem }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h3>{item.ItemTitle}</h3>
        <p>Order Type: {item.OrderType}</p>
        <p>Rs. {item.Price}</p>
      </div>
      <button className="delete-button" onClick={() => onRemoveItem(item.OrderID)}>
        Delete
      </button>
    </div>
  );
};

const Cart = ({ onCartItemCountChange }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Retrieve cart items from cache
    const cachedCartItems = localStorage.getItem('cartItems');
    const initialCartItems = cachedCartItems ? JSON.parse(cachedCartItems) : [];
    setCartItems(initialCartItems);

    // Retrieve cart item count from cache
    const cachedCartItemCount = localStorage.getItem('cartItemCount');
    const initialCartItemCount = cachedCartItemCount ? parseInt(cachedCartItemCount) : 0;
    setCartItemCount(initialCartItemCount);
  }, []);

  useEffect(() => {
    // Update cache whenever cart items change
    updateCache(cartItems);
    updateCartItemCount(cartItems.length);

    // Notify parent component about cart item count change
    onCartItemCountChange(cartItems.length);
  }, [cartItems, onCartItemCountChange]);

  // Function to update the cache with cart items
  const updateCache = (updatedCartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Function to update the cache with cart item count
  const updateCartItemCount = (count) => {
    localStorage.setItem('cartItemCount', count);
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (orderId) => {
    const updatedCartItems = cartItems.filter((item) => item.OrderID !== orderId);
    setCartItems(updatedCartItems);
    setCartItemCount((prevCount) => prevCount - 1); // Update cart item count
  };

  useEffect(() => {
    // Add new cart item from URL query parameter
    const newItem = JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('cart_item')));
    if (newItem) {
      setCartItems((prevItems) => [...prevItems, newItem]);
      setCartItemCount((prevCount) => prevCount + 1);
    }
  }, [location.search]);

  return (
    <div className="cart-container">
      <h2>Cart, {cartItemCount} items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.OrderID} item={item} onRemoveItem={handleRemoveItem} />
          ))}
        </div>
      )}
      <div>
        <h3>Total: {cartItems.reduce((total, cart_item) => total + cart_item.Price, 0)}</h3>
        <a className="book-btn" href={`Checkout?cartItems=${encodeURIComponent(JSON.stringify(cartItems))}`}>Checkout</a>
      </div>
    </div>
  );
};

export default Cart;