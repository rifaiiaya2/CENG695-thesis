import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./components/Contact/Contact";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import AllRooms from "./components/AllRooms/AllRooms";
import { ContextBody } from "./context/Context";

function App() {
  return (
    <>
      <ContextBody>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/restaurant-menu" element={<RestaurantMenu />} />
            <Route index path="/AllRooms" element={<AllRooms />} />
            <Route index path="/contactus" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ContextBody>
    </>
  );
}

export default App;
