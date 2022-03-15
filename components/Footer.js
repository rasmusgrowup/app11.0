import typography from '../styles/typography.module.scss'
import scss from '../styles/footer.module.scss'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useContext } from 'react'
import { MouseContext } from '../lib/MouseContext.js'

export default function Footer() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const router = useRouter();

  return(
    <>
      <footer className={`${scss.main} ${ router.pathname != '/' ? `${typography.notOnHomePage}` : ''}`}>
        <ul className={typography.list}>
          <li style={{ color: 'var(--light)'}}>— Kontakt os</li>
          <li
            onMouseEnter={() => cursorChangeHandler("call")}
            onMouseLeave={() => cursorChangeHandler("")}
            className='noMouse'
          >
            <Link href='tel:+4531623733'><a className='noMouse'>+45 31 62 37 33</a></Link>
          </li>
          <li
            style={{ textDecoration: 'underline' }}
            onMouseEnter={() => cursorChangeHandler("write")}
            onMouseLeave={() => cursorChangeHandler("")}
            className='noMouse'
          >
            <Link href='mailto:hello@growupstudio.dk'><a className='noMouse'>hello@growupstudio.dk</a></Link>
          </li>
        </ul>
        <span className={scss.copyright}>©{new Date().getFullYear()} Growup Aps — CVR 39862540</span>
      </footer>
    </>
  )
}
