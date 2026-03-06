import "./AccessibilitySection.css";

export default function AccessibilitySection() {
  return (
    <section aria-labelledby="accessibility-heading">
      <div className="content-header">
        <h2 id="accessibility-heading" className="content-heading">
          Accessibility
        </h2>
      </div>

      <div className="deco-rule" aria-hidden="true">
        <span className="deco-dot" />
        <span className="deco-dot" />
        <span className="deco-dot" />
      </div>

      <div className="a11y-prose">
        <p>
          My grandfather lost most of his vision to Scarlet Fever as a child. By
          the time I knew him, he was living in San Jose, navigating the city
          with a cane and a mental map he'd built over decades. We went out a
          few times when I was young — on the bus, around the neighborhood — and
          I remember being struck by how he moved through the world. He wasn't
          guessing. He was counting: bumps in the pavement, the lurch of train
          tracks, the rhythm of city blocks. He knew when to get off before the
          stop was announced.
        </p>

        <p>
          He never learned Braille. He didn't have much in the way of assistive
          technology. What he had was a system he'd built himself, out of
          attention and necessity. Before I was born, he ran a candy shop —
          making candy and caramel corn by hand. He had a hand in creating the
          smiling G logo for Goodwill. He helped get the curbs cut in San
          Francisco. He could see a little out of the periphery of one eye —
          enough to sit sideways close to an old TV and watch Star Wars in the
          early 90s. I think about him a lot when I think about accessibility.
        </p>

        <p>
          My connection to the disability community deepened over years of
          volunteering with{" "}
          <a
            href="https://www.thewayfaringband.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Wayfaring Band
          </a>
          , a Denver organization founded by Andrea Moore that creates
          opportunities for people with intellectual and developmental
          disabilities to participate in the arts. Baere Brewing was a recurring
          donor and event supporter. It became part of how we thought about the
          brewery's role in the community.
        </p>

        <p>
          Eventually Andrea hired me directly — to build an icon library for
          training slide decks she was creating for the Special Olympics, helping
          people with IDD and their allies navigate local health systems in the
          US and internationally. I also helped design a Public Health Timeline
          that was printed and hung alongside a Disability Rights Timeline at a
          conference event. It was a powerful piece.
        </p>

        <p>
          Working on that icon library changed something for me. I'd seen these
          symbols my whole life — in airports, hospitals, city streets — and
          building them from scratch forced me to understand what they actually
          mean, where they come from, and what's at stake when they're done
          poorly. After that project, I started noticing accommodation
          everywhere. How much there is. How much there isn't.
        </p>

        <div className="a11y-cert">
          <span className="a11y-cert-label">DHS Trusted Tester</span>
          <p>
            That shift led me toward accessibility testing. I studied for and
            passed the DHS Trusted Tester certification exam — a structured
            methodology for evaluating web accessibility against WCAG standards.
            It gave formal language to something I'd been developing informally
            for years.
          </p>
        </div>

        <p>
          Around the same time, I found The Odin Project and fell back into web
          development. I've been working through it systematically, paying extra
          attention to anything accessibility-related — semantic HTML, ARIA,
          keyboard navigation, screen reader behavior. A poetry writing app I've
          been building is where a lot of this is converging. The more I get
          into it, the more I see what's possible from an accessibility
          standpoint.
        </p>

        <p>
          This site is my first project working alongside AI to build and learn
          at the same time, with accessibility as a first principle rather than
          an afterthought. I've been careful throughout not to just ask for
          answers and copy-paste — but to have things explained, get hands-on
          practice, and occasionally walk through a solution. It's been
          especially useful in a curriculum that's famously light on instruction
          and heavy on figuring things out yourself.
        </p>

        <p className="a11y-close">
          Accessibility isn't a feature or a checklist. It's the difference
          between a world someone can move through and one they can't. My
          grandfather taught me that before I had words for it.
        </p>
      </div>
    </section>
  );
}
