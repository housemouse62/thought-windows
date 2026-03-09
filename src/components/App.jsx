import { useState } from "react";
import Header from "./Header";
import TopNav from "./TopNav";
import FilterNav from "./FilterNav";
import ProjectsGrid from "./ProjectsGrid";
import CVSection from "./CVSection";
import AboutSection from "./AboutSection";
import AccessibilitySection from "./AccessibilitySection";
import Footer from "./Footer";
import PROJECTS from "../data/projects";

import "./App.css";

const NAV_SECTIONS = ["Work", "CV", "Accessibility", "About"];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Design", value: "design" },
  { label: "Operations", value: "operations" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("Work");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Header />

      <TopNav
        sections={NAV_SECTIONS}
        active={activeSection}
        onChange={setActiveSection}
        filterVisible={activeSection === "Work"}
      />

      <FilterNav
        filters={FILTERS}
        projects={PROJECTS}
        active={activeFilter}
        onChange={setActiveFilter}
        visible={activeSection === "Work"}
      />

      <main id="main" className="main-bg">
        <div className="site-main">
          {activeSection === "Work" && (
            <>
              <div className="content-header">
                <h2 className="content-heading">Selected Work</h2>
                <span className="content-count" aria-live="polite">
                  {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="deco-rule" aria-hidden="true">
                <span className="deco-dot" />
                <span className="deco-dot" />
                <span className="deco-dot" />
              </div>

              <ProjectsGrid projects={filteredProjects} />
            </>
          )}
          {activeSection === "CV" && <CVSection />}
          {activeSection === "About" && <AboutSection />}
          {activeSection === "Accessibility" && <AccessibilitySection />}
        </div>
      </main>

      <Footer />
    </>
  );
}
