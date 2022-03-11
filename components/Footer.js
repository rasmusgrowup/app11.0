import typography from '../styles/typography.module.scss'
import scss from '../styles/footer.module.scss'
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return(
    <>
      <footer className={scss.main}>
        <ul className={typography.list}>
          <li style={{ color: 'var(--light)'}}>— Kontakt os</li>
          <li><Link href='tel:+4531623733'><a>+45 31 62 37 33</a></Link></li>
          <li style={{ textDecoration: 'underline' }}><Link href='mailto:hello@growupstudio.dk'><a>hello@growupstudio.dk</a></Link></li>
        </ul>
        <span className={scss.copyright}>©{new Date().getFullYear()} Growup Aps — CVR 39862540</span>
      </footer>
    </>
  )
}
