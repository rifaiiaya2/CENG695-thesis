import React from "react";

const Amenities = () => {
  return (
    <>
      <section className="wrapper top">
        <div className="container">
          <div className="text">
            <h2>Our Amenities</h2>
            <p>
              The Blue Jay Hotel offers exceptional amenities to enhance guests'
              stay with us. Our rooms and suites include comfortable bedding,
              flat-screen TVs, Wi-Fi. Our dining options cater to all tastes,
              while guests can relax by the pool. Our spa and wellness center
              offers treatments and massages to help guests unwind.
            </p>
            <div className="content">
              <div className="box flex">
                <i className="fas fa-swimming-pool" />
                <span>Swimming pool</span>
              </div>
              <div className="box flex">
                <i className="fas fa-dumbbell" />
                <span>Gym &amp; yogo</span>
              </div>
              <div className="box flex">
                <i className="fas fa-spa" />
                <span>Spa &amp; massage</span>
              </div>
              <div className="box flex">
                <i className="fas fa-ship" />
                <span>Boat Tours</span>
              </div>
              <div className="box flex">
                <i className="fas fa-swimmer" />
                <span>Surfing Lessons</span>
              </div>
              <div className="box flex">
                <i className="fas fa-microphone" />
                <span>Conference room</span>
              </div>
              <div className="box flex">
                <i className="fas fa-water" />
                <span>Diving &amp; smorking</span>
              </div>
              <div className="box flex">
                <i className="fas fa-umbrella-beach" />
                <span>Private Beach</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Amenities;
