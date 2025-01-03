import { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Exploremenu from "../../Components/ExploreMenu/Exploremenu";
import Fooddisplay from "../../Components/FoodDisplay/Fooddisplay";
import Appdownload from "../../Components/Appdownload/Appdownload";
import { Outlet } from "react-router-dom";
function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Outlet />
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category} />
      <Appdownload />
    </div>
  );
}

export default Home;
