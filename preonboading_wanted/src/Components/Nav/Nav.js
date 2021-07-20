import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavMain from "./Components/NavMain";
import NavAside from "./Components/NavAside";
import NavExplore from "./Components/NavExplore";
import NavHidden from "./NavHidden";
import "./Nav.scss";

export default function Nav(props) {
  const { navExploreShow, handleNavExOn, handleNavExOff } = props;
  const [navBoardList, setNavBoardList] = useState([]);

  useEffect(() => {
    fetch("/data/navBoardData.json")
      .then((res) => res.json())
      .then((navBoardList) => setNavBoardList(navBoardList));
  }, []);

  return (
    <div className="nav">
      <nav className="wrapNav">
        <div className="logo">
          <Link to="/">
            <img alt="wanted" src="/images/logo.png" />
          </Link>
        </div>
        <NavMain
          handleNavExOn={handleNavExOn}
          handleNavExOff={handleNavExOff}
        />
        <NavAside />
      </nav>
      <NavHidden />
      {navExploreShow && <NavExplore navBoardList={navBoardList} />}
    </div>
  );
}
