import scss from '../styles/navbar.module.scss'
import Menu from '../components/Menu'
import Link from 'next/link'
import React, { useState, useContext, useEffect } from 'react'
import { MenuContext } from "../lib/menuContext";
import { MouseContext } from '../lib/MouseContext.js'
import useScrollListener from '../lib/useScroll'

export default function Navbar() {
  const { toggle, toggleFunction } = useContext(MenuContext);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const scroll = useScrollListener();
  const [navClassList, setNavClassList] = useState([]);

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push(`${scss.push}`);

    setNavClassList(_classList);

  }, [scroll.y]);

  return (
    <>
      <header className={`${scss.mainHeader} ${navClassList.join(" ")}`}>
        <div className={scss.innerHeader}>
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
        </div>
      </header>
    </>
  )
}
