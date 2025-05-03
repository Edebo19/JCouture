import React, { useEffect, useState } from "react";
import "../CSS/Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {

  const {id} = useParams()
  const [item, setItem] = useState({})

  const getItem=()=>{
    const url = `https://fakestoreapi.com/products/${id}`
    axios.get(url)
    .then((res)=>{
      const product = res.data
      console.log(product)
      setItem(product)
    }).catch((error)=>{
      console.log(error)
    })
  }

useEffect(()=>{
  getItem()
},[])
  return (
    <div className="DetailsPage">
      <div className="detailsInnerAll">
        <div className="detailsBody">
          <div className="holdAll">
            <div className="detailImage">
              <img src={item.image} alt="" />
            </div>
            <div className="detailInfo">
              <div>
                <h2>{item.title}</h2>
                <p>
                  <strong>Price: </strong>${item.price}
                </p>
                <div className="infodes">
                  <h2>Description:</h2>
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="below">
                <div className="Infoquantity">
                  <strong>Quantity: </strong>
                  <div className="qty">
                    <span>-</span> 0 <span>+</span>
                  </div>
                </div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
