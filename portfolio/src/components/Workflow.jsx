const steps = [
  {
    number: "01",
    title: "Comprendre",
    description: "Analyser le besoin et définir les objectifs du projet.",
  },
  {
    number: "02",
    title: "Concevoir",
    description: "Réfléchir à l'architecture, aux données et à l'expérience utilisateur.",
  },
  {
    number: "03",
    title: "Développer",
    description: "Construire les fonctionnalités frontend et backend.",
  },
  {
    number: "04",
    title: "Tester",
    description: "Vérifier le fonctionnement et corriger les problèmes.",
  },
  {
    number: "05",
    title: "Automatiser",
    description: "Utiliser Git, Docker et CI/CD pour fiabiliser le développement.",
  },
  {
    number: "06",
    title: "Déployer",
    description: "Mettre l'application à disposition dans un environnement adapté.",
  },
]

function Workflow() {
  return (
    <section className="workflow">

      <div className="section-container">

        <div className="workflow-header">
          <p className="section-label">
            MA FAÇON DE TRAVAILLER
          </p>

          <h2>
            De l'idée à une application fonctionnelle.
          </h2>

          <p>
            J'aime avancer étape par étape, comprendre le besoin,
            construire une solution propre et améliorer progressivement
            le résultat.
          </p>
        </div>

        <div className="workflow-grid">

          {steps.map((step) => (
            <div className="workflow-step" key={step.number}>

              <span className="workflow-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Workflow