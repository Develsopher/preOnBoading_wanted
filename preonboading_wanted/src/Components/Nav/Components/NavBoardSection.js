import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import './NavBoardSection.scss';

export default function NavBoardSection(props) {
  const { upper_class, classes } = props;

  return (
    <div className="boardList">
      <div className="upperListWrap">
        <li className="upperList">{upper_class}</li>
        <BiChevronRight size="17px" color="#333" />
      </div>
      {classes.map((list, i) => {
        return (
          <li className="listDetail" key={i}>
            {list}
          </li>
        );
      })}
    </div>
  );
}
