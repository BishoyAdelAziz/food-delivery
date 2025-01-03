import { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
const App = () => {
  const Home = lazy(() => import(`./Pages/Home/Home`));
  const Cart = lazy(() => import("./Pages/Cart/Cart"));
  const PlaceOrder = lazy(() => import("./Pages/PlaceOrder/Placeorder"));
  const User = lazy(() => import("./Components/FormModals/UserForm"));
  const Login = lazy(() =>
    import("./Components/FormModals/LoginPop/LoginPopop")
  );
  const Signup = lazy(() => import("./Components/FormModals/SignupPop/Signup"));
  return (
    <>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading..</div>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/user" element={<User />}>
              <Route path="/user/Login" element={<Login />} />
              <Route path="/user/Signup" element={<Signup />} />
            </Route>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default App;
