import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBoardSection from "./NavBoardSection";
import NavExBoardData from "./NavExBoardData";
import { BiChevronRight } from "react-icons/bi";
import "./NavExplore.scss";

export default function NavExplore(props) {
  const { navBoardList } = props;

  return (
    <div className="navExBoardWrap">
      <div className="navExBoard">
        <div className="navSection">
          {navBoardList.map((v, i) => {
            return (
              <NavBoardSection
                upper_class={v.upper_class}
                classes={v.classes}
              />
            );
          })}
        </div>
        <div className="navExtraSectionWrap">
          {NAVUPPERCLASS_ARR.map((v, i) => {
            return (
              <div className="navExtraSection">
                <div className="navExtra">{v}</div>
                <BiChevronRight size="17px" color="#333" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const NAVUPPERCLASS_ARR = [
  "금융",
  "제조 생산",
  "물류 무역",
  "의료 제약 바이오",
  "교육",
  "법률 법집행기관",
  "식음료",
  "건설 시설",
  "공공 복지",
];
