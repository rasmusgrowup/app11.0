import typography from '../styles/typography.module.scss'
import scss from '../styles/footer.module.scss'

export default function Footer() {
  return(
    <>
      <footer className={scss.main}>
        <ul className={typography.list}>
          <li style={{ color: 'var(--light)'}}>— Kontakt os</li>
          <li>+45 31 62 37 33</li>
          <li style={{ textDecoration: 'underline' }}>hello@growupstudio.dk</li>
        </ul>
        <span>©2022 Growup Aps — CVR 39862540</span>
      </footer>
    </>
  )
}
