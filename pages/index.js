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
        <title>Growup | Ecommerce i verdensklasse</title>
        <meta name="description" content="Vi er et lille nærværende designstudie i Odense C. Vi hjælper jeres brand med at finde ind til sin visuelle identitet, og kører jer i stilling med markedets flotteste ecommerce hjemmesider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel/>
      <div className={layout.indexContent}>
        <div className={effects.gradientOverlay}></div>
        <h1 className={typography.indexTitle}>
          Vi er et lille <span style={{ color: 'var(--red)'}} onMouseEnter={() => cursorChangeHandler("heart")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>nærværende</span> designstudie i Odense C. Vi hjælper jeres brand med at finde sin visuelle identitet, og kører jer i stilling med markedets flotteste ecommerce hjemmesider
        </h1>
        <p className={typography.indexParagraph}>
          Vi tilbyder <span style={{ color: 'var(--pink)'}} onMouseEnter={() => cursorChangeHandler("camera")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>art direction</span>,
          <span style={{ color: 'var(--black)'}} onMouseEnter={() => cursorChangeHandler("branding")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'> branding</span>, <span style={{ color: 'var(--red)'}} onMouseEnter={() => cursorChangeHandler("design")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>identitetsdesign</span> og <span style={{ color: 'var(--orange)'}} onMouseEnter={() => cursorChangeHandler("web")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>webudvikling</span> — vi kan med andre ord hjælpe jer fra idé til færdig hjemmeside. Med vores <span style={{ color: 'var(--light)'}} onMouseEnter={() => cursorChangeHandler("subscription")} onMouseLeave={() => cursorChangeHandler("")} className='noMouse'>abonnementer</span> kan i desuden let og billigt holde jeres hjemmeside og sociale medier opdateret med nyt indhold
        </p>
        <div>
          <h2 className={typography.indexTitle} style={{ color: 'var(--light)', marginBottom: '0' }}>— Shopify</h2>
          <p className={typography.indexParagraph}>
            Leder i efter en skarp partner, der kan hjælpe jer i mål med en moderne ecommerce-løsning? Vi er Shopify-partnere, og leverer smukke og brugervenlige netbutikker, der er bygget på Shopifys geniale ecommerce platform
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
