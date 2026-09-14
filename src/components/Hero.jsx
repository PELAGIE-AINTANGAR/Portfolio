import photoCv from "../assets/photo_cv.JPG";
import cvPdf from "../assets/PELAGIE_AINTANGAR_CV.pdf";

function Hero() {
  return (
    <section id="accueil" className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          ✦ DÉVELOPPEUSE WEB / FULL-STACK
        </span>

        <h1>
          Bonjour, je suis
          <br />
          <span>Pélagie</span> 👋
        </h1>

        <p>
          Je conçois des applications web modernes et utiles
          en combinant développement frontend, backend et outils DevOps.
        </p>

        <div className="hero-buttons">

          <a href="#projets" className="primary-button">
            Voir mes projets →
          </a>

          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            Télécharger mon CV
          </a>

        </div>

        <div className="social-links">

          <a href="https://github.com/PELAGIE-AINTANGAR" target="_blank">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/pelagie-aintangar/" target="_blank">
            LinkedIn
          </a>

          <a href="mailto:pelagie.aintangar01@gmail.com" target="_blank">
            Email
          </a>

        </div>

      </div>

      <div className="hero-image">

        <div className="image-circle">
          <img
            src={photoCv}
            alt="Portrait de Pélagie"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;