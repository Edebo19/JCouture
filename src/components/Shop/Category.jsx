import React, { useEffect, useState } from "react";
import "../CSS/Shop.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css"
import Aos from "aos";

const Category = () => {
  const navigate = useNavigate("")

  const [category, setCategory] = useState([])

  const getCategories=()=>{
    const url = "https://fakestoreapi.com/products"
    axios.get(url)
    .then((res)=>{
      const products = res?.data
      const filteredCategory = products.map((e, i, a)=> a.findIndex((item)=> item.category === e.category) === i ? e : null)
      .filter((items)=> items !== null)
      console.log(filteredCategory)
      setCategory(filteredCategory)
    }).catch((error)=>{
      console.log(error)
    })
  }

useEffect(()=>{
  getCategories()
},[])

useEffect(()=>{
  Aos.init();
},[])

  return (
    <div className="Category">
      <div className="innerAll">
        <div className="productsHeader">
          <h3>Browse Our Categories</h3>
          <p>
          Find what you need faster by browsing through our curated categories. Whether you're shopping for fashion, accessories, or everyday essentials — we've organized it all for easy discovery.
          </p>
        </div>
        <div className="productBody">
          {
            category.map((e)=>(
              <div className="card"
              data-aos="fade-up"
              data-aos-duration="3000"
              key={e.id}>
          <div className="imageHolder" onClick={()=> navigate(`/browse/specified/${e.category}`)} style={{backgroundImage:`url(${e.image})`}}>
            </div>
            <div className="titleHolder">
              <p>{e.category.toUpperCase()}</p>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Category;
