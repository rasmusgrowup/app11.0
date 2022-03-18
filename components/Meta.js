import Head from 'next/head'

function Meta({title, keywords, description}) {
    return (
        <Head>
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="og:title" content={title} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Growup',
    keywords: 'Hjemmeside, netbutik, branding, visuelt design, ux-design, ui-design, kommunikation, markedsføring, forretningsudvikling, start-up, brand, React, Shopify, Google Ads, Facebook, Instagram',
    description: 'Vi er et lille nærværende designstudie i Odense C. Vi hjælper jeres brand med at finde sin visuelle identitet, og kører jer i stilling med markedets flotteste ecommerce-løsninger og hjemmesider'
}

export default Meta
