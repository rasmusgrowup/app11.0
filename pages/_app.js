import '../styles/globals.css'
import "flickity/css/flickity.css";
import Layout from '../components/Layout'
import { MenuProvider } from "../lib/menuContext";
import MouseContextProvider from "../lib/MouseContext";

function MyApp({ Component, pageProps }) {
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
