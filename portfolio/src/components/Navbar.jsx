function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
          Pélagie
        </a>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="/assets/PELAGIE-AINTANGAR-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
        >
          Mon CV
        </a>

      </div>
    </header>
  );
}

export default Navbar;