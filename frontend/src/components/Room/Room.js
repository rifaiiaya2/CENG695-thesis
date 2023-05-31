import React, { useEffect, useState } from "react";
import axios from "axios";
import Loadingg from "../Loading/Loading";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  /// function to get All rooms ///
  const GetAllRooms = async () => {
    setLoading(true);
    await axios
      .get(`http://localhost:8000/api/rooms`)
      .then((res) => {
        if (res.status === 200) {
          setRooms(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    GetAllRooms();
  }, []);
  /// function to get All rooms ///
  return (
    <>
      <section className="room top" id="room">
        <div className="container">
          <div className="heading_top flex1">
            <div className="heading">
              <h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5>
              <h2>Rooms $ Suites</h2>
            </div>
          </div>

          {loading ? (
            <Loadingg />
          ) : (
            <div className="content grid">
              {rooms &&
                rooms.map((room, index) => {
                  return (
                    <div className="box">
                      <div className="img">
                        <img src={room.image} alt="image" />
                      </div>
                      <div className="text">
                        <h3> {room.title} </h3>
                        <p>
                          <span>$</span> {room.price} <span>/per night</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Room;
