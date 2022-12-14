import './header-footer.css'

export function Header({ href1, logout, title, href2, logo }) {
  return (
    <header>
      <a href={href1}><img className='logout' src={logout} alt='sair'></img></a>
      <p>{title}</p>
      <a href={href2}><img className='logo-home' src={logo} alt='img-logo'></img></a>
    </header>
  )
}

export function Footer({ href1, text1, href2, text2 }) {
  return (
    <footer>
      <a href={href1}>{text1}</a>
      <a href={href2}>{text2}</a>
    </footer>
  )
}