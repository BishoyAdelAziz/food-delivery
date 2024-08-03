import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";
const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className="Explore-Menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="exploremenu-txt">
        Choose from a diverse menu featuring a delecable arrray of dishes . Our
        mision is to provide a nice services
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "Active" : null}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
