import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      window.sessionStorage.setItem("firstLoadDone", 1)
    } else {}
  }, [])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
