import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel'
import typography from '../styles/typography.module.scss'
import references from '../utils/references.js'
import effects from '../styles/effects.module.scss'
import layout from '../styles/layout.module.scss'

import { useContext } from "react";
import { MouseContext } from '../lib/MouseContext.js'

export default function Home() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <Head>
        <title>Growup | Branding, hjemmesider og netbutikker til start-ups og etablerede brands</title>
        <meta name="description" content="Vi er et lille nærværende designstudie i Odense C. Vi hjælper jeres brand med at finde sin visuelle identitet, og kører jer i stilling med markedets flotteste ecommerce-løsninger og hjemmesider" />
      </Head>
      <Carousel/>
      <div className={layout.indexContent}>
        <div className={effects.gradientOverlay}></div>
        <h1 className={typography.indexTitle}>
          Vi er et lille <span style={{ color: 'var(--red)'}} onMouseEnter={() => cursorChangeHandler("heart")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>nærværende</span> designstudie i Odense C. Vi hjælper jeres brand med at finde sin visuelle identitet, og kører jer i stilling med markedets flotteste ecommerce-løsninger og React hjemmesider
        </h1>
        <p className={typography.indexParagraph}>
          Vi tilbyder <span style={{ color: 'var(--pink)'}} onMouseEnter={() => cursorChangeHandler("camera")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>art direction</span>,
          <span style={{ color: 'var(--black)'}} onMouseEnter={() => cursorChangeHandler("branding")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'> branding</span>, <span style={{ color: 'var(--red)'}} onMouseEnter={() => cursorChangeHandler("design")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>identitetsdesign</span> og <span style={{ color: 'var(--orange)'}} onMouseEnter={() => cursorChangeHandler("web")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>webudvikling</span> — vi kan med andre ord hjælpe jer fra idé til færdig hjemmeside. Med vores <span style={{ color: 'var(--light)'}} onMouseEnter={() => cursorChangeHandler("subscription")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>abonnementer</span> kan i desuden let og billigt holde jeres hjemmeside og sociale medier opdateret med nyt indhold
        </p>
        <div>
          <h2 className={typography.indexTitle} style={{ color: 'var(--light)', marginBottom: '0' }}>— Et lille fælleskab</h2>
          <p className={typography.indexParagraph}>
            Growup er en lille virksomhed, men vi benytter os af professionelle partnere for at løse vores kunders udfordringer. Vi kan derfor løse store såvel som små opgaver. Vi har bl.a. et samarbejde med fotografer, SEO-eksperter, art directors m.fl
          </p>
        </div>
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
