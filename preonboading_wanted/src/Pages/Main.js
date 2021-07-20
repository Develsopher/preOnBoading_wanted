import React, { useState } from "react";
import Nav from "../Components/Nav/Nav";
import "./Main.scss";

export default function Main() {
  const [navExploreShow, setNavExploreShow] = useState(false);

  const handleNavExOn = () => {
    setNavExploreShow(true);
  };

  const handleNavExOff = () => {
    setNavExploreShow(false);
  };

  return (
    <div>
      <Nav
        className="nav"
        navExploreShow={navExploreShow}
        handleNavExOn={handleNavExOn}
        handleNavExOff={handleNavExOff}
      />
      <div className="mainBoard" onMouseEnter={handleNavExOff}>
        <img alt="main사진" src="/images/mainboard.jpg" />
      </div>
    </div>
  );
}
