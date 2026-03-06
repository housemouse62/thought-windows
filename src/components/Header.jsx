export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="header-name-block">
          <p className="header-eyebrow">hello, my name is</p>
          <h1 className="header-name">
            Ryan <span>Skeels</span>
          </h1>
        </div>
        <div className="header-sidebar">
          <div className="header-tagline">
            <strong>Available &middot; Denver &middot; 2026</strong>
            Operations &amp; Implementation
            <br />
            Web Development
            <br />
            Accessibility
          </div>
          <p className="header-domain">thoughtwindows.com</p>
        </div>
      </div>
      <div className="header-stripe" aria-hidden="true" />
    </header>
  );
}
