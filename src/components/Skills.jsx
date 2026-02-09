const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    items: ['Javascript', 'Python', 'Java'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind', 'Material UI', 'Next.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Spring Boot'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'Cloud/DevOps',
    items: ['GitHub Actions', 'Docker', 'Azure'],
  },
  {
    title: 'Tools',
    items: ['VS Code', 'Git', 'Postman', 'Swagger'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__header reveal">
        <h2>Skills</h2>
        <p>Focused expertise across the full stack and modern tooling.</p>
      </div>
      <div className="skills__matrix">
        {SKILL_GROUPS.map((group) => (
          <article key={group.title} className="skill-band reveal">
            <div className="skill-band__header">
              <h3>{group.title}</h3>
              <span className="skill-band__accent"></span>
            </div>
            <div className="skill-band__list">
              {group.items.map((item) => (
                <div key={item} className="skill-pill">{item}</div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
