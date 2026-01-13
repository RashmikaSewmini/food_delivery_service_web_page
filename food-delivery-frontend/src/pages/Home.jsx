import "../styles/Home.css";
import foodImg from "../assets/food.jpg";


function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <h1>
          <span className="highlight">Digital</span><br />
          <span className="home-letter">Food Delivery</span>
        </h1>
        <p className="paragraph">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
      <div className="home-image">
        <img src={foodImg} alt="Food" />
      </div>
    </div>
  );
}

export default Home;
