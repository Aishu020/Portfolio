export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero__content reveal">
        <h2 className="hero__kicker">Hello, I'm</h2>
        <h1 className="hero__title">Aishwarya!</h1>
        <p className="hero__lead">
          Full-stack developer building scalable web apps with clean design, secure systems, and AI-powered features.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            Say Hello!
          </a>
          <a className="btn btn--ghost" href="https://drive.google.com/file/d/1yAU469gC69xWxau5GqVD4FS263IVyvcR/view?usp=sharing" aria-label="Download resume">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero__visual reveal" aria-hidden="true">
        <div className="hero__portrait">
          <div className="hero__portrait-bg"></div>
          <div className="hero__portrait-img"></div>
        </div>
      </div>
    </section>
  );
}
