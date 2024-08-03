import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Placeorder from "./Pages/PlaceOrder/Placeorder";
import Footer from "./Components/Footer/Footer";
import LoginPopop from "./Components/LoginPopop/LoginPopop";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? (
        <LoginPopop setShowLogin={setShowLogin} showLogin={showLogin} />
      ) : (
        <></>
      )}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} showLogin={showLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
