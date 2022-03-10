import scss from '../styles/navbar.module.scss'

export default function Navbar() {
  return (
    <>
      <header className={scss.mainHeader}>
        <logo className={scss.logoType}>
          Growup Studio
        </logo>
        <div className={scss.desktopMenu}>
          <ul>
            <li style={{ textDecoration: 'underline' }}>Pitch</li>
            <li>Om os</li>
            <li>Kontakt os</li>
          </ul>
        </div>
        <div className={scss.mobileMenu}>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  )
}
