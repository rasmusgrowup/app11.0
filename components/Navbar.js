import scss from '../styles/navbar.module.scss'
import Menu from '../components/Menu'
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { MenuContext } from "../lib/menuContext";
import { MouseContext } from '../lib/MouseContext.js'

export default function Navbar() {
  const { toggle, toggleFunction } = useContext(MenuContext);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <header className={scss.mainHeader}>
        <div
          className={`${scss.logoType} ${ toggle == true ? `${scss.menuOpenedLogo}` : ''}`}
          onMouseEnter={() => cursorChangeHandler("home")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href='/'><a>Growup Studio</a></Link>
        </div>
        <div className={scss.desktopMenu}>
          <Menu />
        </div>
        <div className={scss.openMenuIcon} onClick={toggleFunction}>
          <span></span>
          <span></span>
        </div>
        <div className={`${scss.mobileMenu} ${ toggle == true ? `${scss.menuOpened}` : ''}`}>
          <div className={scss.closeMenuIcon} onClick={toggleFunction}>
            <span></span>
            <span></span>
          </div>
          <div onClick={toggleFunction}><Menu/></div>
          <span className={scss.copyright}>©{new Date().getFullYear()} Growup Aps — CVR 39862540</span>
        </div>
      </header>
    </>
  )
}
