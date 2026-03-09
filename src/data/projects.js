//Baere Brewing Imports
import can_art_1 from "../assets/images/CanArt/amparo.jpg";
import can_art_2 from "../assets/images/CanArt/billion-dollar-baby.jpg";

//Diggable Design imports
import banner_mock from "../assets/images/diggable/banner-mock.jpg";
import final_banner from "../assets/images/diggable/final-banner.jpg";
import flyer_pro from "../assets/images/diggable/flyer-pro.jpg";
import flyer_residential from "../assets/images/diggable/flyer-residential.jpg";

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
    demoUrl: "https://makepoetry.netlify.app/haiku",
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
      narrative: `Co-founded Baere Brewing Company in Denver in 2013. Over eleven years, managed all aspects of operations including staff hiring and management, financial oversight, regulatory compliance (TTB, state, local), vendor relationships, logistics, and marketing. Grew the brewery from a small taproom to an established Denver institution before closing in 2024.`,
      projects: [
        {
          id: "can-art",
          title: "Can Label Art & Design",
          objective: "Create can labels art in house",
          images: [can_art_1, can_art_2],
        },
      ],
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
      narrative: "",
      projects: [
        {
          id: "icon-library",
          title: "Icon Library",
          objective: "Create an icon library",
          images: [],
        },
      ],
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
      narrative: "",
      projects: [
        {
          id: "marketing",
          title: "Business Marketing",
          objective: "Create marketing materials",
          images: [flyer_pro, flyer_residential, banner_mock, final_banner],
        },
      ],
    },
  },
];

export default PROJECTS;
