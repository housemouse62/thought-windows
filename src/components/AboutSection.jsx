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
            I spent 11 years building, running, and eventually selling Baere
            Brewing Company in Denver — a small brewery and taproom on South
            Broadway that my business partner and I opened in 2014. I worked
            across the business: production, front-of-house, financial
            management, HR, branding, risk management, regulatory compliance.
            Running a production facility with nearly $500K in annual revenue in
            an unpredictable industry taught me to build systems that work,
            adapt quickly when they don't, and keep communication transparent
            when things get messy.
          </p>

          <p>
            Before the brewery, I spent five years with Jefferson County Open
            Space managing forest restoration projects — writing the plans,
            leading seasonal crews, running equipment, felling trees, and
            rehabbing sites. I also mapped trail systems using GPS and pitched
            the idea of overlaying them on Google Earth for public access (this
            was the mid-2000s; they weren't interested). That work taught me how
            to assess risk in the field, manage complex logistics, and think a
            few steps ahead — all things that became foundational when I
            transitioned into food safety inspection with the City of Denver and
            eventually into running Baere.
          </p>

          <p>
            In 2023, my family and I moved to Valencia, Spain. We've always
            raised our kids as English and Spanish speakers, and we wanted them
            to grow up with deeper cultural fluency — and we wanted to live
            outside the bubble of what we already knew. I've been teaching
            English in a public school here while working toward fluency in
            Spanish myself (currently B1–B2). We're moving back to Denver in
            July 2026.
          </p>

          <p>
            Over the past year I've also rediscovered an old interest: web
            development. I taught myself HTML back in the Geocities era making
            how-to-skateboard pages with blinky text and animated gifs (probably
            1996?), and I've been building that skill back up — this time with
            modern tools and a lot more intention behind it.
          </p>

          <p className="about-cta">
            I'm drawn to work that sits at the intersection of operations,
            systems thinking, and mission-driven impact. If you're building
            something that requires someone who can manage complexity, move fast,
            and care deeply about the work —{" "}
            <a href="mailto:ryan.skeels@gmail.com">let's talk</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
