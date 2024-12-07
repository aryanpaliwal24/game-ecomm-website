import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { Header } from "../Components/Header";
import Ps5 from "../Assests/items/ps5.jpeg";
import Ps1 from "../Assests/items/Ps1.jpg"
import cod from "../Assests/items/cod.jpg"
import Black_Head from "../Assests/items/black-headset.png"
import PubgT from "../Assests/items/pubg-tshirt.jpg"
import Assasin_T from "../Assests/items/assasins-tshirt.jpg"
import HeadSet from "../Assests/items/headphones.jpg"
import PUBG from "../Assests/items/PUBG.jpg"
import { Footer } from "../Components/Footer";

export const Product = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const products = [
    {
      id: 1,
      category: "Consoles",
      name: "PlayStation 5",
      price: 499.99,
      img: Ps5,
    },
    {
      id: 2,
      category: "Games",
      name: "Call of Duty",
      price: 59.99,
      img: cod
    },
    {
      id: 3,
      category: "Accessories",
      name: "Gaming Headset",
      price: 89.99,
      img: HeadSet
    },
    {
      id: 4,
      category: "Merchandise",
      name: "Gaming T-Shirt",
      price: 19.99,
      img: Assasin_T
    },
    {
      id: 5,
      category: "Consoles",
      name: "PlayStation",
      price: 49.99,
      img: Ps1
    },
    {
      id: 6,
      category: "Games",
      name: "PUBG PC",
      price: 39.99,
      img: PUBG
    },
    {
      id: 7,
      category: "Accessories",
      name: "Black Headset",
      price: 99.99,
      img: Black_Head
    },
    {
      id: 8,
      category: "Merchandise",
      name: "PUBG T-Shirt",
      price: 9.99,
      img: PubgT
    },
  ];

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    let updatedCart;
    if (existingProductIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getProductQuantity = (id) => {
    const product = cart.find((item) => item.id === id);
    return product ? product.quantity : 0;
  };

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="categories">
          {products.map((product) => (
            <div>
              <div key={product.id} className="product-card">
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-image"
                />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
              <div className="cart-actions">
                {getProductQuantity(product.id) === 0 ? (
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="quantity-controls">
                    <button
                      className="decrease-btn"
                      onClick={() => decreaseQuantity(product.id)}
                      disabled={getProductQuantity(product.id) <= 0}
                    >
                      -
                    </button>
                    <span>{getProductQuantity(product.id)}</span>
                    <button
                      className="increase-btn"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <Link to="/cart" className="view-cart-btn">
          Go to Cart
        </Link>
      </div>
      <Footer/>
    </>
  );
};
