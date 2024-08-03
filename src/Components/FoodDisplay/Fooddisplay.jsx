import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/Storecontext";
import { food_list } from "../../assets/assets";
import Fooditem from "../FoodItem/Fooditem";
const Fooddisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);
  return (
    <div className="Food-display" id="Food-Display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
