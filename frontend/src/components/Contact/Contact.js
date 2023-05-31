import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import "../../components/Contact/Contact.css";
const Contact = () => {
  //// satart to add a category ///
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [descirption, setDescirption] = useState("");

  const data = {
    fullname: fullname,
    email: email,
    descirption: descirption,
  };
  const Handeladdmessage = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/contact", data)
      .then((res) => {
        setFullname("");
        setEmail("");
        setDescirption("");
        Swal.fire({
          title: " added Successfully",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
        // getAllCategories();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ////  end to add a category ///

  return (
    <>
      <section className="contactt">
        <div className="content">
          <NavLink to={"/"}>
            <h2>Contact Us</h2>
          </NavLink>
          <p>
            Please feel free to contact us with any questions, comments, or
            concerns using the form below.
          </p>
        </div>
        <div className="containert">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Main road,
                  <br />
                  Aazour
                  <br />
                  1234
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p> 05 456 7898</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>bluejayhotel@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form onSubmit={Handeladdmessage}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <br></br>
                <input
                  type="text"
                  required="required"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />

                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Eamil</span>
              </div>
              <div className="inputBox">
                <textarea
                  name
                  id
                  required="required"
                  defaultValue={""}
                  value={descirption}
                  onChange={(e) => setDescirption(e.target.value)}
                />
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" defaultValue="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <div>
        <section className="map_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="map_inner">
                  <h4>Find Us on Google Map</h4>
                  <p>
                    Our map section provides an interactive view of our
                    location, making it easy to find your way to us. You can
                    zoom in, zoom out, and even get directions right from the
                    map.
                  </p>
                  <div className="map_bind">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
                      width="100%"
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                      aria-hidden="false"
                      tabIndex={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
