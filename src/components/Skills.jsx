const skillCategories = [
  {
    title: "Frontend",
    description: "Création d'interfaces web modernes et responsives.",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    title: "Backend",
    description: "Développement d'API et logique métier.",
    skills: ["Node.js", "Express", "API REST"],
  },
  {
    title: "Bases de données",
    description: "Conception et manipulation de données.",
    skills: ["PostgreSQL", "SQL"],
  },
  {
    title: "DevOps",
    description: "Automatisation et environnement de développement.",
    skills: ["Git", "Docker", "GitHub Actions", "CI/CD", "Kubernetes"],
  },
  {
    title: "Outils",
    description: "Outils utilisés pour développer et tester.",
    skills: ["GitHub", "VS Code", "Postman"],
  },
]

function Skills() {
  return (
    <section id="competences" className="skills">

      <div className="section-container">

        <div className="skills-header">

          <p className="section-label">
            MES COMPÉTENCES
          </p>

          <h2>
            Technologies et outils
            <br />
            que j'utilise
          </h2>

          <p>
            Un environnement technique que je développe progressivement
            à travers mes projets et ma formation.
          </p>

        </div>

        <div className="skills-grid">

          {skillCategories.map((category) => (

            <article
              className="skill-card"
              key={category.title}
            >

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="skill-list">

                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills