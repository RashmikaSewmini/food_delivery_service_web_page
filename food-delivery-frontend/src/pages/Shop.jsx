import { useState, useContext} from "react";
import "../styles/Shop.css";
import Mango from "../assets/mango.jpg";
import Mango2 from "../assets/mango2.jpg";
import Mango3 from "../assets/mango3.jpg";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Shop() {

  const { user } = useContext(AuthContext);
  const [reviewCount, setReviewCount] = useState(1256);
  const [avgRating, setAvgRating] = useState(5.0);
  const navigate = useNavigate();


  const [quantity, setQuantity] = useState(2);

  /* IMAGE SLIDER STATE */
  const images = [Mango, Mango2, Mango3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const quantities = [0, 1, 2, 3, 4, 5];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleRating = async () => {
    if (!user) {
      alert("Please login to rate");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/ratings",
        {
          product: "Mango Smoothie",
          value: quantity
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );

      setReviewCount(res.data.totalUsers);
      setAvgRating(res.data.avgRating);

      alert("Thanks for rating");
    } catch (error) {
      console.error(error);
      alert("Rating failed");
    }
  };
  const goToMenu = () => {
    navigate("/menu");
  };



  return (
    <div className="food-container">
      {/* LEFT SIDE */}
      <div className="image-section">
              <br/>

        <h1>Today's Trending Food</h1>
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
        <h2>Mango Smoothie</h2>
        <h3 className="price">Rs.500</h3>

        <div className="rating">
          {"★★★★★"} <span>{avgRating} out of ({reviewCount}) Reviews</span>

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
          <button className="wishlist" onClick={handleRating}>❤️</button>
          <button className="cart" onClick={goToMenu}>🛒</button>
        </div>
      </div>
    </div>
  );
}
