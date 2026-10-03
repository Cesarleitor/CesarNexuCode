import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">

        <div className="site-footer__main">

          <div className="site-footer__brand">
            <a href="/" className="site-footer__logo">
              Cesar<span>NexuCode</span>
            </a>

            <p className="site-footer__description">
              Desenvolvimento de Software, Python, Java,
              Inteligência Artificial e Machine Learning.
            </p>
          </div>

          <div className="site-footer__contact">

            <h3 className="site-footer__contact-title">
              Vamos conversar?
            </h3>

            <p className="site-footer__contact-text">
              Entre em contato ou acompanhe meu trabalho nas redes sociais.
            </p>

            <a
              href="https://wa.me/54984260491"
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
                <small>+55 (49) 8426-0491</small>
              </span>
            </a>

            <div className="site-footer__social">

              <a
                href="https://github.com/Cesarleitor"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.15c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.1c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/dev-cesar198738/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/cesar_devj/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
                  />
                </svg>
              </a>

            </div>

          </div>

        </div>

        <div className="site-footer__divider" />

        <div className="site-footer__bottom">

          <p>
            © {currentYear} CesarNexuCode. Todos os direitos reservados.
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