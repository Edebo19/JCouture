import React, { useEffect, useState } from "react";
import "../CSS/Header.css";
import { MdClose, MdHome, MdMenu, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaRegUserCircle, FaShoppingBasket, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TbCategory2 } from "react-icons/tb";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    }; 
  }, []);

  const navigate = useNavigate()
  return (
    <div className={`Header ${scrolled ? "Hscrolled" : ""}`}>
      <div className="HeaderWrapper">
        <div className="logo">
          <i>JCouture</i>
        </div>
        <nav>
          <ul>
            <NavLink to="/" style={{ textDecoration: "none" }} className={({isActive})=> [isActive ? "active" : "notActive"]} >Home</NavLink>
            <NavLink to="/browse/shop" style={{ textDecoration: "none" }} className={({isActive})=> [isActive ? "active" : "notActive"]}>Shop</NavLink>
            <NavLink to="/browse/category" style={{ textDecoration: "none" }} className={({isActive})=> [isActive ? "active" : "notActive"]}>Categories</NavLink>
          </ul>
        </nav>
        <div className="cart-user-area">
          <MdOutlineShoppingCartCheckout cursor="pointer" size={30} />
          <FaRegUserCircle cursor="pointer" size={30} />
        </div>
        <div className="menu" onClick={()=>setOpened(true)}>
          <MdMenu size={25}/>
        </div>
      </div>
      {
        opened === true ?
        <div className="dropdown">
        <div className="maindrop">
          <div className="close">
            <MdClose onClick={()=>setOpened(false)} size={28} cursor="pointer"/>
          </div>
          <div className="nav">
            <ul>
              <li onClick={()=>{ navigate("/"), setOpened(false)}}><MdHome /> Home</li>
              <li onClick={()=> {navigate("/browse/shop"), setOpened(false)}}><FaShoppingBasket /> Shop</li>
              <li onClick={()=>{ navigate("/browse/category"), setOpened(false)}}><TbCategory2 /> Categories</li>
              <li><MdOutlineShoppingCartCheckout /> Cart</li>
              <li><FaUser /> User</li>
            </ul>
          </div>
        </div>
      </div> : null
      }
    </div>
  );
};

export default Header;
