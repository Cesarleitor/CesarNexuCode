import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Card from '../../components/Card/Card'
import './Home.css'
import banner01 from '../../assets/banner01.jpg'

function Home() {
  return (
    <>
      {/* HERO */}
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
                className="button button-primary"
              >
                Entre em contato
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* FOCO */}
      <section className="home-focus">
        <div className="container">

          <SectionTitle
            eyebrow="Tecnologia e inovação"
            title="Construindo soluções através da tecnologia."
            description="Um espaço dedicado ao desenvolvimento de software, experimentação com novas tecnologias e construção de projetos que transformam ideias em soluções reais."
          />

          <div className="focus-grid">

            <Card className="focus-card">
              <span className="focus-card__number">01</span>

              <h3>Desenvolvimento de Software</h3>

              <p>
                Desenvolvimento de aplicações, APIs e soluções
                utilizando diferentes tecnologias e arquiteturas.
              </p>
            </Card>

            <Card className="focus-card">
              <span className="focus-card__number">02</span>

              <h3>Inteligência Artificial</h3>

              <p>
                Exploração de Inteligência Artificial e Machine
                Learning e suas aplicações no desenvolvimento
                de software.
              </p>
            </Card>

            <Card className="focus-card">
              <span className="focus-card__number">03</span>

              <h3>Aprendizado contínuo</h3>

              <p>
                Estudo, experimentação e criação de projetos
                como parte constante da evolução profissional.
              </p>
            </Card>

          </div>

        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="home-technologies">
        <div className="container">

          <SectionTitle
            eyebrow="Tecnologias"
            title="Ferramentas que fazem parte da jornada."
            align="center"
          />

          <div className="technologies-list">
            <span>Java</span>
            <span>Python</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Spring Boot</span>
            <span>SQL</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container">

          <div className="home-cta__content">

            <span className="section-eyebrow">
              VAMOS CONSTRUIR
            </span>

            <h2>
              Conheça meu trabalho.
            </h2>

            <p>
              Explore os projetos, conheça minha trajetória
              e acompanhe minha evolução na tecnologia.
            </p>

            <div className="home-cta__actions">

              <Link
                to="/projetos"
                className="button button-primary"
              >
                Explorar projetos
              </Link>

              <Link
                to="/sobre"
                className="button button-primary"
              >
                Sobre mim
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Home