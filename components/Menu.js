import scss from '../styles/navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuContext } from "../lib/menuContext";
import { MouseContext } from '../lib/MouseContext.js'
import React, { useContext } from 'react'

export default function Menu() {
  const router = useRouter();
  const { toggle, toggleFunction } = useContext(MenuContext);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return(
    <>
    <ul className={scss.menuList}>
      <li
        className={`${ router.pathname == '/' ? `${scss.active}` : ''}`}
        onMouseEnter={() => cursorChangeHandler("pitch")}
        onMouseLeave={() => cursorChangeHandler("")}
        >
        <Link href='/'><a className='noMouse'>Pitch</a></Link></li>
      <li
        className={`${ router.pathname == '/om-growup' ? `${scss.active}` : ''}`}
        onMouseEnter={() => cursorChangeHandler("about")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <Link href='/om-growup'><a className='noMouse'>Om os</a></Link></li>
      <li
      className={`${ router.pathname == '/kontakt-os' ? `${scss.active}` : ''}`}
      onMouseEnter={() => cursorChangeHandler("call")}
      onMouseLeave={() => cursorChangeHandler("")}
      >
        <Link href='/kontakt-os'><a className='noMouse'>Kontakt</a></Link>
      </li>
    </ul>
    </>
  )
}
