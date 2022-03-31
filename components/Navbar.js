import scss from '../styles/navbar.module.scss'
import Menu from '../components/Menu'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useContext, useEffect } from 'react'
import { MenuContext } from "../lib/menuContext";
import { MouseContext } from '../lib/MouseContext.js'
import useScrollListener from '../lib/useScroll'

import Smile from '../public/smile.svg'

export default function Navbar() {
  const { toggle, toggleFunction } = useContext(MenuContext);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <header className={scss.mainHeader}>
        <div className={scss.innerHeader}>
          <div
            className={`${scss.logoType} ${ toggle == true ? `${scss.menuOpenedLogo}` : ''}`}
            onMouseEnter={() => cursorChangeHandler("home")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <Link href='/'><a>
              <span style={{ marginRight: '0.25rem' }}>Growup Studio</span>
              <div className={scss.smile}><Image src={Smile} height='14' width='14' /></div>
            </a></Link>
          </div>
          <div className={scss.desktopMenu}>
            <Menu />
          </div>
          <div className={scss.openMenuIcon} onClick={toggleFunction}>
            <span></span>
            <span></span>
          </div>
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
