function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="section-container">

        <div className="contact-box">

          <div>

            <p className="section-label left">
              UN PROJET ? UNE OPPORTUNITÉ ?
            </p>

            <h2>
              Parlons de votre
              <br />
              prochain projet.
            </h2>

            <p>
              Je suis actuellement à la recherche d'une alternance
              en développement web et serais ravie d'échanger avec vous.
            </p>

          </div>

          <div className="contact-actions">

            <a
              href="mailto:TON_EMAIL@example.com"
              className="primary-button"
            >
              Me contacter →
            </a>

            <a
              href="/cv/CV-Pelagie.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Télécharger mon CV
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact