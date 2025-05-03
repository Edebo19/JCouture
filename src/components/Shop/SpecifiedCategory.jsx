import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "aos/dist/aos.css"
import Aos from "aos";

const SpecifiedCategory = () => {
  const { catId } = useParams();
  const [item, setItem] = useState([]);
  const getProducts = () => {
    const url = "https://fakestoreapi.com/products";
    axios
      .get(url)
      .then((res) => {
        const products = res.data;
        const newArr = products.filter((e) => e.category === catId);
        setItem(newArr);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(()=>{
    Aos.init();
  },[])
  

  const navigate = useNavigate()

  return (
    <div className="AllProducts">
      <div className="innerAll">
        <div className="productsHeader">
          <h3>Shop this specified category</h3>
          <p>
            From everyday staples to standout pieces, explore our entire product
            lineup in one view. Find your favorites, discover something new, and
            enjoy effortless shopping all the way through.
          </p>
        </div>
        <div className="productBody">
          {item.map((e) => (
            <div className="card"
            data-aos="fade-up"
            data-aos-duration="3000"
            key={e.id}>
              <div
                className="imageHolder"
                style={{ backgroundImage: `url(${e.image})` }}
                onClick={() => navigate(`/browse/details/${e.id}`)}
              >
                <div className="price-button">
                  <div className="price">${e.price}</div>
                  <button>Add to cart</button>
                </div>
              </div>
              <div className="titleHolder">
                <p>{e.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecifiedCategory;
