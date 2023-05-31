import React from "react";
import g1 from '../../image/g1.jpg'
import g2 from '../../image/g2.jpg'
import g3 from '../../image/g3.jpg'
import g4 from '../../image/g4.jpg'
import g5 from '../../image/g5.jpg'
import g6 from '../../image/g6.jpg'
import g7 from '../../image/g7.jpg'
import g8 from '../../image/g8.jpg'

const Gallery = () => {
  return (
    <>
      <section className="gallary mtop " id="gallary">
        <div className="container">
          <div className="heading_top flex1">
            <div className="heading">
              <h5>WELCOME TO OUR PHOTO GALLERY</h5>
              <h2>Photo Gallery of Our Hotel</h2>
            </div>
            <div className="button">
              <button className="btn1">VIEW GALLERY</button>
            </div>
          </div>
          <div className="owl-carousel owl-theme">
            <div className="item">
              <img src={g1} alt="image" />
            </div>
            <div className="item">
              <img src={g2} alt="image" />
            </div>
            <div className="item">
              <img src={g3} alt="image" />
            </div>
            <div className="item">
              <img src={g4} alt="image" />
            </div>
            <div className="item">
              <img src={g5} alt="image" />
            </div>
            <div className="item">
              <img src={g6} alt="image" />
            </div>
            <div className="item">
              <img src={g7} alt="image" />
            </div>
            <div className="item">
              <img src={g8} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
