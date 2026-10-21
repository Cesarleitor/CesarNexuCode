import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Card from '../../components/Card/Card'
import './Home.css'
import banner01 from '../../assets/banner01.jpg'

import {
  ArrowUpRight,
  Code2,
  BookOpen,
  BrainCircuit,
  UserRound,
  ExternalLink,
} from 'lucide-react'

const projetosDestaque = [
  {
    id: 1,
    titulo: 'PetCare',
    descricao:
      'Sistema para gestão de serviços e cuidados para animais de estimação.',
    tecnologias: ['Java', 'Spring Boot', 'PostgreSQL'],
    imagem: null,
    github: 'https://github.com/Cesarleitor',
    categoria: 'Desenvolvimento Full Stack',
  },
  {
    id: 2,
    titulo: 'Devas Tantra',
    descricao:
      'Projeto web com foco em experiência do usuário, design e desenvolvimento de interfaces.',
    tecnologias: ['React', 'JavaScript', 'CSS'],
    imagem: null,
    github: 'https://github.com/Cesarleitor/devas-tantra-frontend',
    categoria: 'Desenvolvimento Web',
  },
  {
    id: 3,
    titulo: 'CesarNexuCode',
    descricao:
      'Meu portfólio de desenvolvimento de software, inteligência artificial e Machine Learning.',
    tecnologias: ['React', 'Python', 'IA & ML'],
    imagem: null,
    github: 'https://github.com/Cesarleitor',
    categoria: 'Projeto pessoal',
  },
]

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


      {/* ACESSO RÁPIDO */}
      <section className="home-shortcuts">
        <div className="container">


          <SectionTitle
            eyebrow="Explore"
            title="Um pouco do meu universo."
            description="Projetos, conhecimento e experiências que fazem parte da minha jornada na tecnologia."
          />

          <div className="shortcuts-grid">

            <Link to="/projetos" className="shortcut-card">
              <div className="shortcut-card__top">
                <Code2 size={25} />
                <ArrowUpRight size={21} className="shortcut-card__arrow" />
              </div>

              <h3>Projetos</h3>

              <p>
                Aplicações, experimentos e soluções desenvolvidas
                com diferentes tecnologias.
              </p>

              <span>Explorar projetos</span>
            </Link>

            <Link to="/artigos" className="shortcut-card">
              <div className="shortcut-card__top">
                <BookOpen size={25} />
                <ArrowUpRight size={21} className="shortcut-card__arrow" />
              </div>

              <h3>Artigos e ideias</h3>

              <p>
                Aprendizados, tutoriais e reflexões sobre programação
                e tecnologia.
              </p>

              <span>Explorar conteúdos</span>
            </Link>

            <Link to="/formacao" className="shortcut-card">
              <div className="shortcut-card__top">
                <BrainCircuit size={25} />
                <ArrowUpRight size={21} className="shortcut-card__arrow" />
              </div>

              <h3>IA & Machine Learning</h3>

              <p>
                Minha jornada de estudos e exploração de sistemas
                inteligentes.
              </p>

              <span>Conhecer minha formação</span>
            </Link>

            <Link to="/sobre" className="shortcut-card">
              <div className="shortcut-card__top">
                <UserRound size={25} />
                <ArrowUpRight size={21} className="shortcut-card__arrow" />
              </div>

              <h3>Sobre mim</h3>

              <p>
                Minha trajetória, meus objetivos e minha evolução
                como profissional de tecnologia.
              </p>

              <span>Conhecer minha história</span>
            </Link>

          </div>
        </div>
      </section>

      {/* PROJETOS EM DESTAQUE */}
      <section className="home-projects">
        <div className="container">
          <SectionTitle
            eyebrow="Portfólio"
            title="Projetos em destaque."
            description="Conheça algumas das soluções, experiências e ideias que desenvolvo durante minha jornada na tecnologia."
          />

          <div className="projects-grid">
            {projetosDestaque.map((projeto) => (
              <article className="project-card" key={projeto.id}>
                <div className="project-card__image">
                  {projeto.imagem ? (
                    <img
                      src={projeto.imagem}
                      alt={`Capa do projeto ${projeto.titulo}`}
                    />
                  ) : (
                    <div className="project-card__placeholder">
                      <Code2 size={42} />
                      <span>{projeto.categoria}</span>
                    </div>
                  )}
                </div>

                <div className="project-card__content">
                  <h3>{projeto.titulo}</h3>

                  <p>{projeto.descricao}</p>

                  <div className="project-card__technologies">
                    {projeto.tecnologias.map((tecnologia) => (
                      <span key={tecnologia}>{tecnologia}</span>
                    ))}
                  </div>

                  <a
                    href={projeto.github}
                    className="project-card__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 size={18} />
                    Ver no GitHub
                    <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="home-projects__action">
            <Link to="/projetos" className="button button-primary">
              Ver todos os projetos
              <ArrowUpRight size={18} />
            </Link>
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
       <section className="home-technologies" >
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
       <section className="home-cta" >
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