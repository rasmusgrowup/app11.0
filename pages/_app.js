import '../styles/globals.css'
import Layout from '../components/Layout'
import { MenuProvider } from "../lib/menuContext";
import MouseContextProvider from "../lib/MouseContext";
import TagManager from 'react-gtm-module';
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
      TagManager.initialize({ gtmId: 'GTM-NPHTDWC' });
  }, []);

  return (
    <MenuProvider>
      <MouseContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MouseContextProvider>
    </MenuProvider>
  )
}

export default MyApp
