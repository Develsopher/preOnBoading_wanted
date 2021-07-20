import React from "react";
import { Link } from "react-router-dom";
import "./NavMain.scss";

export default function NavMain(props) {
  const { handleNavExOn, handleNavExOff } = props;

  return (
    <div className="navMain">
      {NAVMENU_ARR.map((menu, i) => {
        let tag =
          Number(i) === 0 ? (
            <div>
              <Link className="navMenu" to="/" onMouseEnter={handleNavExOn}>
                {menu}
              </Link>
            </div>
          ) : (
            <div>
              <Link className="navMenu" to="/" onMouseEnter={handleNavExOff}>
                {menu}
              </Link>
            </div>
          );
        return tag;
      })}
    </div>
  );
}

const NAVMENU_ARR = [
  "탐색",
  "커리어 성장",
  "직군별 연봉",
  "이력서",
  "매치업",
  "프리랜서",
  "Ai 합격예측",
];
