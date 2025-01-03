import { useContext } from "react";
import { StoreContext } from "../../Context/Storecontext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const Navigate = useNavigate();
  return (
    <div className="Cart">
      <div className="Cart-Items">
        <div className="Cart-Items-Title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={index}>
              <div className="Cart-Items-Title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>$ {item.price * cartItems[item._id]}</p>
                <p className="Cross" onClick={() => removeFromCart(item._id)}>
                  x
                </p>
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="Cart-Buttom">
        <div className="Cart-Total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>subTotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivry Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={() => Navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>if you have a promo Code Enter it here</p>
            <div className="Cart-Promo-Code-Input">
              <input type="text" placeholder="Promo Code .." />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
