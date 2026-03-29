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
          My grandfather lost most of his vision to scarlet fever at a young
          age. By the time I knew him, he was living in a small house with my
          grandmother, navigating his life with a well-worn foldable cane and a
          meticulously constructed mental map of the city. We went out in search
          of the best treats in town, taking both a bus and tram - public
          transportation he had been instrumental in making more accessible. I
          remember being amazed at how he led us to our destination without
          hesitation, asking only for me to read the numbers on the buses,
          certainly for no other reason than to involve me in the navigation. He
          counted the bumps in the road, knew the sounds of the city, and had
          built a community with the drivers and regular riders. He was the
          first to his feet as we approached our stop.
        </p>

        <p>
          He spent some time learning braille but had never committed it to
          memory. He didn't have much in the way of assistive technology.
          Instead, he had built his own system based on his needs and it worked
          for him. Before I was born, he had owned and run a candy shop, making
          caramel corn and candy by feel from recipes he knew by heart. He was
          an active voice in disability advocacy, helping bring curb cuts to San
          Francisco, as well as wheelchair lifts, ramps, and more. He also had a
          hand in the creation of the smiling "G" logo for Goodwill and lent out
          a warehouse to The Beach Boys, Janis Joplin, and other local musicians
          for free. I think about him when I think about accessibility and
          community building.
        </p>

        <p>
          My connection to the disability community was renewed when I met my
          partner and visited her at Adam's Camp in Winter Park, where she
          worked supporting weekly excursions for campers with intellectual and
          developmental disabilities (IDD). This connection deepened over the
          years through volunteering at{" "}
          <a
            href="https://www.thewayfaringband.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Wayfaring Band
          </a>{" "}
          events, a Denver organization co-founded by Andrea Moore that creates
          opportunities for people with IDD to travel locally and
          internationally. The Wayfaring Band kicked off our
          nonprofit-of-the-month charity program at Baere Brewing Company, and
          we supported their fundraising events by pouring our beer and sourcing
          beverages from other like-minded local producers. It became part of
          how we thought about the brewery's role in the community.
        </p>

        <p>
          Eventually, Andrea hired me directly to build an icon library and
          write alt-text for slide decks she was creating for Special Olympics
          International, helping people with IDD and their allies navigate local
          healthcare systems in the U.S. and internationally. I also helped
          design a Public Health Timeline that was printed and displayed
          alongside a Disability Rights Timeline at a conference. It was an
          eye-opening project and a powerful piece.
        </p>

        <p>
          Working on the icon library changed something for me. I had seen many
          of these symbols my whole life—in airports, hospitals, city
          streets—but building the library from scratch forced me to understand
          their meaning, where they come from, and what's at stake when they're
          missing or poorly used. I had noticed accessibility and accommodation
          before—and the lack thereof—but now it felt as if another curtain had
          been lifted.
        </p>

        <div className="a11y-cert">
          <span className="a11y-cert-label">DHS Trusted Tester</span>
          <p>
            That shift led me toward accessibility testing. I studied for and
            passed the DHS Trusted Tester certification exam—a structured
            methodology for evaluating web accessibility against WCAG standards.
            It gave formality to this thing I had been developing informally for
            years.
          </p>
        </div>

        <p>
          Around this same time, I found The Odin Project and returned to web
          development, a hobby I had dabbled in on and off since building a
          how-to-skateboard Geocities website with self-taught HTML back in the
          late '90s. I've been working through the curriculum systematically,
          taking extra time to focus on accessibility-related topics—semantic
          HTML, ARIA, keyboard navigation, and screen reader behavior. I've been
          building a poetry-writing app with an accessibility-first mindset and
          am increasingly inspired by how user experience and technology are
          converging in the process.
        </p>

        <p>
          I look forward to where this learning leads as I continue exploring
          what’s possible within the world of both technological and real-world
          accessibility support systems.
        </p>

        <p className="a11y-close">
          Accessibility isn't a feature or a checklist. It really is the
          difference between a world someone can move through and one they
          can't. My grandfather taught me that long before I had words for it.
        </p>
      </div>
    </section>
  );
}
