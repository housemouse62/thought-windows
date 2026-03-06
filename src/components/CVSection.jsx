import "./CVSection.css";
import headshot from "../assets/images/headshot.jpeg";

export default function CVSection() {
  return (
    <section aria-label="Curriculum Vitae" className="cv">
      <div className="cv-layout">
        <aside aria-label="Contact and skills" className="contact-skills">
          <img src={headshot} alt="Ryan Skeels" className="headshot" />
          <section aria-labelledby="contact-heading" className="contact">
            <h3 id="contact-heading">Contact</h3>
            <a className="email" href="mailto:ryan.skeels@gmail.com">
              ryan.skeels@gmail.com
            </a>
            <a className="phone" href="tel:+19709014810">
              970-901-4810
            </a>
            <p className="cv-location">Denver, CO (relocating 7/2026)</p>
          </section>

          <section aria-label="skills" className="skills">
            <h4>Operations & Strategy</h4>
            <ul>
              <li>Operations Management</li>
              <li>Business Development</li>
              <li>Project Management</li>
              <li>Financial & Budget Oversight</li>
              <li>Regulatory Compliance & Risk Management</li>
              <li>Policy & Procedure Development</li>
            </ul>

            <h4>Leadership & Management</h4>
            <ul>
              <li>Hiring & Staff Supervision</li>
              <li>HR Administration & Payroll</li>
              <li>Staff Training</li>
            </ul>

            <h4>Technical Systems</h4>
            <ul>
              <li>Web Accessibility Testing (DHS Trusted Tester)</li>
              <li>Web Development (HTML, CSS, JavaScript, React)</li>
              <li>Digital & Visual Communication</li>
            </ul>

            <h4>Language</h4>
            <ul>
              <li>English (Native)</li>
              <li>Spanish (B1 - B2)</li>
            </ul>
          </section>
        </aside>

        <div className="cv-main">
          <a href="/ryan-skeels-cv.pdf" download className="cv-download">
            Download PDF
          </a>
          <section aria-labelledby="summary-heading">
            <h3 id="summary-heading" className="visually-hidden">
              Professional Summary
            </h3>
            <p className="summary">
              Operations Leader & Systems Builder with 15+ years of experience
              across small business leadership, public service, and education.
              Proven expertise in managing $500K+ budgets, navigating
              high-stakes regulatory environments, and implementing resilient
              organizational systems. Currently leveraging a background in
              public health enforcement and business ownership to provide
              practical systems thinking, technical implementation, and steady
              execution for mission-driven organizations.
            </p>
          </section>

          <section aria-labelledby="experience-heading" className="experience">
            <h3 id="experience-heading">Experience</h3>
            <article>
              <h4>English Language Teacher &amp; Tutor</h4>
              <p className="job-meta">
                <span>CEIP San Clemente &amp; Online</span>{" "}
                <span aria-hidden="true"> | </span>
                <span>Sedaví, Valencia, Spain</span>
                <span aria-hidden="true"> | </span>
                <time dateTime="2024-10">October 2024</time> - Present
              </p>
              <ul>
                <li>
                  Facilitate bilingual instruction and knowledge transfer within
                  Spanish-led classrooms, strengthening cross-cultural
                  communication and operational adaptability.
                </li>
              </ul>
            </article>
            <article>
              <h4>Content Designer &amp; Visual Communications Specialist</h4>
              <p className="job-meta">
                <span>Andrea Moore Srts</span>{" "}
                <span aria-hidden="true"> | </span>
                <span>Special Olympics International projects</span>
                <span aria-hidden="true"> | </span>
                <time dateTime="2024-06">June 2024</time> - Present
              </p>
              <ul>
                <li>
                  Created a cohesive icon library and aligned with
                  disability-related vocabulary and curated a visual public
                  health timeline aligned with accessibility standards.
                </li>
                <li>
                  Designed presentation materials and educational slide decks
                  focused on navigating healthcare systems for individuals with
                  developmental disabilities and their advocates, including
                  alt-text for images to support screen reader compatibility.
                </li>
              </ul>
            </article>
            <article>
              <h4 aria-label="Planned Career Break - Family relocation to Spain">
                Planned Career Break | Family relocation to Spain
              </h4>
              <p className="job-meta">
                <span>Denver, Colorado &amp; Valencia, Spain</span>{" "}
                <span aria-hidden="true"> | </span>
                <time dateTime="2024-03">March 2024</time> - Present
              </p>
              <ul>
                <li>
                  Managed sale of Baere Brewing Company, including operational
                  handover, documentation, and staff transition.
                </li>
                <li>
                  Executed international relocation, overseeing visa process and
                  family resettlement logistics.
                </li>
                <li>
                  Completed TEFL certification and 18-month Spanish language
                  immersion; currently teaching in a Spanish public primary
                  school.
                </li>
              </ul>
            </article>
            <article>
              <h4 aria-label="Co-Owner, Co-Founder, Operations Manager">
                Co-Owner | Co-Founder | Operations Manager
              </h4>
              <p className="job-meta">
                <span>Baere Brewing Company</span>
                <span>Denver, Colorado</span>{" "}
                <span aria-hidden="true"> | </span>
                <time dateTime="2012">2012</time> -{" "}
                <time dateTime="2023">2023</time>
              </p>
              <ul>
                <li>
                  Co-founded and operated a craft brewery, overseeing
                  production, retail, and distribution operations in compliance
                  with local, state, and federal regulations.
                </li>
                <li>
                  Directed business development from concept to launch,
                  including site selection, buildout, equipment sourcing, and
                  full operational setup.
                </li>
                <li>
                  Oversaw financial operations and managed ~$500,000 annual cash
                  flow, including budgeting, payroll, accounting, and tax
                  compliance.
                </li>
                <li>
                  Developed and implemented HR policies, hiring procedures, and
                  team management systems to support a collaborative and
                  accountable workplace.
                </li>
                <li>
                  Established internal systems and safety protocols in
                  partnership with CSU Health & Safety to maintain
                  OSHA-compliant operations.
                </li>
                <li>
                  Led company-wide operational pivot during COVID-19,
                  transitioning from on-site service to packaging and
                  distribution, implementing online ordering and revised
                  logistics workflows.
                </li>
                <li>
                  Managed vendor relationships, procurement, and facility
                  operations to ensure production continuity and cost control.
                </li>
                <li>
                  Built community partnerships, including a recurring “Charity
                  of the Month” initiative supporting local nonprofits.
                </li>
              </ul>
            </article>
            <article>
              <h4>Environmental Health Investigator II</h4>
              <p className="job-meta">
                <span>City of Denver Public Health &amp; Environment</span>
                <span aria-hidden="true"> | </span>
                <span>Denver, Colorado</span>{" "}
                <span aria-hidden="true"> | </span>
                <time dateTime="2012">2012</time> -{" "}
                <time dateTime="2014">2014</time>
              </p>
              <ul>
                <li>
                  Conducted regulatory inspections for food manufacturing and
                  retail facilities, ensuring compliance with municipal and
                  state health codes.
                </li>
                <li>
                  Advised business owners on risk mitigation strategies and
                  operational improvements to reduce public health hazards.
                </li>
                <li>
                  Authored detailed inspection reports and enforcement
                  documentation to support corrective action and legal
                  proceedings.
                </li>
                <li>
                  Investigated foodborne illness complaints and public reports,
                  coordinating follow-up actions and compliance measures.
                </li>
                <li>
                  Developed and delivered training programs for new staff and
                  facility operators on regulatory standards and safe operating
                  practices.
                </li>
                <li>
                  Led temporary facility closures and represented the department
                  in formal enforcement and legal processes.
                </li>
              </ul>
            </article>
            <article>
              <h4>Natural Resource Specialist</h4>
              <p className="job-meta">
                <span>Jefferson County Open Space </span>
                <span aria-hidden="true"> | </span>
                <span>Golden, Colorado</span>{" "}
                <span aria-hidden="true"> | </span>
                <time dateTime="2008">2008</time> -{" "}
                <time dateTime="2012">2012</time>
              </p>
              <ul>
                <li>
                  Designed and executed large-scale forest restoration and
                  habitat conservation projects across public lands.
                </li>
                <li>
                  Managed project lifecycles including planning, field
                  implementation, data analysis, and reporting.
                </li>
                <li>
                  Collected and interpreted environmental data to inform
                  resource management decisions and long-term planning.
                </li>
                <li>
                  Supervised and trained seasonal field crews, emphasizing
                  safety protocols, risk mitigation, and equipment stewardship.
                </li>
                <li>
                  Developed operational procedures and training materials to
                  improve internal program efficiency and compliance.
                </li>
                <li>
                  Created and delivered public-facing educational programming
                  and community outreach initiatives.
                </li>
              </ul>
            </article>
          </section>

          <section aria-labelledby="education-heading">
            <h3 id="education-heading">Education</h3>
            <article>
              <h4>
                Colorado State University
                <span className="edu-location">, Fort Collins, Colorado</span>
              </h4>

              <p className="school-meta">
                <span>Bachelors of Science - Forest Management</span>
                <span aria-hidden="true"> | </span>
                <time>2006</time>
              </p>
            </article>
            <article>
              <h4>
                International TEFL Academy
                <span className="edu-location">, Chicago, IL - Online</span>
              </h4>
              <p className="school-meta">
                <span>
                  Teaching English as a Foreign Language Certification{" "}
                </span>
                <span aria-hidden="true"> | </span>
                <time>2023</time>
              </p>
            </article>
            <article>
              <h4>
                Taronja Spanish Language School
                <span className="edu-location">, Valencia, Spain</span>
              </h4>
              <p className="school-meta">
                <span>Continued Learning </span>
                <span aria-hidden="true"> | </span>
                <time>2023 - 2024</time>
              </p>
            </article>
            <article>
              <h4>
                La Pagoda Spanish Language School
                <span className="edu-location">, Valencia, Spain</span>
              </h4>
              <p className="school-meta">
                <span>Continued Learning </span>
                <span aria-hidden="true"> | </span>
                <time>2024 - 2025</time>
              </p>
            </article>
          </section>

          <section aria-labelledby="certs-heading">
            <h3 id="certs-heading">Technology</h3>
            <article>
              <h4>
                Trusted Tester
                <span className="tech-location">, Online</span>
              </h4>
              <p className="tech-meta">
                <span>DHS Web Accessibility Testing Certification</span>
                <span aria-hidden="true"> | </span>
                <time>June 2025</time>
              </p>
            </article>
            <article>
              <h4>
                Full Stack Javascript Course
                <span className="tech-locaiton">, Online</span>
              </h4>
              <p className="tech-meta">
                <span>Self-led Web Development Curriculum</span>
                <span aria-hidden="true"> | </span>
                <time>2025 - Present</time>
              </p>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}
