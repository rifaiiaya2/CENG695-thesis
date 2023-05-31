import React from "react";
import c from "../../image/c.jpg";
import c2 from "../../image/c2.jpg";
const Description = () => {
  return (
    <>
      <section className="wrapper wrapper2 top">
        <div className="container">
          <div className="text">
            <div className="heading">
              <h5>AT THE HEART OF COMMUNICATION</h5>
              <h2>People Say</h2>
            </div>
            <div className="para">
              <p>
                Everything is perfect and clean and room very clean and nice
                view, the staff very friendly location is vey good and amazing .
              </p>
              <div className="box flex">
                <div className="img">
                  <img src={c} alt="image" />
                </div>
                <div className="name">
                  <h5>KATIA PALMER</h5>
                </div>
              </div>
            </div>
            <div className="para">
              <p>
                Breakfast was excellent. Staff were so friendly. All services
                are available ..valet . Taxis... pools. Spa...all is excellent
                Housekeeping is excellent and attentive. The process of fheck in
                and check out were so smooth and fast. Excellent customer
                services.
              </p>
              {/* <div className="box flex">
                <div className="img">
                  <img src={c2} alt="image" />
                </div>
                <div className="name">
                  <h5>CELENA KARAM</h5>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
