import { useState } from "react";
import "../styles/Common.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import Mango from "../assets/mango.jpg";
import Mango2 from "../assets/mango2.jpg";
import Pizza from "../assets/pizza.jpg";


function Common() {
  const images = [Mango, Mango2, Pizza,Mango];
  const colors = ["linear-gradient(to bottom,white, #df45d7, #1a1a1a)","linear-gradient(to bottom,white, #0a721dff, #1a1a1a)", "linear-gradient(to bottom,white, #914108ff, #1a1a1a)", "linear-gradient(to bottom,white, #947808ff, #1a1a1a)"];
  const titleColors = ["#b00122ff", "#0aff72", "#eca979ff", "#7b6304ff"];
  const arrowColors = ["rgba(235, 50, 201, 0.9)", "rgba(10, 114, 36, 0.9)", "rgba(145, 65, 8, 0.9)", "rgba(148, 120, 8, 0.9)"];
  const curveColors = [
    "linear-gradient(to bottom,#ee95cd,#ee95cd, black)",
    "linear-gradient(to bottom,#45ffcd,#45ffcd, black)",
    "linear-gradient(to bottom,#ff9141,#ff9141, black)",
    "linear-gradient(to bottom,#f5f521,#f5f521, black)"
  ];
  const angles = [270, 300, 0, 30]; // first and fourth quadrant angles (degrees)


  const [index, setIndex] = useState(0);
  const [rotate, setRotate] = useState(false);
  const [bgColor, setBgColor] = useState(colors[0]);
  const [titleColor, setTitleColor] = useState(titleColors[0]);
  const [arrowColor, setArrowColor] = useState(arrowColors[0]);
  const [curveColor, setCurveColor] = useState(curveColors[0]);
  const [orbitOrder, setOrbitOrder] = useState([0, 1, 2, 3]); // indexes of small images



  const next = () => {
  setRotate(true);
  setIndex((prev) => {
    const newIndex = (prev + 1) % images.length;
    setBgColor(colors[newIndex]); // tie color to image index
    setTitleColor(titleColors[newIndex]);
    setArrowColor(arrowColors[newIndex]);
    setCurveColor(curveColors[newIndex]);
    setOrbitOrder((prev) => [...prev.slice(1), prev[0]]); // rotate left
    return newIndex;
  });
  setTimeout(() => setRotate(false), 600);
};

const prev = () => {
  setRotate(true);
  setIndex((prev) => {
    const newIndex = prev === 0 ? images.length - 1 : prev - 1;
    setBgColor(colors[newIndex]); // tie color to image index
    setTitleColor(titleColors[newIndex]);
    setArrowColor(arrowColors[newIndex]);
    setCurveColor(curveColors[newIndex]);
    setOrbitOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]); // rotate right
    return newIndex;
  });
  setTimeout(() => setRotate(false), 600);
};


  return (
    
    <div className="hero-container"  style={{ background: bgColor }}>

      <div className="top-right-curve" style={{ background: curveColor }}></div>
      {/* LEFT TEXT */}
      <div className="hero-text">
        <h1 className="title" style={{ color: titleColor }}>Delicious</h1>
        <h2>Quench the Hunger</h2>

        <p>
          The lorem ipsum gets its name from the Latin phrase Neque porro
          quisquam est qui dolorem ipsum quia dolor sit amet.
        </p>
      </div>

      {/* RIGHT CIRCULAR SLIDER */}
      {/* IMAGE SECTION */}
      <div className="hero-images">

        <div className="arrow-wrapper top">
          <button className="arrow" style={{ background: arrowColor }} onClick={prev}>
            <AiOutlineArrowDown size={60} />
          </button>
        </div>
        
        <div className="image-orbit">
          {/* MAIN IMAGE */}
          <img
            src={images[index]}
            className="main-image"
            alt="main food"
          />

          {/* SMALL ORBIT IMAGES */}
          {images.map((img, i) => {
            let angle;
            if (i % 2 === 0) {
              // top-left quadrant (270° to 360°)
              angle = 270 + (90 / (images.length / 2)) * (i / 2)+120;
            } else {
              // top-right quadrant (0° to 90°)
              angle = (90 / (images.length / 2)) * Math.floor(i / 2)+120;
            }
            return (
              <img
                key={i}
                src={img}
                alt="small"
                className={`orbit-image ${rotate ? "spin" : ""}`}
                style={{
                  transform: `
                    rotate(-${angle}deg)
                    translate(170px)
                    rotate(${angle}deg)
                  `,
                  animation: rotate ? `rotate${i % 2 === 0 ? "Fourth" : "First"} 0.3s ease forwards` : "none"
                }}
              />
            );
          })}
        </div>
        <div className="arrow-wrapper bottom">
          <button className="arrow" style={{ background: arrowColor }} onClick={next}>
            <AiOutlineArrowDown size={60} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Common;

