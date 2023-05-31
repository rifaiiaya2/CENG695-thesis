import React from "react";
import About from "../../components/About/About";
import Amenities from "../../components/Amenities/Amenities";
import Book from "../../components/Book/Book";
import Description from "../../components/Description/Description";
import Nav from "../../components/NavBar/Nav";
import Restaurant from "../../components/Restaurant/Restaurant";
import Footer from "../../components/Footer/Footer";
import Room from "../../components/Room/Room";
import home1 from '../../image/home1.jpg'
import home2 from '../../image/home2.jpg'
import home3 from '../../image/home3.jpg'
import home4 from '../../image/home4.jpg'
function Home2() {
  return (
    <>
    <Nav/>  

      <section className="home" id="home">
    <div className="head_container">
      <div className="box">
        <div className="text">
          <h1>Hello.Salut.Hola</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className="image">
        <img src={home1} className="slide" />
      </div>
      <div className="image_item">
        <img src={home1} alt='image' className="slide active"/>
        <img src={home2} alt='image' className="slide" />
        <img src={home3} alt='image' className="slide"  />
        <img src={home4} alt='image' className="slide" />
      </div>
    </div>
      </section>

    <Book/>

    <About/>

    <Amenities/>

    <Room/>

    <Description/>

    <Restaurant/>

    <Footer/>

    </>
  );
}

export default Home2;
