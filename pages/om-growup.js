import Head from 'next/head'
import typography from '../styles/typography.module.scss'
import references from '../utils/references.js'
import layout from '../styles/layout.module.scss'

import { useContext } from "react";
import { MouseContext } from '../lib/MouseContext.js'

export default function Om() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <Head>
        <title>Growup | Ecommerce i verdensklasse</title>
        <meta name="description" content="Vi er et lille nærværende designstudie i Odense C. Vi hjælper jeres brand med at finde ind til sin visuelle identitet, og kører jer i stilling med markedets flotteste ecommerce hjemmesider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={typography.about}>
        <h1 className={typography.aboutTitle}>
          Growup Studio er et lille, <span style={{ color: 'var(--red)'}} onMouseEnter={() => cursorChangeHandler("heart")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>nærværende</span> designstudie med kontor i hjertet af Odense
        </h1>
        <p className={typography.aboutParagraph}>
          Vi hjælper start-ups og etablerede virksomheder med at få styr på deres <span style={{ color: 'var(--black)'}} onMouseEnter={() => cursorChangeHandler("branding")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'> branding</span>, <span style={{ color: 'var(--red)'}} onMouseEnter={() => cursorChangeHandler("design")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>identitet</span>, <span style={{ color: 'var(--orange)'}} onMouseEnter={() => cursorChangeHandler("web")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>hjemmesider</span> og <span style={{ color: 'var(--green)'}} onMouseEnter={() => cursorChangeHandler("shop")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>netbutikker</span><br /><br/ >Etablerede brands kommer til os, når de har behov for en ny identitet, nye billede- og videomaterialer eller bedre webløsninger<br /><br />Start-ups nyder godt af vores sparring i forretningsudvikling og hjælpes i gang med billige og unikke hjemmesider.
        </p>
        <div>
          <ul className={typography.list}>
            <li style={{ color: 'var(--light)'}}>— services</li>
            <li>Art Direction</li>
            <li>Branding</li>
            <li>Identitetsdesign</li>
            <li>React Hjemmesider</li>
            <li>Shopify Netbutikker</li>
            <li>Søgemaskineoptimering</li>
          </ul>
        </div>
        <div>
          <ul className={typography.list}>
            <li style={{ color: 'var(--light)'}}>— kunder</li>
            {references.map(({title, year}) => (
              <li className={typography.reference} key={title}>{title}<span className={typography.year}>{year}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
