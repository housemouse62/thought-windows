import { useState, useEffect } from "react";
import "./CVSection.css";
import headshot from "../assets/images/headshot.jpeg";

const HASH_TO_VIEW = {
  "#program-manager": "program-manager",
  "#onboarding-manager": "onboarding-manager",
  "#full-history": "full-history",
};

const VIEW_TO_HASH = {
  "program-manager": "#program-manager",
  "onboarding-manager": "#onboarding-manager",
  "full-history": "#full-history",
};

function getViewFromHash() {
  return HASH_TO_VIEW[window.location.hash] || "program-manager";
}

export default function CVSection() {
  const [view, setView] = useState(getViewFromHash);

  function handleViewChange(newView) {
    setView(newView);
    window.history.replaceState(null, "", VIEW_TO_HASH[newView]);
  }

  useEffect(() => {
    function onHashChange() {
      setView(getViewFromHash());
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isProgramManager = view === "program-manager";
  const isOnboardingManager = view === "onboarding-manager";
  const isFullHistory = view === "full-history";

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
            <p className="cv-location">
              Denver, CO (relocating 7/2026)
              <br />
              Remote available from June 1
            </p>
          </section>

          <section aria-label="skills" className="skills">
            {isProgramManager && (
              <>
                <h4>Program & Operations Management</h4>
                <ul>
                  <li>Cross-functional program leadership</li>
                  <li>Process design & improvement</li>
                  <li>Change management & tool adoption</li>
                  <li>SOP & documentation development</li>
                  <li>Vendor & stakeholder management</li>
                  <li>Event & logistics operations</li>
                  <li>Financial & budget oversight (~$500K)</li>
                  <li>Regulatory compliance & risk management</li>
                </ul>

                <h4>Tools</h4>
                <ul>
                  <li>Slack (administered)</li>
                  <li>Google Workspace (Sheets, Docs, Drive, Calendar)</li>
                  <li>QuickBooks</li>
                  <li>Adobe Illustrator & Photoshop</li>
                  <li>Canva</li>
                </ul>

                <h4>AI in Practice</h4>
                <ul>
                  <li>Claude, ChatGPT, Gemini</li>
                  <li>Documentation & summarization</li>
                  <li>Research & workflow acceleration</li>
                </ul>

                <h4>Technical</h4>
                <ul>
                  <li>Web Accessibility Testing (DHS Trusted Tester / WCAG)</li>
                  <li>HTML, CSS, JavaScript, React, Node.js, SQL</li>
                  <li>Alt-text, ARIA, semantic HTML, screen reader testing</li>
                </ul>
              </>
            )}

            {isOnboardingManager && (
              <>
                <h4>Training & Customer Enablement</h4>
                <ul>
                  <li>Onboarding program design & delivery</li>
                  <li>Training material & SOP development</li>
                  <li>Cross-cultural communication</li>
                  <li>Change management & tool adoption</li>
                  <li>Customer success & relationship management</li>
                  <li>Multilingual instruction & support</li>
                  <li>Process design & improvement</li>
                  <li>Cross-functional collaboration</li>
                </ul>

                <h4>Tools</h4>
                <ul>
                  <li>Slack (administered)</li>
                  <li>Google Workspace (Sheets, Docs, Drive, Calendar)</li>
                  <li>QuickBooks</li>
                  <li>Adobe Illustrator & Photoshop</li>
                  <li>Canva</li>
                </ul>

                <h4>AI in Practice</h4>
                <ul>
                  <li>Claude, ChatGPT, Gemini</li>
                  <li>Documentation & summarization</li>
                  <li>Research & workflow acceleration</li>
                </ul>

                <h4>Technical</h4>
                <ul>
                  <li>Web Accessibility Testing (DHS Trusted Tester / WCAG)</li>
                  <li>HTML, CSS, JavaScript, React, Node.js, SQL</li>
                  <li>Alt-text, ARIA, semantic HTML, screen reader testing</li>
                </ul>
              </>
            )}

            {isFullHistory && (
              <>
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
                  <li>Web Development (HTML, CSS, JavaScript, React, SQL)</li>
                  <li>
                    Database Management: Relational Database Design & Querying
                  </li>
                  <li>Digital & Visual Communication</li>
                </ul>
              </>
            )}

            <h4>Language</h4>
            <ul>
              <li>English (Native)</li>
              <li>Spanish (B1 – B2)</li>
            </ul>
          </section>
        </aside>

        <div className="cv-main">
          <div className="cv-controls">
            <div className="cv-toggles">
              <button
                className={`cv-toggle-btn${isProgramManager ? " active" : ""}`}
                onClick={() => handleViewChange("program-manager")}
              >
                Program Manager
              </button>
              <button
                className={`cv-toggle-btn${isOnboardingManager ? " active" : ""}`}
                onClick={() => handleViewChange("onboarding-manager")}
              >
                Onboarding Manager
              </button>
              <button
                className={`cv-toggle-btn${isFullHistory ? " active" : ""}`}
                onClick={() => handleViewChange("full-history")}
              >
                Full History
              </button>
            </div>
            <a
              href={
                isProgramManager
                  ? "/RSkeels CV Program.pdf"
                  : isOnboardingManager
                    ? "/RSkeels Onboarding CV.pdf"
                    : "/ryan-skeels-cv.pdf"
              }
              download
              className="cv-download"
            >
              ↓ Download PDF
            </a>
          </div>

          <section aria-labelledby="summary-heading">
            <h3 id="summary-heading" className="visually-hidden">
              Professional Summary
            </h3>
            {isProgramManager && (
              <p className="summary">
                Operations & program manager with 15+ years of experience
                designing and leading programs across small business, public
                health, and field operations. Known for bringing structure to
                ambiguous environments — building systems, improving workflows,
                and enabling teams to operate efficiently and independently.
                Experienced in cross-functional coordination, process design,
                tool implementation, and change management. Actively developing
                skills in web development and accessibility.
              </p>
            )}
            {isOnboardingManager && (
              <p className="summary">
                Operations and training leader with 15+ years of experience
                helping people succeed with complex systems — writing the
                materials, delivering the information, and building the
                operational infrastructure that makes it all scale. Known for
                adapting to the audience, communicating across language and
                cultural barriers, and staying present while people figure it
                out. Experienced in cross-functional coordination, process
                design, tool implementation, and change management. Actively
                developing skills in web development and accessibility.
              </p>
            )}
            {isFullHistory && (
              <p className="summary">
                I'm an operations leader & systems builder with 15+ years of
                experience across small business leadership, public service, and
                education. I have proven expertise in managing $500K+ budgets,
                navigating high-stakes regulatory environments, and implementing
                responsive and resilient organizational systems. I'm currently
                seeking to leverage a background in creative solutions, business
                ownership and management, and operational oversight to provide
                practical systems thinking, technical implementation, and
                continuous improvement for people-first organizations.
              </p>
            )}
          </section>

          {isProgramManager && (
            <section aria-labelledby="programs-heading" className="experience">
              <h3 id="programs-heading">
                Selected Programs & Operational Impact
              </h3>

              <article>
                <h4>COVID-19 Operational Pivot</h4>
                <p>
                  Led overnight transition from a 95% over-the-bar sales model
                  to full online ordering and to-go operation, including a
                  complete rebuild of the production setup. Coordinated tool
                  integration, vendor communication, and staff adoption in real
                  time under rapidly changing conditions. Emerged with the
                  entire team intact, an expanded product footprint, and a
                  larger customer base.
                </p>
              </article>

              <article>
                <h4>POS & Time-Tracking System Implementation</h4>
                <p>
                  Led evaluation, rollout, and staff adoption of two successive
                  POS systems and a new time-tracking platform. Managed
                  resistance to change, coordinated training, and integrated new
                  tools with online ordering workflows — improving operational
                  alignment across in-person and digital channels.
                </p>
              </article>

              <article>
                <h4>Operational Documentation & Systems Program</h4>
                <p>
                  Designed SOPs, checklists, and tiered Google Drive
                  architecture enabling independent team execution across
                  scheduling, onboarding, production, and compliance — reducing
                  reliance on owner intervention and improving consistency
                  across a 10-person team.
                </p>
              </article>

              <article>
                <h4>Production Workflow Management System</h4>
                <p>
                  Built and managed tracking systems for 12+ concurrent
                  production workflows across independent daily schedules.
                  Maintained operational continuity through daily coordination,
                  adjustment, and cross-team alignment in a constraint-heavy
                  environment.
                </p>
              </article>
            </section>
          )}

          {isOnboardingManager && (
            <section
              aria-labelledby="enablement-heading"
              className="experience"
            >
              <h3 id="enablement-heading">Training & Enablement Highlights</h3>

              <article>
                <h4>Regulatory Onboarding — Denver's food industry</h4>
                <p>
                  Worked across Denver's diverse restaurant and food service
                  community, onboarding operators from all over the world onto
                  complex public health regulatory requirements. Developed
                  compliance materials in plain language — procedural guides,
                  temperature logs, kitchen signage — tailored to operators with
                  varying levels of English proficiency, building genuine
                  understanding.
                </p>
              </article>

              <article>
                <h4>System Rollout & Staff Training — Baere Brewing</h4>
                <p>
                  Led evaluation, rollout, and staff training for two successive
                  POS systems, a new time-tracking platform and evolving
                  production procedures. Built training documentation and
                  standard operating procedures, delivered hands-on sessions,
                  troubleshot in real time, and managed resistance to change —
                  driving successful adoption across a 10-person team.
                </p>
              </article>

              <article>
                <h4>Technical Equipment Training — Jeffco Open Space</h4>
                <p>
                  Developed training materials and delivered hands-on training
                  for seasonal field crews on chainsaw operation, heavy
                  machinery, and equipment maintenance — adapting instruction to
                  varying experience levels and ensuring safety compliance
                  across multiple concurrent projects.
                </p>
              </article>

              <article>
                <h4>
                  Accessibility-Focused Educational Materials — Special Olympics
                </h4>
                <p>
                  Designed and developed educational materials for Special
                  Olympics International, including accessible icon libraries,
                  visual public health timelines, and slide decks helping
                  individuals with developmental disabilities and their allies
                  navigate healthcare systems — applying user-centered design
                  throughout.
                </p>
              </article>
            </section>
          )}

          <section aria-labelledby="experience-heading" className="experience">
            <h3 id="experience-heading">Experience</h3>

            {isProgramManager && (
              <>
                <article>
                  <h4 aria-label="Co-Owner, Co-Founder, Operations Manager">
                    Co-Owner | Co-Founder | Operations Manager
                  </h4>
                  <p className="job-meta">
                    <span>Baere Brewing Company</span>
                    <span aria-hidden="true"> | </span>
                    <span>Denver, Colorado</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2012">2012</time> —{" "}
                    <time dateTime="2023">2023</time>
                  </p>
                  <p className="job-note">
                    Featured — most relevant to this role
                  </p>
                  <ul>
                    <li>
                      Led end-to-end operations for a 10-person production and
                      hospitality business, designing programs and systems that
                      enabled the organization to scale while maintaining
                      consistency, quality, and compliance
                    </li>
                    <li>
                      Managed a multi-track production system with 12+
                      concurrent workflows, each requiring daily tracking,
                      adjustment, and cross-team coordination
                    </li>
                    <li>
                      Led implementation of two successive POS systems and a new
                      time-tracking platform — managing rollout, staff training,
                      and adoption; navigated resistance and drove successful
                      transition
                    </li>
                    <li>
                      Spearheaded COVID-19 operational pivot: launched online
                      ordering and new fulfillment workflows, integrated tools,
                      and coordinated across vendors, staff, and evolving
                      regulatory requirements
                    </li>
                    <li>
                      Built and maintained operational tracking systems (Google
                      Sheets, QuickBooks) for production scheduling, financials,
                      and inventory — improving visibility and decision-making
                    </li>
                    <li>
                      Administered Slack as the team's primary communication
                      platform from 2016, managing channels, workflows, and
                      information flow across staff and operations
                    </li>
                    <li>
                      Designed SOPs, checklists, and shared documentation
                      systems enabling independent team execution and reducing
                      operational friction
                    </li>
                    <li>
                      Planned and executed recurring large-scale public events,
                      managing logistics, vendors, staffing, and timelines
                    </li>
                    <li>
                      Oversaw ~$500K annual budget including payroll,
                      accounting, tax compliance, and financial reporting
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>
                    Content Designer &amp; Visual Communications Specialist
                  </h4>
                  <p className="job-meta">
                    <span>Andrea Moore Arts</span>
                    <span aria-hidden="true"> | </span>
                    <span>Special Olympics International projects</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2024-06">June 2024</time> — Present
                  </p>
                  <ul>
                    <li>
                      Developed accessible icon libraries, visual timelines, and
                      educational slide decks for public health and disability
                      advocacy projects
                    </li>
                    <li>
                      Applied WCAG accessibility standards including alt-text,
                      semantic structure, and screen reader considerations
                      throughout all deliverables
                    </li>
                    <li>
                      Collaborated across stakeholders to create clear,
                      user-centered communication tools
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>English Language Teacher &amp; Tutor</h4>
                  <p className="job-meta">
                    <span>CEIP San Clemente &amp; Online</span>
                    <span aria-hidden="true"> | </span>
                    <span>Sedaví, Valencia, Spain</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2024-10">October 2024</time> — Present
                  </p>
                  <ul>
                    <li>
                      Coordinated instruction across multiple classrooms and age
                      groups, adapting materials and schedules dynamically
                    </li>
                    <li>
                      Used AI tools (Claude, ChatGPT) to streamline lesson
                      planning, content generation, and workflow efficiency
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>Environmental Health Investigator II</h4>
                  <p className="job-meta">
                    <span>City of Denver Public Health &amp; Environment</span>
                    <span aria-hidden="true"> | </span>
                    <span>Denver, Colorado</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2012">2012</time> —{" "}
                    <time dateTime="2014">2014</time>
                  </p>
                  <ul>
                    <li>
                      Managed a self-directed inspection program, tracking
                      compliance deadlines, follow-ups, and enforcement actions
                      across a large facility portfolio with no administrative
                      support
                    </li>
                    <li>
                      Authored detailed inspection reports and enforcement
                      documentation used in formal regulatory and legal
                      proceedings
                    </li>
                    <li>
                      Delivered training to incoming staff and facility
                      operators on regulatory standards and operational
                      compliance
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>Natural Resource Specialist</h4>
                  <p className="job-meta">
                    <span>Jefferson County Open Space</span>
                    <span aria-hidden="true"> | </span>
                    <span>Golden, Colorado</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2008">2008</time> —{" "}
                    <time dateTime="2012">2012</time>
                  </p>
                  <ul>
                    <li>
                      Supervised and coordinated seasonal field crews of 6–8
                      across multiple concurrent projects — managing scheduling,
                      workload balancing, and resource allocation
                    </li>
                    <li>
                      Collected and interpreted environmental data to inform
                      resource management decisions and long-term planning
                    </li>
                  </ul>
                </article>
              </>
            )}

            {isOnboardingManager && (
              <>
                <article>
                  <h4 aria-label="Co-Owner, Co-Founder, Operations Manager">
                    Co-Owner | Co-Founder | Operations Manager
                  </h4>
                  <p className="job-meta">
                    <span>Baere Brewing Company</span>
                    <span aria-hidden="true"> | </span>
                    <span>Denver, Colorado</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2012">2012</time> —{" "}
                    <time dateTime="2023">2023</time>
                  </p>
                  <ul>
                    <li>
                      Conceived, built, ran, and eventually sold a respected
                      production and hospitality business over the course of
                      twelve years — designing the systems, training the team,
                      and building the documentation that made it run
                      independently.
                    </li>
                    <li>
                      Wrote all training documentation and SOPs across every
                      role in the business — front of house, back of house, and
                      production — enabling independent execution and consistent
                      onboarding of new staff
                    </li>
                    <li>
                      Led implementation of two successive POS systems and a new
                      time-tracking platform — building training, delivering
                      sessions, troubleshooting in real time, and driving
                      adoption across the team
                    </li>
                    <li>
                      Administered Slack as the team's primary communication
                      platform from 2016, managing channels, workflows, and
                      information flow across staff and operations
                    </li>
                    <li>
                      Spearheaded COVID-19 operational pivot: launched online
                      ordering and new fulfillment workflows, trained staff on
                      new processes in real time, and coordinated across vendors
                      and evolving regulatory requirements
                    </li>
                    <li>
                      Built and maintained operational tracking systems (Google
                      Sheets, QuickBooks) for production scheduling, financials,
                      and inventory — improving visibility and decision-making
                    </li>
                    <li>
                      Oversaw ~$500K annual budget including payroll,
                      accounting, tax compliance, and financial reporting
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>English Language Teacher &amp; Tutor</h4>
                  <p className="job-meta">
                    <span>CEIP San Clemente &amp; Online</span>
                    <span aria-hidden="true"> | </span>
                    <span>Sedaví, Valencia, Spain</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2024-10">October 2024</time> — Present
                  </p>
                  <ul>
                    <li>
                      Deliver bilingual instruction across multiple classrooms
                      and age groups, adapting materials, pacing, and approach
                      to meet students where they are
                    </li>
                    <li>
                      Develop lesson plans, educational materials, and
                      assessment tools tailored to varying proficiency levels
                      and learning needs
                    </li>
                    <li>
                      Use AI tools (Claude, ChatGPT) to streamline content
                      generation, lesson planning, and workflow efficiency
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>
                    Content Designer &amp; Visual Communications Specialist
                  </h4>
                  <p className="job-meta">
                    <span>Andrea Moore Arts</span>
                    <span aria-hidden="true"> | </span>
                    <span>Special Olympics International projects</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2024-06">June 2024</time> — Present
                  </p>
                  <ul>
                    <li>
                      Created a cohesive icon library aligned with
                      disability-related vocabulary and curated a visual public
                      health timeline aligned with accessibility standards
                    </li>
                    <li>
                      Designed presentation materials and educational slide
                      decks focused on navigating healthcare systems for
                      individuals with developmental disabilities and their
                      allies, including alt-text for images to support screen
                      reader compatibility
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>Business Sale &amp; Relocation to Spain</h4>
                  <p className="job-meta">
                    <span>Denver, CO &amp; Valencia, Spain</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2023-03">March 2023</time> — Present
                  </p>
                  <ul>
                    <li>
                      Managed sale and operational handover of Baere Brewing
                      Company; relocated family to Valencia, Spain for a planned
                      period of language immersion and cross-cultural experience
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>Environmental Health Investigator II</h4>
                  <p className="job-meta">
                    <span>City of Denver Public Health &amp; Environment</span>
                    <span aria-hidden="true"> | </span>
                    <span>Denver, Colorado</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2012">2012</time> —{" "}
                    <time dateTime="2014">2014</time>
                  </p>
                  <ul>
                    <li>
                      Worked across Denver's diverse business community,
                      communicating regulatory requirements and developing
                      compliance materials — procedural guides, temperature
                      logs, kitchen signage — for operators with varying levels
                      of English proficiency
                    </li>
                    <li>
                      Authored training video scripts and developed training
                      programs for new staff and facility operators on
                      regulatory standards and safe operating practices
                    </li>
                    <li>
                      Managed a self-directed inspection program, tracking
                      compliance deadlines, follow-ups, and enforcement actions
                      across a large facility portfolio with no administrative
                      support
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>Natural Resource Specialist</h4>
                  <p className="job-meta">
                    <span>Jefferson County Open Space</span>
                    <span aria-hidden="true"> | </span>
                    <span>Golden, Colorado</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2008">2008</time> —{" "}
                    <time dateTime="2012">2012</time>
                  </p>
                  <ul>
                    <li>
                      Developed training materials and delivered hands-on
                      training for seasonal crews on chainsaw operation, heavy
                      machinery, and equipment maintenance
                    </li>
                    <li>
                      Supervised and coordinated field crews of 6–8 across
                      multiple concurrent projects, balancing work site
                      requirements, team needs, and individual strengths
                    </li>
                    <li>
                      Planned, designed, executed, and reported on large-scale
                      forest restoration and habitat conservation projects
                      across public lands
                    </li>
                  </ul>
                </article>
              </>
            )}

            {isFullHistory && (
              <>
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
                      Facilitate bilingual instruction and knowledge transfer
                      within Spanish-led classrooms, strengthening
                      cross-cultural communication and operational adaptability
                    </li>
                  </ul>
                </article>

                <article>
                  <h4>
                    Content Designer &amp; Visual Communications Specialist
                  </h4>
                  <p className="job-meta">
                    <span>Andrea Moore Arts</span>{" "}
                    <span aria-hidden="true"> | </span>
                    <span>Special Olympics International projects</span>
                    <span aria-hidden="true"> | </span>
                    <time dateTime="2024-06">June 2024</time> - Present
                  </p>
                  <ul>
                    <li>
                      Created a cohesive icon library and aligned with
                      disability-related vocabulary and curated a visual public
                      health timeline aligned with accessibility standards
                    </li>
                    <li>
                      Designed presentation materials and educational slide
                      decks focused on navigating healthcare systems for
                      individuals with developmental disabilities and their
                      advocates, including alt-text for images to support screen
                      reader compatibility
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
                      Managed sale of Baere Brewing Company, including
                      operational handover, documentation, and staff transition
                    </li>
                    <li>
                      Executed international relocation, overseeing visa process
                      and family resettlement logistics
                    </li>
                    <li>
                      Completed TEFL certification and 18-month Spanish language
                      immersion; currently teaching in a Spanish public primary
                      school
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
                      production, retail, and distribution operations in
                      compliance with local, state, and federal regulations
                    </li>
                    <li>
                      Directed business development from concept to launch,
                      including site selection, buildout, equipment sourcing,
                      and full operational setup
                    </li>
                    <li>
                      Oversaw financial operations and managed ~$500,000 annual
                      cash flow, including budgeting, payroll, accounting, and
                      tax compliance
                    </li>
                    <li>
                      Developed and implemented HR policies, hiring procedures,
                      and team management systems to support a collaborative and
                      accountable workplace
                    </li>
                    <li>
                      Established internal systems and safety protocols in
                      partnership with CSU Health & Safety to maintain
                      OSHA-compliant operations
                    </li>
                    <li>
                      Led company-wide operational pivot during COVID-19,
                      transitioning from on-site service to packaging and
                      distribution, implementing online ordering and revised
                      logistics workflows
                    </li>
                    <li>
                      Managed vendor relationships, procurement, and facility
                      operations to ensure production continuity and cost
                      control
                    </li>
                    <li>
                      Built community partnerships, including a recurring
                      "Charity of the Month" initiative supporting local
                      nonprofits
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
                      Conducted regulatory inspections for food manufacturing
                      and retail facilities, ensuring compliance with municipal
                      and state health codes
                    </li>
                    <li>
                      Advised business owners on risk mitigation strategies and
                      operational improvements to reduce public health hazards
                    </li>
                    <li>
                      Authored detailed inspection reports and enforcement
                      documentation to support corrective action and legal
                      proceedings
                    </li>
                    <li>
                      Investigated foodborne illness complaints and public
                      reports, coordinating follow-up actions and compliance
                      measures
                    </li>
                    <li>
                      Developed and delivered training programs for new staff
                      and facility operators on regulatory standards and safe
                      operating practices
                    </li>
                    <li>
                      Led temporary facility closures and represented the
                      department in formal enforcement and legal processes
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
                      habitat conservation projects across public lands
                    </li>
                    <li>
                      Managed project lifecycles including planning, field
                      implementation, data analysis, and reporting
                    </li>
                    <li>
                      Collected and interpreted environmental data to inform
                      resource management decisions and long-term planning
                    </li>
                    <li>
                      Supervised and trained seasonal field crews, emphasizing
                      safety protocols, risk mitigation, and equipment
                      stewardship
                    </li>
                    <li>
                      Developed operational procedures and training materials to
                      improve internal program efficiency and compliance
                    </li>
                    <li>
                      Created and delivered public-facing educational
                      programming and community outreach initiatives
                    </li>
                  </ul>
                </article>
              </>
            )}
          </section>

          <section aria-labelledby="education-heading">
            <h3 id="education-heading">Education</h3>
            <article>
              <h4 class="firstEdu">
                Colorado State University
                <span className="edu-location">, Fort Collins, Colorado</span>
              </h4>
              <p className="school-meta">
                <span>Bachelor of Science — Forest Management</span>
                <span aria-hidden="true"> | </span>
                <time>2006</time>
              </p>
            </article>
            <article>
              <h4>
                International TEFL Academy
                <span className="edu-location">, Chicago, IL — Online</span>
              </h4>
              <p className="school-meta">
                <span>
                  Teaching English as a Foreign Language Certification
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
                <span>Continued Learning</span>
                <span aria-hidden="true"> | </span>
                <time>2023 — 2024</time>
              </p>
            </article>
            <article>
              <h4>
                La Pagoda Spanish Language School
                <span className="edu-location">, Valencia, Spain</span>
              </h4>
              <p className="school-meta">
                <span>Continued Learning</span>
                <span aria-hidden="true"> | </span>
                <time>2024 — 2025</time>
              </p>
            </article>
          </section>

          <section aria-labelledby="certs-heading">
            <h3 id="certs-heading">Technology</h3>
            <article>
              <h4 className="firstCert">
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
                The Odin Project: Full Stack JavaScript
                <span className="tech-location">, Online</span>
              </h4>
              <p className="tech-meta">
                <span>Self-led Web Development Curriculum</span>
                <span aria-hidden="true"> | </span>
                <time>2025 — Present</time>
              </p>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}
