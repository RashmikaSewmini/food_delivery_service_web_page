import React, { useState } from "react";
import "../styles/Menu.css"; // create separate CSS for styling
import { FaMinus, FaPlus } from "react-icons/fa";
import cap from "../assets/cap.jpg";
import Bacon from "../assets/bacon.jpg";
import Hopper from "../assets/hopper.jpg";
import Seafood from "../assets/seafood.jpg";
import Pizza from "../assets/pizza.jpg";
import cake from "../assets/chesse.jpg";
import pancake from "../assets/berry.jpg";
import mango from "../assets/mango.jpg";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Served with lorem ipsum",
    price: 1200,
    discount: 25,
    img: cap,
  },
  {
    id: 2,
    name: "Bacon, Egg and Sandwich",
    description: "Served with lorem ipsum Dolor sit amet",
    price: 4999,
    discount: 25,
    img: Bacon,
  },
  {
    id: 3,
    name: "Hopper",
    description: "Served with lorem ipsum",
    price: 100,
    discount: 25,
    img: Hopper,
  },
  {
    id: 4,
    name: "Seafood Soup",
    description: "Served with lorem ipsum Dolor sit amet",
    price: 4999,
    discount: 25,
    img: Seafood,
  },
  {
    id: 5,
    name: "Mango Smoothie",
    description: "Served with lorem ipsum",
    price: 1200,
    discount: 25,
    img: mango,
  },
  {
    id: 6,
    name: "Strawberry Pancake",
    description: "Served with lorem ipsum Dolor sit amet",
    price: 4999,
    discount: 25,
    img: pancake,
  },
  {
    id: 7,
    name: "cheese cake",
    description: "Served with lorem ipsum",
    price: 1200,
    discount: 25,
    img: cake,
  },
  {
    id: 9,
    name: "Chiken Pizza",
    description: "Served with lorem ipsum Dolor sit amet",
    price: 4999,
    discount: 25,
    img: Pizza,
  },

];

function Menu() {
  const [cart, setCart] = useState(
    menuItems.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleAdd = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };

  const handleRemove = (id) => {
    setCart({ ...cart, [id]: Math.max(cart[id] - 1, 0) });
  };

  const handlePlaceOrder = async () => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const orderItems = menuItems
      .filter((item) => cart[item.id] > 0)
      .map((item) => ({
        name: item.name,
        price: item.price,
        quantity: cart[item.id],
      }));

    if (orderItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/orders",
        {
          items: orderItems,
          total: orderItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Order placed successfully");
      } catch (error) {
        alert("Order failed");
      }
    };

  return (
    <div className="menu-page">
        <br />
        <br />
        <br />
      <h1>Popular Items</h1>
      <p className="subtitle">Most Ordered Items</p>
      <div className="menu-grid">
        {menuItems.map((item) => {
          const discountedPrice = item.price * (1 - item.discount / 100);
          return (
            <div key={item.id} className="menu-card">
              <div className="discount-badge">{item.discount}% OFF</div>
              <img src={item.img} alt={item.name} className="food-img" />
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
              {item.discount ? (
                <p className="price">
                  <span className="old-price">RS.{item.price}</span>{" "}
                  <span className="discounted-price">RS.{discountedPrice}</span>
                </p>
              ) : (
                <p className="price">RS.{item.price}</p>
              )}
              <div className="cart-actions">
                {cart[item.id] === 0 ? (
                  <button className="add-btn" onClick={() => handleAdd(item.id)}>
                    + ADD
                  </button>
                ) : (
                  <div className="quantity-control">
                    <button onClick={() => handleRemove(item.id)}>
                      <FaMinus />
                    </button>
                    <span>{cart[item.id]}</span>
                    <button onClick={() => handleAdd(item.id)}>
                      <FaPlus />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {menuItems.map((item) =>
            cart[item.id] > 0 ? (
              <li key={item.id}>
                {item.name} x {cart[item.id]}
              </li>
            ) : null
          )}
        </ul>

        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>

    </div>
  );
}

export default Menu;
