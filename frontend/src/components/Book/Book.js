import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Book = () => {
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [typeofchl, setTypeofchl] = useState("");
  const [children, setChildren] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const data = {
    dateIn: dateIn,
    dateOut: dateOut,
    typeofchl: typeofchl,
    children: children,
    fullname: fullname,
    email: email,
    phonenumber: phonenumber,
  };

  const HandeladdBook = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/book", data)
      .then((res) => {
        setDateIn("");
        setDateOut("");
        setTypeofchl("");
        setChildren("");
        setFullname("");
        setEmail("");
        setPhonenumber("");

        Swal.fire({
          title: "Your Reservation added Successfully",
          icon: "success",
          timer: 4000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          width:'30%'
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form className="book" onSubmit={HandeladdBook}>
        <div className="container flex">
          <div className="input grid">
            <div className="box">
              <label>Check-In:</label>
              <input
                type="date"
                placeholder="Check-in-Date"
                value={dateIn}
                onChange={(e) => setDateIn(e.target.value)}
              />
            </div>
            <div className="box">
              <label>Check-Out:</label>
              <input
                type="date"
                placeholder="Check-out-Date"
                value={dateOut}
                onChange={(e) => setDateOut(e.target.value)}
              />
            </div>
            <div className="box">
              <label>Type OF Rooms:</label> <br />
              <input
                type="text"
                value={typeofchl}
                onChange={(e) => setTypeofchl(e.target.value)}
              />
            </div>

            <div className="box">
              <label>Children:</label> <br />
              <input
                type="number"
                placeholder={0}
                value={children}
                onChange={(e) => setChildren(e.target.value)}
              />
            </div>
            <div className="box">
              <label> Full Name:</label> <br />
              <input
                type="text"
                placeholder={"Full Name"}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="box">
              <label>Email:</label> <br />
              <input
                type="text"
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="box">
              <label>Phone Number:</label> <br />
              <input
                type="text"
                placeholder={"Phone Number"}
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <div className="btnbox">
              <button className="btn12" type="submit" defaultValue="submit">
                submit your reservation
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Book;
