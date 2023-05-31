import React from "react";
import logo from "../../image/logo.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <header className="header" id="navigation-menu">
        <div className="container">
          <nav>
            <NavLink className="logo" to={"/"}>
              <img src={logo} alt="image" />
            </NavLink>
            <ul className="nav-menu">
              <li>
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              {/* <li>
                <a href="#/" className="nav-link">
                  Hotel-2
                </a>
              </li> */}
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#room" className="nav-link">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#restaurant" className="nav-link">
                  Restaurant
                </a>
              </li>
              {/* <li>
                <a href="#gallery" className="nav-link">
                  Gallery
                </a>
              </li> */}
              <li>
                {/* <a href="#contact" className="nav-link">
                  Contact
                </a> */}

                <NavLink className="nav-link" to={"/contactus"}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="hambuger">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
