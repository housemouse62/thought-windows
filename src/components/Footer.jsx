export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <span className="footer-brand">ThoughtWindows &mdash; Ryan Skeels</span>
        <ul className="footer-links" role="list" aria-label="External links">
          <li>
            <a
              href="https://github.com/housemouse62"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ryan-skeels62/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href="mailto:ryan.skeels@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
