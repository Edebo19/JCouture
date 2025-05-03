import React from "react";
import "../CSS/Landing.css";
import { FaArrowRightLong } from "react-icons/fa6";
import 'animate.css';
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate()
  return (
    <div className="Hero">
      <div className="hold-hero">
        <div className="left">
        <h3>Welcome to JCouture - Your Ultimate Fashion Destination</h3>
        <p>Discover a curated collection of high-end fashion designed to bring out your unique style. Whether you're looking for the latest trends, timeless classics, or statement pieces, JCouture has everything you need to elevate your wardrobe.</p>

        <button onClick={()=> navigate("browse/shop")}>
            Shop now
                <FaArrowRightLong className="icon"/>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
