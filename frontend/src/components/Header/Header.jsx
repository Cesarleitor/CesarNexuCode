import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container site-header__container">
        <NavLink
          to="/"
          className="site-header__logo"
          onClick={closeMenu}
        >
          Cesar<span>NexuCode</span>
        </NavLink>

        <nav
          className={`site-header__nav ${
            menuOpen ? 'site-header__nav--open' : ''
          }`}
        >
          <NavLink
            to="/"
            className="site-header__link"
            onClick={closeMenu}
          >
            Início
          </NavLink>

          <NavLink
            to="/sobre"
            className="site-header__link"
            onClick={closeMenu}
          >
            Sobre
          </NavLink>

          <NavLink
            to="/experiencia"
            className="site-header__link"
            onClick={closeMenu}
          >
            Experiência
          </NavLink>

          <NavLink
            to="/formacao"
            className="site-header__link"
            onClick={closeMenu}
          >
            Formação
          </NavLink>

          <NavLink
            to="/portfolio"
            className="site-header__link"
            onClick={closeMenu}
          >
            Portfólio
          </NavLink>

          <NavLink
            to="/projetos"
            className="site-header__link"
            onClick={closeMenu}
          >
            Projetos
          </NavLink>

          <NavLink
            to="/artigos"
            className="site-header__link"
            onClick={closeMenu}
          >
            Artigos
          </NavLink>

          <NavLink
            to="/parceiros"
            className="site-header__link"
            onClick={closeMenu}
          >
            Parceiros
          </NavLink>

          <NavLink
            to="/contato"
            className="site-header__contact"
            onClick={closeMenu}
          >
            Contato
          </NavLink>
        </nav>

        <button
          type="button"
          className="site-header__menu"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}

export default Header