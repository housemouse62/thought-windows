import { useState } from "react";
import Header from "./Header";
import TopNav from "./TopNav";
import FilterNav from "./FilterNav";
import ProjectsGrid from "./ProjectsGrid";
import CVSection from "./CVSection";
import Footer from "./Footer";
import "./App.css";

const PROJECTS = [
  {
    id: "cv-builder",
    category: "web",
    type: "Web App",
    title: "Build-A-CV",
    description:
      "Interactive resume builder in React. Add sections, edit inline, and export a formatted CV.",
    stack: ["React", "JavaScript", "CSS"],
    demoUrl: "https://byocv.netlify.app/", // TODO: replace
    githubUrl: "https://github.com/housemouse62/CV_Application", // TODO: replace
  },
  {
    id: "poetry-app",
    category: "web",
    type: "Web App · In Progress",
    title: "Poetry App",
    description:
      "A writing tool for composing and organizing poetry. Structure and UI taking shape.",
    stack: ["React", "JavaScript"],
    demoUrl: null,
    githubUrl: "https://github.com/housemouse62/poetry-app",
  },
  {
    id: "baere-brewing",
    category: "operations",
    type: "Operations",
    title: "Baere Brewing Co.",
    description:
      "Co-founded and operated a craft brewery in Denver for eleven years — operations, finance, compliance, staff, marketing, logistics.",
    stack: ["Operations", "Finance", "Compliance", "Brand"],
    demoUrl: null,
    githubUrl: null,
    modalContent: {
      images: [], // TODO: add image paths
      narrative: `Co-founded Baere Brewing Company in Denver in 2013. Over eleven years, managed all aspects of operations including staff hiring and management, financial oversight, regulatory compliance (TTB, state, local), vendor relationships, logistics, and marketing. Grew the brewery from a small taproom to an established Denver institution before closing in 2024.`,
    },
  },
  {
    id: "andrea-moore-arts",
    category: "design",
    type: "Design",
    title: "Andrea Moore Arts",
    description:
      "Design and marketing support for an independent artist — collateral, promotional materials, visual communication.",
    stack: ["Canva", "Visual Design", "Print"],
    demoUrl: null,
    githubUrl: null,
    modalContent: {
      images: [], // TODO: add image paths
      narrative: "",
    },
  },
  {
    id: "diggable-designs",
    category: "design",
    type: "Design",
    title: "Diggable Designs",
    description:
      "Flyer and banner design for a landscape and construction company. Promotional materials for real-world use.",
    stack: ["Canva", "Print Design"],
    demoUrl: null,
    githubUrl: null,
    modalContent: {
      images: [], // TODO: add image paths
      narrative: "",
    },
  },
];

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
      />

      <FilterNav
        filters={FILTERS}
        projects={PROJECTS}
        active={activeFilter}
        onChange={setActiveFilter}
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
        </div>
      </main>

      <Footer />
    </>
  );
}
