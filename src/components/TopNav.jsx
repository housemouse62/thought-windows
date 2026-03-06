export default function TopNav({ sections, active, onChange, filterVisible }) {
  return (
    <nav className={`top-nav${filterVisible ? ' top-nav--filter-visible' : ''}`} aria-label="Primary navigation">
      <div className="top-nav-inner">
        {sections.map((section) => (
          <a
            key={section}
            href="#"
            className={active === section ? "active" : ""}
            aria-current={active === section ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              onChange(section);
            }}
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
}
