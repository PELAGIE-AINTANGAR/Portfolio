function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <a href="#accueil" className="footer-logo">
            Pélagie
          </a>

          <p>
            Développeuse Web / Full-Stack
          </p>
        </div>

        <div className="footer-links">

          <a href="#projets">
            Projets
          </a>

          <a href="#competences">
            Compétences
          </a>

          <a href="#apropos">
            À propos
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/PELAGIE-AINTANGAR"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pelagie-aintangar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Pélagie. Tous droits réservés.
      </div>

    </footer>
  )
}

export default Footer