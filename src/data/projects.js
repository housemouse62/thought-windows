//Baere Brewing Imports
import bottle_art_1 from "../assets/images/CanArt/amparo.jpg";
import bottle_art_2 from "../assets/images/CanArt/breathe-in.jpg";
import bottle_art_3 from "../assets/images/CanArt/breathe-out.jpg";
import can_art_8 from "../assets/images/CanArt/billion-dollar-baby.jpg";
import can_art_1 from "../assets/images/CanArt/wai-iti-gose.jpg";
import can_art_2 from "../assets/images/CanArt/citrus-zested-gose.jpg";
import can_art_4 from "../assets/images/CanArt/from-alanis.jpg";
import can_art_5 from "../assets/images/CanArt/black-ryeday.jpg";
import can_art_6 from "../assets/images/CanArt/3can.jpg";
import can_art_7 from "../assets/images/CanArt/mahalo-vibes.jpg";
import can_art_9 from "../assets/images/CanArt/not-forgotten.jpg";
import can_art_3 from "../assets/images/CanArt/no-line.jpg";
import can_art_10 from "../assets/images/CanArt/7-beers-8-years.jpg";

import local_package_1 from "../assets/images/Local Package/package1.jpg";
import local_package_2 from "../assets/images/Local Package/package2.jpeg";
import local_package_3 from "../assets/images/Local Package/package3.jpeg";

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
    demoUrl: "https://makepoetry.netlify.app/",
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
          title: "Package Art & Design",
          objective:
            "Create bottle and can label art in house utilizing Adobe Illustrator & Photoshop, Procreate,  Canva and personal photography.",
          images: [
            can_art_1,
            can_art_2,
            can_art_3,
            can_art_4,
            can_art_5,
            can_art_6,
            can_art_7,
            can_art_8,
            can_art_9,
            can_art_10,
            bottle_art_1,
            bottle_art_2,
            bottle_art_3,
          ],
        },
        {
          id: "local-package",
          title: "Local Business Support",
          objective:
            "Build and support connections with local small businesses. Collaborate on seasonal packages for distribution through website and in the taproom.",
          images: [local_package_1, local_package_2, local_package_3],
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
      narrative:
        "Diggable Designs Landscape and Gardening is a small business based in Lakewood, Colorado.",
      projects: [
        {
          id: "banner",
          title: "Convention Banner",
          objective: [
            "Create a retractable banner for use at conventions and events. It should serve two purposes: to attract potential future customers as well as potential future employees",
          ],
          images: [banner_mock, final_banner],
        },
        {
          id: "flyers",
          title: "Convention Flyers",
          objective: [
            "Create two similarly designed flyers, one to attract potential future customers and one to attract potential future professional partners.",
          ],
          images: [flyer_pro, flyer_residential],
        },
      ],
    },
  },
];

export default PROJECTS;
