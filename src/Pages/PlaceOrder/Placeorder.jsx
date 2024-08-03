import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../Context/Storecontext";

const Placeorder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="palce-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="E-mail Adress" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State / Governate" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" className="Phone" />
      </div>
      <div className="place-order-right">
        <div className="Cart-Total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>subTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivry Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
            </div>
          </div>
          <button onClick={(e) => e.preventDefault()}>
            PROCEED TO Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
