import illustration from './illustrationimg.png';
import resumePdf from 'C:\\Users\\aishu\\Portfolio\\src\\components\\Aishwarya_Resume.pdf';

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero__content reveal">
        <p className="hero__kicker">Hello, I�m</p>
        <h1 className="hero__title">Aishwarya K S</h1>
        <p className="hero__lead">
          Aspiring Software Developer. Full-stack builder & AI enthusiast. I
          create scalable web experiences with clean UI and reliable systems.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            Say Hello!
          </a>
          <a className="btn btn--ghost" href={resumePdf} download>
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero__visual reveal" aria-hidden="true">
        <img className="hero__illustration" src={illustration} alt="" />
      </div>
    </section>
  );
}
