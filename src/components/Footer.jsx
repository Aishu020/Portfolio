export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner footer__center">
        <p>© 2026 Aishwarya K S. All rights reserved.</p>
        <div className="footer__icons" aria-label="Footer social links">
          <a href="mailto:aishwarya4672@email.com" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
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
          </a>
          <a
            href="https://www.linkedin.com/in/aishwarya-k-s-/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.5 9.5h2.5v8H6.5v-8Zm1.25-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.25 3H14v1.3c.3-.6 1.2-1.45 2.8-1.45 2.2 0 3.7 1.2 3.7 4.2V17.5h-2.5v-3.9c0-1.55-.6-2.5-1.8-2.5-1 0-1.6.65-1.85 1.3-.1.25-.1.6-.1.95v4.15h-2.5v-8Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 3.5a8.5 8.5 0 0 0-2.7 16.57c.43.08.58-.19.58-.42v-1.5c-2.35.52-2.84-1.12-2.84-1.12-.38-.97-.93-1.23-.93-1.23-.77-.53.06-.52.06-.52.85.06 1.3.88 1.3.88.75 1.3 1.98.93 2.46.71.07-.55.3-.93.54-1.14-1.88-.22-3.86-.94-3.86-4.18 0-.92.33-1.67.88-2.26-.09-.22-.38-1.1.08-2.29 0 0 .72-.23 2.36.87a8.2 8.2 0 0 1 4.3 0c1.64-1.1 2.36-.87 2.36-.87.46 1.2.17 2.07.08 2.29.55.59.88 1.34.88 2.26 0 3.25-1.99 3.96-3.88 4.18.3.26.58.78.58 1.58v2.33c0 .24.15.5.59.42A8.5 8.5 0 0 0 12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
