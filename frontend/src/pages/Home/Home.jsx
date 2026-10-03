import { Link } from 'react-router-dom'
import './Home.css'
import banner01 from '../../assets/banner01.jpg'

function Home() {
  return (
    <section className="hero">

      <div
        className="hero__brain"
        style={{ backgroundImage: `url(${banner01})` }}
        aria-hidden="true"
      />

      <div className="hero__neural-points" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero__overlay" />

      <div className="container">
        <div className="hero__content">

          <span className="hero__eyebrow">
            Desenvolvimento de Software • IA • Machine Learning
          </span>

          <h1 className="hero__title">
            Transformando código em
            <span> soluções inteligentes.</span>
          </h1>

          <p className="hero__description">
            Desenvolvimento de Software, Python, Java,
            Inteligência Artificial e Machine Learning.
          </p>

          <div className="hero__actions">
            <Link
              to="/projetos"
              className="button button-primary"
            >
              Ver projetos
            </Link>

            <Link
              to="/contato"
              className="button button-secondary"
            >
              Entre em contato
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Home