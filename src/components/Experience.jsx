const EXPERIENCES = [
  {
    role: 'Software Developer Trainee',
    company: 'Appriffy - Digital IT Hub Private Limited, Bangalore',
    period: 'Dec 2024 - Oct 2025',
    highlights: [
      'Designed and enhanced scalable web applications by implementing secure CSV exports, responsive React/Redux interfaces with AWS/Azure cloud integration, and optimizing internal systems, supporting 7K+ users and improving retention, performance, and response efficiency.'
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Athen, Coimbatore',
    period: 'Jan 2023 - Dec 2023',
    highlights: [
      'Led frontend development of a SharePoint SPFx (React) audit tool, integrating MSSQL database operations and .NET backend services on Azure, reducing manual documentation time by 30% while ensuring high data integrity and performance.',
    ],
  },
  // {
  //   role: 'Freelance Web Developer',
  //   company: 'Independent',
  //   period: '2024 - Present',
  //   highlights: [
  //     'Delivered responsive websites for small businesses.',
  //     'Optimized SEO and accessibility for client projects.',
  //   ],
  // },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__header reveal">
        <h2>Experience</h2>
        <p>Hands-on experience across technology and research.</p>
      </div>
      <div className="experience__grid">
        {EXPERIENCES.map((item) => (
          <article key={item.role} className="experience-card reveal">
            <div className="experience-card__header">
              <div>
                <h3>{item.role}</h3>
                <p className="experience-card__company">{item.company}</p>
              </div>
              <span className="experience-card__period">{item.period}</span>
            </div>
            <ul>
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
