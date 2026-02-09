export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__header reveal">
        <h2>Contact</h2>
        <p>Open to new opportunities.</p>
      </div>
      <div className="contact__grid">
        <div className="contact__panel reveal">
          <h3>Let’s talk</h3>
          <p>
            Prefer a quick chat? Send a direct email or reach out on LinkedIn.
            I usually respond within 24 hours.
          </p>
          <div className="contact__cta">
            <a className="contact-card" href="mailto:aishwarya4672@email.com">
              <span className="contact-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4 6.75h16c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 0 1-1.25 1.25H4A1.25 1.25 0 0 1 2.75 16V8c0-.69.56-1.25 1.25-1.25Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m4.5 8.25 7.5 5 7.5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h4>Email</h4>
                <p>aishwarya4672@email.com</p>
              </div>
            </a>
            <a
              className="contact-card"
              href="https://www.linkedin.com/in/aishwarya-k-s-/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M6.5 9.5h2.5v8H6.5v-8Zm1.25-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.25 3H14v1.3c.3-.6 1.2-1.45 2.8-1.45 2.2 0 3.7 1.2 3.7 4.2V17.5h-2.5v-3.9c0-1.55-.6-2.5-1.8-2.5-1 0-1.6.65-1.85 1.3-.1.25-.1.6-.1.95v4.15h-2.5v-8Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div>
                <h4>LinkedIn</h4>
                <p>Connect on LinkedIn</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
