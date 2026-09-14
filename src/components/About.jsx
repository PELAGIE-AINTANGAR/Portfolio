function About() {
  return (
    <section id="apropos" className="about">

      <div className="section-container">

        <div className="about-grid">

          {/* Partie gauche */}
          <div className="about-intro">

            <p className="section-label left">
              À PROPOS DE MOI
            </p>

            <h2>
              Développer,
              <br />
              apprendre,
              <br />
              progresser.
            </h2>

            <p className="about-highlight">
              Je suis actuellement en Master 2 Développement Web Full Stack
              à La Plateforme et je recherche une alternance en développement web.
            </p>

          </div>

          {/* Partie droite */}
          <div className="about-content">

            <p>
              Passionnée par le développement web, j'aime comprendre
              comment les applications sont conçues et transformer une
              idée en une solution concrète et fonctionnelle.
            </p>

            <p>
              À travers mes projets, notamment HealthSync et TaskForge,
              je développe mes compétences en frontend, backend,
              bases de données et DevOps.
            </p>

            <p>
              Je suis une personne investie, curieuse, persévérante
              et déterminée. Je cherche aujourd'hui une alternance
              qui me permettra de mettre mes compétences en pratique,
              d'apprendre auprès de professionnels et de continuer
              à progresser.
            </p>

            <div className="about-values">

              <div className="about-value">
                <span>01</span>
                <h3>Curiosité</h3>
                <p>
                  Toujours chercher à comprendre et découvrir de nouvelles
                  technologies.
                </p>
              </div>

              <div className="about-value">
                <span>02</span>
                <h3>Persévérance</h3>
                <p>
                  Ne pas abandonner face à une difficulté et chercher
                  une solution.
                </p>
              </div>

              <div className="about-value">
                <span>03</span>
                <h3>Progression</h3>
                <p>
                  Apprendre continuellement pour devenir une développeuse
                  autonome et compétente.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About