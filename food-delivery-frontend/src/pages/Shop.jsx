import { useState } from "react";
import "../styles/Shop.css";
import Mango from "../assets/mango.jpg";
import Mango2 from "../assets/mango2.jpg";
import Mango3 from "../assets/mango3.jpg";

export default function Shop() {
  const [quantity, setQuantity] = useState(2);

  /* IMAGE SLIDER STATE */
  const images = [Mango, Mango2, Mango];
  const [currentIndex, setCurrentIndex] = useState(0);

  const quantities = [0.5, 1, 2, 5, 10, 20];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="food-container">
      {/* LEFT SIDE */}
      <div className="image-section">
              <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <h1>Today’s Trending Food</h1>
        <p className="subtitle">People loves it most the past week...</p>

        {/* MAIN IMAGE */}
        <div className="image-box">
          <button className="arrow left" onClick={prevImage}>❮</button>

          <img
            src={images[currentIndex]}
            alt="Mango Smoothie"
          />

          <button className="arrow right" onClick={nextImage}>❯</button>
        </div>

        {/* THUMBNAILS */}
        <div className="thumbnail-row">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumb"
              className={currentIndex === index ? "active-thumb" : ""}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="details-section">
              <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
            <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <h2>Mango Smoothie</h2>
        <h3 className="price">Rs.500</h3>

        <div className="rating">
          {"★★★★★"} <span>5.0 out of (1256) <a href="#">Reviews</a></span>
        </div>

        <h4>Select Quantity</h4>

        <div className="quantity-box">
          {quantities.map((q) => (
            <button
              key={q}
              className={quantity === q ? "active" : ""}
              onClick={() => setQuantity(q)}
            >
              {q}
            </button>
          ))}
        </div>

        <div className="action-buttons">
          <button className="wishlist">❤️</button>
          <button className="cart">🛒</button>
        </div>
      </div>
    </div>
  );
}
