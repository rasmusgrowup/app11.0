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
        <title>Nærverende fynsk designstudie | Branding, hjemmesider og netbutikker</title>
        <meta name="description" content="Vi hjælper start-ups og etablerede virksomheder med at få styr på deres branding, identitet, hjemmesider og netbutikker" />
      </Head>
      <div className={typography.about}>
        <h1 className={typography.aboutTitle}>
          Growup Studio er et lille, <span style={{ color: 'var(--red)'}} onMouseEnter={() => cursorChangeHandler("heart")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>nærværende</span> designstudie med kontor i hjertet af Odense
        </h1>
        <p className={typography.aboutParagraph}>
          Vi hjælper start-ups og etablerede virksomheder med at få styr på deres <span style={{ color: 'var(--black)'}} onMouseEnter={() => cursorChangeHandler("branding")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'> branding</span>, <span style={{ color: 'var(--red)'}} onMouseEnter={() => cursorChangeHandler("design")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>identitet</span>, <span style={{ color: 'var(--orange)'}} onMouseEnter={() => cursorChangeHandler("web")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>hjemmesider</span> og <span style={{ color: 'var(--green)'}} onMouseEnter={() => cursorChangeHandler("shop")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>netbutikker</span></p>
        <p className={typography.aboutParagraph}><span style={{ color: 'var(--light)'}} onMouseEnter={() => cursorChangeHandler("adult")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>Etablerede brands</span> kommer til os, når de har behov for en ny identitet, nye billede- og videomaterialer eller bedre webløsninger</p>
        <p className={typography.aboutParagraph}><span style={{ color: 'var(--light)'}} onMouseEnter={() => cursorChangeHandler("child")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>Start-ups</span> hjælpes i gang med billige og unikke hjemmesider, og nyder samtidig godt af vores sparring på forretningsdelen qua vores møde med mange unikke virksomheder</p>
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
