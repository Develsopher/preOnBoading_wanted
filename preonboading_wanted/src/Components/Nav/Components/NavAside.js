import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import './NavAside.scss';

export default function NavAside() {
  return (
    <div className="navAside">
      <div className="navAside-Icon">
        <Link to="/">
          <BiSearch size="18px" color="#333333" />
        </Link>
        <Link className="navAside-Bell" to="/">
          <BsBell size="18px" color="#333333" />
        </Link>
        <div className="avatarBorder">
          <img alt="avatar" src="images/avatar.png" />
        </div>
      </div>
      <div className="navAside-Bar">|</div>
      <div>
        <Link className="navAside-Service" to="/">
          기업 서비스
        </Link>
      </div>
    </div>
  );
}
