import './Footer.css'

import PartnerCard from '../PartnerCard/PartnerCard'
import SocialLinks from '../SocialLinks/SocialLinks'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">

      <div className="container">

        {/* CONTEÚDO PRINCIPAL */}
        <div className="site-footer__main">

          {/* MARCA */}
          <div className="site-footer__brand">

            <a
              href="/CesarNexuCode"
              className="site-footer__logo"
            >
              Cesar<span>NexuCode</span>
            </a>

            <p className="site-footer__description">
              Desenvolvimento de Software, Python, Java,
              Inteligência Artificial e Machine Learning.
            </p>

            <SocialLinks />

          </div>

          {/* NAVEGAÇÃO */}
          <div className="site-footer__column">

            <h3 className="site-footer__title">
              Navegação
            </h3>

            <nav className="site-footer__nav">

              <a href="/CesarNexuCode">
                Início
              </a>

              <a href="/CesarNexuCode/sobre">
                Sobre mim
              </a>

              <a href="/CesarNexuCode/projetos">
                experiências
              </a>

              <a href="/CesarNexuCode/projetos">
                Formação
              </a>

              <a href="/CesarNexuCode/projetos">
                Portfólio
              </a>

              <a href="/CesarNexuCode/projetos">
                Projetos
              </a>

              <a href="/CesarNexuCode/projetos">
                Artigos
              </a>

              <a href="/CesarNexuCode/contato">
                Parceiros
              </a>

            </nav>

          </div>

          {/* TECNOLOGIAS */}
          <div className="site-footer__column">

            <h3 className="site-footer__title">
              Tecnologias
            </h3>

            <ul className="site-footer__technologies">

              <li>Java</li>
              <li>Spring Boot</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>REST APIs</li>
              <li>Docker</li>
              <li>Linux</li>
              <li>Inteligência Artificial</li>
              <li>Machine Learning</li>

            </ul>

          </div>

          {/* PARCEIRO */}
          <div className="site-footer__partner">

            <PartnerCard
              name="NexuCodePlay"
              description="Projetos, experiências e soluções desenvolvidas através da tecnologia."
              url="https://www.nexucodeplay.com/"
            />

          </div>

        </div>

        {/* CONTATO */}
        <div className="site-footer__contact">

          <div className="site-footer__contact-info">

            <h3 className="site-footer__contact-title">
              Vamos conversar?
            </h3>

            <p className="site-footer__contact-text">
              Entre em contato para conhecer meu trabalho,
              trocar ideias ou conversar sobre tecnologia.
            </p>

          </div>

          {/* CONTATOS */}
          <div className="site-footer__contact-actions">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5554984260491"
              target="_blank"
              rel="noreferrer"
              className="site-footer__whatsapp"
              aria-label="Entrar em contato pelo WhatsApp"
            >

              <span className="site-footer__whatsapp-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.83c0 2.08.54 4.11 1.57 5.9L.14 24l6.42-1.64a11.8 11.8 0 0 0 5.52 1.37h.01c6.53 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.4-8.41ZM12.09 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.81.97 1.02-3.71-.24-.38a9.84 9.84 0 1 1 8.42 4.7Zm5.4-7.38c-.3-.15-1.78-.88-2.05-.98-.28-.1-.47-.15-.67.15-.2.3-.76.98-.93 1.18-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.71.25-1.31.17-1.43-.07-.13-.27-.2-.57-.35Z"
                  />
                </svg>

              </span>

              <span className="site-footer__whatsapp-text">
                <strong>WhatsApp</strong>
                <small>(54) 984260491</small>
              </span>

            </a>

            {/* E-MAIL */}
            <a
              href="mailto:cesar38dev@gmail.com"
              className="site-footer__email"
              aria-label="Enviar e-mail para Cesar"
            >

              <span className="site-footer__email-icon">
                @
              </span>

              <span className="site-footer__email-text">
                <strong>E-mail</strong>
                <small>cesar38dev@gmail.com</small>
              </span>

            </a>

          </div>

        </div>

        {/* DIVISOR */}
        <div className="site-footer__divider" />

        {/* RODAPÉ */}
        <div className="site-footer__bottom">

          <p>
            © {currentYear} CesarNexuCode.
            Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido por <strong>CesarNexuCode</strong>
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer