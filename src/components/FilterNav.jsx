export default function FilterNav({ filters, projects, active, onChange }) {
  function countForFilter(value) {
    if (value === 'all') return projects.length;
    return projects.filter((p) => p.category === value).length;
  }

  return (
    <nav className="filter-nav" aria-label="Filter projects by type">
      <div className="filter-nav-inner">
        <span className="filter-label" aria-hidden="true">Show:</span>
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-btn${active === f.value ? ' active' : ''}`}
            aria-pressed={active === f.value}
            onClick={() => onChange(f.value)}
          >
            {f.label}
            <span
              className="filter-count"
              aria-label={`${countForFilter(f.value)} projects`}
            >
              {countForFilter(f.value)}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
