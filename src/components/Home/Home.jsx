import React, { useEffect, useState } from "react";
import face from "../../assets/skin.mp4";
import plane from "../../assets/plane.png";
import phone from "../../assets/mobile.png";
import lock from "../../assets/Lock.png";
import mail from "../../assets/Email.png";
import FeatureData from "./FeatureData"; // Import the FeatureData array

import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="video">
        <video controls autoPlay>
          <source src={face} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="details">
        <div className="shipping">
          <img src={plane} alt="plane" />
          <div className="detail">
            <h3>Fast shipping</h3>
            <p>We strive to ship your order on time</p>
          </div>
        </div>
        <div className="shipping">
          <img src={phone} alt="phone" />
          <div className="detail">
            <h3>Mobile Friendly</h3>
            <p>Get easy access to your favorite products</p>
          </div>
        </div>
        <div className="shipping">
          <img src={lock} alt="lock" />
          <div className="detail">
            <h3>Sign Up and Sign In</h3>
            <p>Track, View, and Reorder products quickly</p>
          </div>
        </div>
        <div className="shipping">
          <img src={mail} alt="mail" />
          <div className="detail">
            <h3>We Support</h3>
            <p>We are available online 24/7</p>
          </div>
        </div>
      </div>

      <div className="slider">
        <img src={`./img${currentSlide + 1}.png`} alt="img" className="slide" />
      </div>

      <div className="featured">
        <h3>Featured Products</h3>
        <p>
          All ingredients are of high quality to cater for many skin needs and
          desires. In addition,we are also a well known supplier of Botanical
          Extracts, Butters,Candle Waxes, Clays,Mineral Salts,Muds and Soap &
          Cosmetic Bases.
        </p>
        <button className="shopNow">shop now</button>
        <div className="featured-products">
          {FeatureData.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.image} alt="product" />
              <h4>{product.title}</h4>
              <p>{product.price}</p>
              <img src={product.star} alt="star" />
            </div>
          ))}
        </div>
        <button className="seemore">See More</button>
      </div>
      <footer>
        <div className="information">
          <h4>Information</h4>
          <p>About Us</p>
          <p>How to shop</p>
          <p>Contact US</p>
          <p>Blog</p>
          <p>FAQ</p>
        </div>
        <div className="information">
          <h4>Customer Services</h4>
          <p>Payment Method</p>
          <p>Shipping</p>
          <p>Terms and Condition</p>
          <p>Privacy and Policy</p>
          <p>Live Chat</p>
        </div>
        <div className="information">
          <h4>My Account</h4>
          <p>Sign in</p>
          <p>View Cart</p>
          <p>Checkout</p>
          <p>My Wishlist</p>
          <p>Track your Order</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
