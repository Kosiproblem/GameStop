import InfoCard from "../components/infoCard";
import { Navbar } from "../components/navbar";
import { Console } from "../components/console";
import { Pros } from "../components/pros";
import { Store } from "../components/store";
import { Deals } from "../components/deals";
import { Footer } from "../components/footer";
import { useState } from "react";

export const Home = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 10) {
      setColorChange("bg-purple-600");
    } else {
      setColorChange("bg-transparent");
    }
  };
  window.addEventListener("scroll", changeNavColor);

  return (
    <>
      <div
        className={`{navbar fixed w-screen z-10 bg-transparent ${colorChange}`}
      >
        <Navbar />
      </div>
      <div className="top-info">
        <InfoCard />
      </div>
      <div className="info">
        <Console />
        <Pros />
      </div>
      <div className="store">
        <Store />
      </div>
      <div className="deals mb-10">
        <Deals />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
