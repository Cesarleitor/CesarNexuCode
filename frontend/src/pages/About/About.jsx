
import fotoPerfil from '../../assets/EuSobreMim.jpeg'
import './About.css'

function About() {
  return (
    <main className="about">
      <section className="about__hero">
        <div className="about__container">
          <div className="about__image">
            <img
              src={fotoPerfil}
              alt="Foto de apresentação pessoal"
              className="about__photo"
            />

            <div className="about__image-caption">
              <span className="about__caption-dot" />
              Em constante evolução na tecnologia
            </div>
          </div>

          <div className="about__content">
            <p className="about__eyebrow">Além do código</p>

            <h1>
              Construindo meu caminho na tecnologia.
            </h1>

            <p className="about__lead">
              Sou estudante de Ciência da Computação e de
              Inteligência Artificial e Machine Learning,
              movido pela curiosidade, pela lógica e pelo
              desejo de transformar ideias em soluções reais.
            </p>

            <p className="about__text">
              Minha jornada na tecnologia é marcada pela
              vontade de compreender como as coisas funcionam.
              Gosto de investigar problemas, encontrar padrões
              e desenvolver soluções por meio da programação.
              Para mim, programar vai além de escrever código:
              significa aprender a pensar, experimentar
              possibilidades e transformar conhecimento em algo útil.
            </p>

            <p className="about__text">
              Atualmente, estou aprofundando meus conhecimentos
              em desenvolvimento de software, enquanto amplio
              meus estudos em inteligência artificial e
              aprendizado de máquina. Busco equilibrar a base
              teórica da faculdade com a prática, desenvolvendo
              projetos que me desafiam e me ajudam a evoluir.
            </p>

            <div className="about__interests">
              <span>Desenvolvimento de Software</span>
              <span>Java</span>
              <span>Python</span>
              <span>Inteligência Artificial</span>
              <span>Machine Learning</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about__section">
        <div className="about__section-container">
          <p className="about__eyebrow">Minha trajetória</p>

          <h2>Aprender, praticar e evoluir.</h2>

          <p className="about__section-intro">
            Estou construindo minha carreira com dedicação
            aos estudos, prática constante e projetos que
            conectam diferentes áreas da tecnologia.
          </p>

          <div className="about__cards">
            <article className="about__card">
              <span className="about__card-number">01</span>
              <h3>Fundamentos sólidos</h3>
              <p>
                A graduação em Ciência da Computação fortalece
                meus conhecimentos em lógica, algoritmos,
                estruturas de dados, bancos de dados e
                desenvolvimento de sistemas.
              </p>
            </article>

            <article className="about__card">
              <span className="about__card-number">02</span>
              <h3>Desenvolvimento de software</h3>
              <p>
                Estudo tecnologias como Java, Spring Boot,
                JavaScript e React, colocando em prática
                conceitos de aplicações web, APIs e organização
                de código em projetos pessoais.
              </p>
            </article>

            <article className="about__card">
              <span className="about__card-number">03</span>
              <h3>Inteligência artificial</h3>
              <p>
                Minha formação em Inteligência Artificial
                e Machine Learning amplia meu interesse por
                Python, análise de dados, modelos inteligentes
                e aplicações práticas de IA.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about__section about__section--highlight">
        <div className="about__section-container">
          <p className="about__eyebrow">O que me move</p>

          <h2>Tecnologia com propósito.</h2>

          <p className="about__text">
            Acredito que a tecnologia faz mais sentido quando
            resolve problemas reais. Por isso, gosto da ideia
            de desenvolver ferramentas que simplifiquem tarefas,
            facilitem o acesso à informação e ajudem pessoas e
            negócios a trabalharem melhor.
          </p>

          <p className="about__text">
            Tenho interesse em explorar a conexão entre
            desenvolvimento de software e inteligência artificial,
            criando aplicações que unam funcionalidade,
            organização e experiências agradáveis para quem utiliza.
          </p>

          <p className="about__text">
            Sei que evoluir na área exige tempo, disciplina
            e disposição para enfrentar desafios. Estou nessa
            jornada para aprender continuamente, fortalecer
            minhas habilidades e conquistar oportunidades nas
            quais eu possa contribuir, colaborar e crescer
            profissionalmente.
          </p>
        </div>
      </section>

      <section className="about__section">
        <div className="about__section-container">
          <p className="about__eyebrow">Meu jeito de aprender</p>

          <h2>Conhecimento que sai da teoria.</h2>

          <div className="about__learning">
            <div>
              <h3>Aprendizado contínuo</h3>
              <p>
                Estudo novas ferramentas e conceitos, revisito
                fundamentos e procuro entender não apenas como
                algo funciona, mas também por que funciona.
              </p>
            </div>

            <div>
              <h3>Projetos na prática</h3>
              <p>
                Transformo o aprendizado em aplicações e
                experimentos pessoais. Cada projeto é uma
                oportunidade de praticar, identificar dificuldades
                e melhorar a qualidade do meu código.
              </p>
            </div>

            <div>
              <h3>Resolução de problemas</h3>
              <p>
                Gosto de analisar situações, dividir desafios
                maiores em etapas menores e buscar soluções
                com lógica, persistência e atenção aos detalhes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__closing">
        <div className="about__closing-container">
          <p className="about__eyebrow">Os próximos passos</p>

          <h2>Estou construindo o profissional que quero ser.</h2>

          <p>
            Meu objetivo é crescer como desenvolvedor de software,
            aprofundar meus conhecimentos em inteligência artificial
            e participar de projetos que me desafiem a aprender
            e a entregar soluções cada vez melhores.
          </p>

          <p>
            Este portfólio faz parte dessa jornada: um espaço
            para compartilhar meu aprendizado, meus projetos
            e minha evolução na tecnologia.
          </p>
        </div>
      </section>
    </main>
  )
}

export default About
