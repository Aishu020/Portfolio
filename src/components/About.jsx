export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__layout">
        <div className="about__services reveal">
          <span className="about__rail"></span>
          <div className="about__service">
            <span className="about__dot"></span>
            <div className="about__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M4 5.5h16c.7 0 1.25.55 1.25 1.25v9.5c0 .7-.55 1.25-1.25 1.25H4c-.7 0-1.25-.55-1.25-1.25v-9.5c0-.7.55-1.25 1.25-1.25Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 20.5h8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9.5 9.5h5M9.5 12.5h2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h4>Website Development</h4>
            </div>
          </div>
          <div className="about__service">
            <span className="about__dot"></span>
            <div className="about__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M7 4.5h10c.7 0 1.25.55 1.25 1.25v12.5c0 .7-.55 1.25-1.25 1.25H7c-.7 0-1.25-.55-1.25-1.25V5.75c0-.7.55-1.25 1.25-1.25Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 8.5h4M10 11.5h4M10 14.5h2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h4>App Development</h4>
            </div>
          </div>
          <div className="about__service">
            <span className="about__dot"></span>
            <div className="about__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M6.5 6.5h11c.7 0 1.25.55 1.25 1.25v8.5c0 .7-.55 1.25-1.25 1.25h-11c-.7 0-1.25-.55-1.25-1.25v-8.5c0-.7.55-1.25 1.25-1.25Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 10.5h6M9 13.5h4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h4>Website Hosting</h4>
            </div>
          </div>
        </div>
        <div className="about__content reveal">
          <h2>About me</h2>
          <p>
            I started my software journey driven by curiosity about how digital products are built and scaled. Since then, I’ve focused on creating full-stack applications that are fast, secure, and user-centered.
          </p>
          <p>
            I enjoy building from scratch, refining user experiences, and delivering reliable systems that people can trust every day.
          </p>
        </div>
      </div>
    </section>
  );
}
