import React from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiMenu } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import "./NavHidden.scss";

export default function NavHidden() {
  return (
    <div className="hiddenNav">
      <div className="hiddenNavBtnWrap">
        <li className="hiddenNavBtn">홈</li>
        <li className="hiddenNavBtn">탐색</li>
        <li className="hiddenNavBtn">커리어 성장</li>
      </div>
      <div className="hiddenNavBtnWrap">
        <Link className="hiddenNavBtn" to="/">
          <BiSearch size="18px" color="#333333" />
        </Link>
        <Link className="hiddenNavBtn" to="/">
          <BsBell size="18px" color="#333333" />
        </Link>
        <Link className="hiddenNavBtn" to="/">
          <BiMenu size="18px" color="#333333" />
        </Link>
      </div>
    </div>
  );
}
