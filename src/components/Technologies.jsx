const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "GitHub Actions",
  "API REST",
  "CI/CD",
  "Kubernetes",
  "Bootstrap",
]

function Technologies() {
  return (
    <section className="technologies">
      <div className="section-container">

        <p className="section-label">MES TECHNOLOGIES</p>

        <div className="technologies-list">
          {technologies.map((technology) => (
            <div className="technology" key={technology}>
              <div className="technology-icon">
                {technology === "HTML5" && "🌐"}
                {technology === "CSS3" && "🎨"}
                {technology === "JavaScript" && "JS"}
                {technology === "React" && "⚛️"}
                {technology === "Bootstrap" && "📦"}
                {technology === "PHP" && "🐘"}
                {technology === "Node.js" && "🟢"}
                {technology === "PostgreSQL" && "🐘"}
                {technology === "Docker" && "🐳"}
                {technology === "Git" && "🔀"}
                {technology === "GitHub Actions" && "⚙️"};
                {technology === "API REST" && "🔗"}
                {technology === "CI/CD" && "🚀"}
                {technology === "Kubernetes" && "☸️"}
              </div>

              <span>{technology}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Technologies