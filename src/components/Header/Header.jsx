import React from "react";
import "../Header/Header.scss";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header>
        <nav className="nav__header">
          <h1 className="nav__logo">JF</h1>
          <div className="nav__right">
            <Link to="/" className="nav__home nav__link">
              HOME
            </Link>
            <Link to="/about" className="nav__about nav__link">
              ABOUT
            </Link>
            <Link to="/contact" className="nav__contact nav__link">
              CONTACT
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
