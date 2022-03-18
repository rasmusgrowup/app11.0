import Head from 'next/head'
import Link from 'next/link'
import typography from '../styles/typography.module.scss'
import references from '../utils/references.js'
import layout from '../styles/layout.module.scss'

import { useContext } from 'react'
import { MouseContext } from '../lib/MouseContext.js'

export default function Kontakt() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return(
    <>
      <Head>
        <title>Growup | Få et uforpligtende tilbud på Shopify-løsninger, React hjemmesider eller udvikling af jeres brand</title>
        <meta name="description" content="Få et uforpligtende tilbud på jeres nye hjemmeside eller webshop. Vi leverer markedets bedste ecommerce-løsninger og personlige hjemmesider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={typography.contact}>
      <ul className={typography.list}>
        <li>Rasmus Andersen / CEO</li>
        <li>Webudvikling / brandudvikling</li>
        <li
          style={{ color: 'var(--light)'}}
          onMouseEnter={() => cursorChangeHandler("rasmus")}
          onMouseLeave={() => cursorChangeHandler("")}
          className='noMouse'
          ><Link href='mailto:rasmus@growupstudio.dk'><a className='noMouse'>rasmus@growupstudio.dk</a></Link></li>
      </ul>
      <ul className={typography.list}>
        <li>Rie Ecklon Holst / CEO</li>
        <li>Kommunikation / sociale medier</li>
        <li
          style={{ color: 'var(--light)'}}
          onMouseEnter={() => cursorChangeHandler("rie")}
          onMouseLeave={() => cursorChangeHandler("")}
          className='noMouse'
        ><Link href='mailto:rie@growupstudio.dk'><a className='noMouse'>rie@growupstudio.dk</a></Link></li>
      </ul>
      <ul className={typography.list}>
        <li>Besøg os på</li>
        <li style={{ color: 'var(--light)'}} onMouseEnter={() => cursorChangeHandler("map")}
        onMouseLeave={() => cursorChangeHandler("")}><Link href='https://www.google.com/maps/place/Havnegade+100,+5000+Odense/@55.4256911,10.3892947,17z/data=!4m14!1m8!3m7!1s0x464ce018c284f609:0xfacc8b8bc34af4b!2sHavnegade+100,+5000+Odense!3b1!8m2!3d55.4256911!4d10.3914834!10e3!3m4!1s0x464ce018c284f609:0xfacc8b8bc34af4b!8m2!3d55.4256911!4d10.3914834'><a className='noMouse' target='_blank'>Havnegade 100L</a></Link></li>
        <li style={{ color: 'var(--light)'}} onMouseEnter={() => cursorChangeHandler("map")}
        onMouseLeave={() => cursorChangeHandler("")}><Link href='https://www.google.com/maps/place/Havnegade+100,+5000+Odense/@55.4256911,10.3892947,17z/data=!4m14!1m8!3m7!1s0x464ce018c284f609:0xfacc8b8bc34af4b!2sHavnegade+100,+5000+Odense!3b1!8m2!3d55.4256911!4d10.3914834!10e3!3m4!1s0x464ce018c284f609:0xfacc8b8bc34af4b!8m2!3d55.4256911!4d10.3914834'><a className='noMouse' target='_blank'>Odense C, 5000</a></Link></li>
      </ul>
      </div>
    </>
  )
}
