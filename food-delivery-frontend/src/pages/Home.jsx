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
          Order your favorite meals from top restaurants and get them delivered
        straight to your doorstep in minutes. Our digital food delivery app
        makes it easy to browse menus, track your orders in real time, and enjoy
        fast, reliable service whenever hunger strikes.
        </p>
      </div>
      <div className="home-image">
        <img src={foodImg} alt="Food" />
      </div>
    </div>
  );
}

export default Home;
