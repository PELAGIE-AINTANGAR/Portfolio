const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Git",
  "GitHub Actions",
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
                {technology === "Node.js" && "🟢"}
                {technology === "PostgreSQL" && "🐘"}
                {technology === "Docker" && "🐳"}
                {technology === "Git" && "🔀"}
                {technology === "GitHub Actions" && "⚙️"}
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