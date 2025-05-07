import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { clearCart, deleteItem } from "../../Global/slice";

const Cart = () => {
  const { cartArr } = useSelector((state) => state.Jcouture);
  const { qty } = useSelector((state) => state.Jcouture);
  console.log(cartArr);

  const dispatch = useDispatch()
  return (
    <div className="Cart">
      <div className="cartInner">
        <div className="cart-body" style={{ justifyContent: `${cartArr.length === 0 ? "center" : ""}` }}>
          {cartArr.length !== 0 ? (
            <div className="cartHeader">
              <button onClick={()=> dispatch(clearCart())}>Clear cart</button>
            </div>
          ) : null}
          <div className="cartSection" >
            {
              cartArr.length !==0 ?
              
              cartArr.map((e)=>(
                <div className="cartCard" key={e.id}>
                <div className="cart-left">
                  <div className="cartImage">
                    <img src={e.image} alt="" />
                  </div>
                  <div className="cartInfo">
                    <div className="itemName">
                      <h3>{e.title}</h3>

                      <p>
                        <strong>$</strong>{e.price}
                      </p>
                    </div>
                    <div className="itemquantity">
                      <div className="qty">
                        <span>-</span> {e.qty} <span>+</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deleteBtn">
                  <button onClick={()=>dispatch(deleteItem())}>Remove</button>
                </div>
              </div>
              )) : <div style={{display:"flex", alignItems:"center", flexDirection:"column", gap:"20px"}}>
                <MdOutlineRemoveShoppingCart size={30} />
                <p style={{fontSize:"25px"}}>Cart is empty</p>
              </div>
            }
          </div>
          <>
            {
              cartArr.length !== 0 ?
              <div className="checkOut">
            <div className="totalCart">
              <div className="holdd">
                <h2>Subtotal</h2>
                <div className="downn">
                  <p>3 items</p>
                  <p>
                    <strong>Total:</strong> $ 30.00
                  </p>
                </div>
              </div>
            </div>
            <div className="checkButton">
              <button>Checkout</button>
            </div>
          </div>: null
            }
          </>
        </div>
      </div>
    </div>
  );
};

export default Cart;
