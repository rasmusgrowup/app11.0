import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'

import React, { useEffect } from 'react'
import { isMobile, CustomView } from 'react-device-detect'

export default function Layout({ children }) {
  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      window.sessionStorage.setItem("firstLoadDone", 1)
    } else {}
  }, [])

  return (
    <>
      <CustomView condition={!isMobile}>
        <Cursor />
      </CustomView>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
