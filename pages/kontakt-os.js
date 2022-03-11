import Head from 'next/head'
import Link from 'next/link'
import typography from '../styles/typography.module.scss'
import references from '../utils/references.js'
import layout from '../styles/layout.module.scss'

export default function Kontakt() {
  return(
    <>
      <Head>
        <title>Growup | Ecommerce i verdensklasse</title>
        <meta name="description" content="Vi er et lille nærværende designstudie i Odense C. Vi hjælper jeres brand med at finde ind til sin visuelle identitet, og kører jer i stilling med markedets flotteste ecommerce hjemmesider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={typography.contact}>
      <ul className={typography.list}>
        <li>Rasmus Andersen / CEO</li>
        <li>Webudvikling / brandudvikling</li>
        <li style={{ color: 'var(--light)'}}><Link href='mailto:rasmus@growupstudio.dk'><a>rasmus@growupstudio.dk</a></Link></li>
      </ul>
      <ul className={typography.list}>
        <li>Rie Ecklon Holst / CEO</li>
        <li>Kommunikation / sociale medier</li>
        <li style={{ color: 'var(--light)'}}><Link href='mailto:rie@growupstudio.dk'><a>rie@growupstudio.dk</a></Link></li>
      </ul>
      <ul className={typography.list}>
        <li>Besøg os på</li>
        <li style={{ color: 'var(--light)'}}>Havnegade 100L</li>
        <li style={{ color: 'var(--light)'}}>Odense C, 5000</li>
      </ul>
      </div>
    </>
  )
}
