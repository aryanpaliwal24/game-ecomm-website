import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { Header } from "../Components/Header";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, [])

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price*item.quantity, 0).toFixed(2);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => 
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => 
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <Header />
      <div className="items-container">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.img}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-btns">
                  <h3>{item.name}</h3>
                  <p>${item.price} x {item.quantity}</p>
                <div className="cart-item-actions">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-summary">
          <h3>Total: ${calculateTotal()}</h3>
          <Link to="/product" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
};
