import React from "react";
import a1 from "../../image/a1.jpg";
import a2 from "../../image/a2.jpg";
const About = () => {
  return (
    <>
      <section className="about top" id="about">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src={a1} alt="image" className="image1" />
              <img src={a2} alt="image" className="image2" />
            </div>
          </div>
          <div className="right">
            <div className="heading">
              <h5>RAISING COMFOMRT TO THE HIGHEST LEVEL</h5>
              <h2>Welcome to Blue Jay Hotel Resort</h2>
              <p>
                Welcome to the Blue Jay Hotel Resort, where luxury meets
                tranquility. Our resort is nestled in the heart of the
                breathtaking Lebanese mountains, offering an escape from the
                hustle and bustle of everyday life. With world-class amenities
                and unparalleled service, we cater to the needs of discerning
                travelers seeking a rejuvenating experience. Our spacious rooms
                and suites are designed to provide maximum comfort, and our
                restaurants serve a range of gourmet cuisine to tantalize your
                taste buds. Whether you're seeking relaxation, adventure or
                simply a change of pace, we offer something for everyone.
              </p>
              <p>
                Our hotel is a haven of tranquility nestled in the heart of the
                city, offering an escape from the hustle and bustle of everyday
                life. From the moment you step into our elegant lobby, you'll be
                greeted by our friendly staff who will ensure that your stay
                with us is nothing short of exceptional. Come and experience the
                ultimate in luxury and relaxation at the Blue Jay Hotel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
