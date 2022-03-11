import scss from '../styles/navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuContext } from "../lib/menuContext";
import React, { useContext } from 'react'

export default function Menu() {
  const router = useRouter();
  const { toggle, toggleFunction } = useContext(MenuContext);

  return(
    <>
    <ul className={scss.menuList}>
      <li className={`${ router.pathname == '/' ? `${scss.active}` : ''}`}><Link href='/'><a>Pitch</a></Link></li>
      <li className={`${ router.pathname == '/om-growup' ? `${scss.active}` : ''}`}><Link href='/om-growup'><a>Om os</a></Link></li>
      <li className={`${ router.pathname == '/kontakt-os' ? `${scss.active}` : ''}`}><Link href='/kontakt-os'><a>Kontakt</a></Link></li>
    </ul>
    </>
  )
}
