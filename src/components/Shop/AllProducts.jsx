import React, { useEffect, useState } from "react";
import "../CSS/Shop.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AllProducts = () => {

  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  const getProducts =()=>{
    const url = "https://fakestoreapi.com/products"
    axios.get(url)
    .then((res)=>{
        console.log(res?.data)
        setProducts(res?.data)
    })
    .catch((error)=>{
        console.log(error)
    })
    
}
console.log(products)

useEffect(()=>{
    getProducts()
},[])

  return (
    <div className="AllProducts">
      <div className="innerAll">
        <div className="productsHeader">
          <h3>Shop Everything in One Place</h3>
          <p>
            From everyday staples to standout pieces, explore our entire product
            lineup in one view. Find your favorites, discover something new, and
            enjoy effortless shopping all the way through.
          </p>
        </div>
        <div className="productBody">
         {
          products.map((e)=>(
            <div className="card" key={e.id}>
            <div className="imageHolder" style={{backgroundImage:`url(${e.image})`}} onClick={()=> navigate(`/browse/details/${e.id}`)}>
              <div className="price-button">
                <div className="price">${e.price}</div>
                <button>Add to cart</button>
              </div>
            </div>
            <div className="titleHolder">
              <p>{e.title}</p>
            </div>
          </div>
          ))
         }
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
