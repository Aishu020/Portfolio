const CERTIFICATIONS = [
  {
    title: 'Gemini Certified University Student',
    issuer: 'Google for Education - 2026',
  },
  {
    title: 'AI Fundamentals with IBM SkillsBuild',
    issuer: 'Cisco Networking Academy - 2026',
  },
  {
    title: 'Microsoft: Copilot Foundations',
    issuer: 'Simplilearn - 2026',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="section__header reveal">
        <h2>Certifications</h2>
        <p>Continuous learning and verified expertise.</p>
      </div>
      <div className="certifications__grid">
        {CERTIFICATIONS.map((cert) => (
          <article key={cert.title} className="card reveal">
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </article>
        ))}
      </div>
      <div className="certifications__footer reveal">
        <a className="certifications__more" href="https://drive.google.com/drive/folders/1V5krTw-S5x_1nWRn4A_1uCyecw4_HWrp?usp=sharing" target="_blank" rel="noreferrer">
          View more →
        </a>
      </div>
    </section>
  );
}
