const projects = [
  {
    title: "HealthSync",
    description:
      "Application web de gestion et de suivi médical permettant de gérer les patients, les médecins et les rendez-vous.",
    technologies: ["Node.js", "PostgreSQL", "API REST"],
    image: "/images/healthsync.png",
  },
  {
    title: "TaskForge",
    description:
      "Application web de gestion de tâches développée avec une architecture frontend/backend et une chaîne CI/CD.",
    technologies: ["React", "Node.js", "Docker", "CI/CD"],
    image: "/images/taskforge.png",
  },
]

function Projects() {
  return (
    <section id="projets" className="projects">

      <div className="section-container">

        <div className="projects-header">
          <div>
            <p className="section-label left">
              MES PROJETS
            </p>

            <h2>
              Des projets concrets,
              <br />
              une vraie expérience
            </h2>
          </div>

          <a href="#contact" className="projects-link">
            Me contacter →
          </a>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={`Capture d'écran du projet ${project.title}`}
                />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-actions">

                  <a href="#">
                    Voir le projet →
                  </a>

                  <a href="#" className="github-link">
                    GitHub
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects