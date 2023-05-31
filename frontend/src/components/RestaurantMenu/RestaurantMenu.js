import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../components/RestaurantMenu/RestaurantMenu.css";
import { Context } from "../../context/Context";

const RestaurantMenu = () => {
  const { category, items } = useContext(Context);
  const [itemsActive, setItemsActive] = useState([]);

  // active style selected category
  const btns = document.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      const corrent = document.getElementsByClassName("active");
      corrent[0].className = corrent[0].className.replace(" active");
      this.className += " active";
    });
  }

  const selectedCaategory = (category, i) => {
    setItemsActive(category.items);
  };

  useEffect(() => {
    console.log(items);
    setItemsActive(items);
  }, [items]);
  return (
    <>
      <section className="menu">
        <div className="menu-container">
          <div className="menu-head">
            <NavLink to={"/"}>
              <h2>Special Food Menu</h2>
            </NavLink>
            <p>
              Introducing our delectable menu, filled with an array of
              mouth-watering dishes sure to satisfy any palate. From savory
              entrees to decadent desserts, our restaurant offers a culinary
              experience that will leave you wanting more!
            </p>
          </div>

          <div className="menu-btns">
            <button
              type="button"
              className="menu-btn btn active"
              id="featured"
              onClick={() => setItemsActive(items)}
            >
              ALL
            </button>
            {category.map((category, i) => {
              return (
                <button
                  key={i}
                  type="button"
                  className="menu-btn btn "
                  id="featured"
                  onClick={() => selectedCaategory(category, i)}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          <div className="food-items">
            {itemsActive
              // .filter((i) => i.active === true)
              .map((item, i) => {
                return (
                  <div key={i} className="food-item today-special">
                    <div className="food-img">
                      <img src= {item.image} alt="food image" />
                    </div>
                    <div className="food-content">
                      <h2 className="food-name"> {item.title} </h2>
                      <div className="line"></div>
                      <p> {item.descirption}  </p>
                      <h3 className="food-price">{item.price}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantMenu;
