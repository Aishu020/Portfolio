const PROJECTS = [
  {
    title: 'LifeLens - AI Memory Journal',
    image:
      'https://www.memoreal.in/blog-images/privacy-security.png',
    github: 'https://github.com/Aishu020/LifeLens',
    description:
      'Premium, AI-powered Memory Journal web app with AI insights, mood analytics, and a cinematic timeline experience.',
    tech: ['React', 'Tailwind','Cloudinary storage','SQLite (pure JS via sql.js)'],
  },
  
  {
    title: 'MicroECom',
    image:
      'https://www.entrepreneur.com/wp-content/uploads/sites/2/2013/03/essential-elements-building-ecommerce-website.jpg',
    github: 'https://github.com/Aishu020/MicroECom',
    description:
      'A microservices-based e-commerce platform with authentication, product management, orders, and payments.',
    tech: ['React', 'MUI', 'Express', 'MongoDB', 'Docker'],
  },
  {
    title: 'Digital Time Capsule',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBHBNFvv0KZXfItkhcWeEHQh6_FkFTwsAhA&s',
    github: 'https://github.com/Aishu020/Digital-Time-Capsule-',
    description:
      'A secure web/mobile vault enabling users to encrypt messages and schedule future delivery using time-based access control, ensuring privacy with end-to-end encryption and reliable automated release.',
    tech: ['React','client-side crypto', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__header reveal">
        <h2>Projects</h2>
        <p>Selected work that blends clean UX with powerful backend systems.</p>
      </div>
      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card reveal">
            <div className="project-card__image">
              <img src={project.image} alt={`${project.title} preview`} />
            </div>
            <div className="project-card__body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-card__actions">
                {/* <a className="btn btn--primary" href="#">
                  Live Demo
                </a> */}
                <a
                  className="btn btn--ghost"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="projects__footer reveal">
        <a
          className="projects__more"
          href="https://github.com/Aishu020?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View works →
        </a>
      </div>
    </section>
  );
}
