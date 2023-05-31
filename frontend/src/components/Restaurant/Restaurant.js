import React from "react";
import re from "../../image/re.jpg";
import { NavLink } from "react-router-dom";

const Restaurant = () => {
  return (
    <>
      <section className="restaurant top" id="restaurant">
        <div className="container flex">
          <div className="left">
            <img src={re} alt="image" />
          </div>
          <div className="right">
            <div className="text">
              <h2>Our Restaurant</h2>
              <p>
                "Step into our Blue Joy hotel restaurant menu and savor a
                culinary journey of flavors, crafted with the freshest
                ingredients and served with warm hospitality."
              </p>
            </div>
            <div className="accordionWrapper">
              <div className="accordionItem open">
                <h2 className="accordionIHeading">
                  <NavLink to={"/restaurant-menu"}>Breakfast </NavLink>{" "}
                </h2>
                <div>
                  <p>
                    "Experience the flavors of Lebanon with our authentic
                    Lebanese breakfast menu, showcasing traditional dishes made
                    with fresh and flavorful ingredients. Savor the taste of the
                    Middle East and start your day off right."
                  </p>
                </div>
              </div>
              <div className="accordionItem close">
                <h2 className="accordionIHeading">
                  <NavLink to={"/restaurant-menu"}>Lunch </NavLink>
                </h2>
                <div>
                  <p>
                    "Indulge in a flavorful Lebanese lunch experience, featuring
                    a delectable selection of hot and cold mezzes, savory
                    entrees, and refreshing salads, perfect for any palate."
                  </p>
                </div>
              </div>
              <div className="accordionItem close">
                <h2 className="accordionIHeading">
                  <NavLink to={"/restaurant-menu"}>Dinner </NavLink>{" "}
                </h2>
                <div>
                  <p>
                    "Embark on a culinary journey of flavor and indulgence with
                    our dinner menu, featuring a delectable selection of dishes
                    expertly crafted to tantalize your taste buds and leave you
                    feeling satisfied."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
