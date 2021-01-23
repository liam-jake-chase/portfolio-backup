import React from 'react';
import '../Header/Header.scss'

export default function Header() {
    return (
        <div>
           <header>
               <nav className="nav__header">
                   <h1 className="nav__logo">JF</h1>
                   <div className="nav__right">
                   <a href="#" className="nav__home nav__link">HOME</a>
                   <a href="#" className="nav__about nav__link">ABOUT</a>
                   <a href="#" className="nav__contact nav__link">CONTACT</a>
                   </div>
               </nav>
           </header>
        </div>
    )
}
