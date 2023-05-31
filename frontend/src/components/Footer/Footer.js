import React from "react";
import hotell from "../../image/hotell.png";
import visa from "../../image/visa.png";
import card from "../../image/mastercard.png";
import paypal from "../../image/paypal.png";
import amex from "../../image/amex.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid top">
          <div className="box">
            <img className="fimg" src={hotell} />
            <p>
              They are the accepted payment method in the hotel because they are
              widely recognized and trusted by guests, and allow for efficient
              processing of payments for room charges, dining, and other hotel
              services.
            </p>

            <div className="payment grid">
              <img src={visa} />
              <img src={card} />
              <img src={paypal} />
              <img src={amex} />
            </div>
          </div>
          <div className="box">
            <h3>Recent News</h3>
            <ul>
              <li>Our special Boat Tour Is Just for You</li>
              <li>Chill and Escape in Our Natural Shelters</li>
              <li>September in Blue Jay Hotel </li>
              <li>Live Music Concerts at Jay Blue</li>
            </ul>
          </div>
          <div className="box">
            <h3>For Customers</h3>
            <ul>
              <li>About Blue Jay</li>
              <li>Customer Care/Help</li>
              <li>Corporate Accounts</li>
              <li>Financial Information</li>
              <li>Terms &amp; Conditions</li>
            </ul>
          </div>
          <div className="box">
            <h3>Contact Us</h3>
            <ul>
              <li>Main road, Aazour 1234</li>
              <li>
                <i className="far fa-envelope" />
                bluejayhotel@gmail.com
              </li>
              <li>
                <i className="far fa-phone-alt" />
                05 456 7898
              </li>
              <li>
                <i className="far fa-phone-alt" />
                05 898 4567
              </li>
              <li>
                <i className="far fa-comments" />
                24/ 7 Customer Services
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
