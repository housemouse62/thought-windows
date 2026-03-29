import "./AboutSection.css";
import headshot from "../assets/images/headshot.jpeg";

export default function AboutSection() {
  return (
    <section aria-labelledby="about-heading">
      <div className="content-header">
        <h2 id="about-heading" className="content-heading">
          About
        </h2>
      </div>

      <div className="deco-rule" aria-hidden="true">
        <span className="deco-dot" />
        <span className="deco-dot" />
        <span className="deco-dot" />
      </div>

      <div className="about-layout">
        <aside className="about-sidebar">
          <img src={headshot} alt="Ryan Skeels" className="about-headshot" />
          <p className="about-location">Denver, CO</p>
          <p className="about-location-sub">Returning July 2026</p>
        </aside>

        <div className="about-prose">
          <p>
            I spent 11 years co-founding, conceiving, building, running, and
            eventually selling Baere Brewing Company in Denver, Colorado—a small
            brewery and taproom on South Broadway that my business partner and I
            opened in 2014. I worked across the business: production,
            front-of-house, financial management, HR, branding, risk management,
            and regulatory compliance. Running a production facility alongside a
            busy taproom with a nearly $500K budget in an unpredictable industry
            taught me to build systems that work, adapt quickly when they don't,
            and keep communication transparent—particularly when things get
            messy.
          </p>

          <p>
            Before the brewery, I spent five years working for Jefferson County
            Open Space, managing forest health and restoration projects—writing
            plans, training and leading seasonal crews, running heavy equipment,
            felling trees, and rehabbing sites. This work taught me how to
            support teams, assess risk in the field, manage complex logistics,
            and think a few steps ahead.
          </p>

          <p>
            I later brought these skills into my role with the City of Denver as
            a food safety inspector, where I managed my own inspection schedule
            across a large portfolio of businesses, documented compliance
            findings, and worked directly with owners and operators to create
            and adjust their systems in realistic and practical ways to meet
            public health standards. That experience honed my ability to
            communicate clearly and patiently, enforce structure where needed,
            and balance consistency with day-to-day realities—all of which
            carried directly into running Baere.
          </p>

          <p>
            n 2023, my family and I moved to Valencia, Spain. We raised our
            children to be English and Spanish speakers, and we wanted them to
            experience living in another place and develop a deeper cultural
            understanding and fluency. We also wanted to step outside our own
            bubble, get uncomfortable, and learn to navigate a world beyond what
            we knew. I've been teaching English in a public school here while
            working toward fluency in Spanish myself, currently at an
            intermediate level (B1-B2). Once the school year is finished, we'll
            be moving back to Denver in July 2026.
          </p>

          <p>
            Over the past year, I've also rediscovered an old interest: web
            development. I've been a computer enthusiast for as long as I can
            remember—loading and playing word games on my dad's Apple II,
            playing old MS-DOS games, passing around shareware disks, and
            building custom levels with the Duke Nukem level editor. I taught
            myself HTML back in the GeoCities era, making how-to-skateboard
            pages with blinking text and animated GIFs, and I've been building
            that skill back up—this time with modern tools and a lot more
            intention behind it.
          </p>

          <p className="about-cta">
            I'm drawn to work that brings together systems thinking, operational
            clarity, and people doing meaningful work. I'm looking for
            opportunities that involve managing complexity with creative and
            practical solutions, moving quickly but methodically, and staying
            present in the details. If you're interested in working together—
            <br /> <a href="mailto:ryan.skeels@gmail.com">I'd love to talk.</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
