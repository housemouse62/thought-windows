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

import anni1 from "../assets/images/Anniversary 8/8anni1.jpg";
import anni2 from "../assets/images/Anniversary 8/8anni2.jpg";
import anni3 from "../assets/images/Anniversary 8/8anni3.jpg";
import anni4 from "../assets/images/Anniversary 8/8anni4.jpg";

import social1 from "../assets/images/Social Post/Baereliner Weisse Ramp.jpeg";
import social2 from "../assets/images/Social Post/Baereliner Weisse.jpeg";
import social3 from "../assets/images/Social Post/Just Keep Swimming.jpeg";
import social4 from "../assets/images/Social Post/Lemon and Oak.jpg";
import social5 from "../assets/images/Social Post/Random Rules.jpeg";

import baere_logo from "../assets/images/ProjectCards/BaereLogo.png";

//Diggable Design imports
import banner_mock from "../assets/images/diggable/banner-mock.jpg";
import final_banner from "../assets/images/diggable/final-banner.jpg";
import flyer_pro from "../assets/images/diggable/flyer-pro.jpg";
import flyer_residential from "../assets/images/diggable/flyer-residential.jpg";
import digabble_logo from "../assets/images/ProjectCards/DiggableLogo.png";

//Andrea Moore Arts imports
import ama_logo from "../assets/images/ProjectCards/ama_logo.png";

import dis1 from "../assets/images/AMA/dis_health_1.png";
import dis2 from "../assets/images/AMA/dis_health_2.png";
import dis3 from "../assets/images/AMA/dis_health_3.png";
import dis4 from "../assets/images/AMA/dis_health_4.png";
import dis5 from "../assets/images/AMA/dis_health_5.png";

import icon1 from "../assets/images/AMA/icon_library_1.png";
import icon2 from "../assets/images/AMA/icon_library_2.png";
import icon3 from "../assets/images/AMA/icon_library_3.png";

import rights1 from "../assets/images/AMA/know_rights_1.png";
import rights2 from "../assets/images/AMA/know_rights_2.png";
import rights3 from "../assets/images/AMA/know_rights_3.png";
import rights4 from "../assets/images/AMA/know_rights_4.png";

import public1 from "../assets/images/AMA/public_health_1.png";
import public2 from "../assets/images/AMA/public_health_2.png";
import public3 from "../assets/images/AMA/public_health_3.png";
import public4 from "../assets/images/AMA/public_health_4.png";
import public5 from "../assets/images/AMA/public_health_5.png";

//Bodega Inventory imports
import bodega_logo from "../assets/images/ProjectCards/EverybodyLogo.jpeg";

//BYO CV imports
import BYO_logo from "../assets/images/ProjectCards/BYO_logo.png";

//Make Poetry imports
import make_poetry_logo from "../assets/images/ProjectCards/make_poetry_logo.png";

//Storage Unit imports
import storage_unit_logo from "../assets/images/ProjectCards/storage_unit_logo.png";

const PROJECTS = [
  {
    id: "poetry-app",
    category: "web",
    type: "Web App · In Progress",
    title: "make poetry.",
    description:
      "A poetry composition tool for haiku and limericks, built with real-time syllable counting, accessibility-first design, and a dictionary API integration to support word discovery while writing.",
    stack: ["React", "JavaScript", "CSS", "API"],
    demoUrl: "https://makepoetry.netlify.app/",
    githubUrl: "https://github.com/housemouse62/poetry-app",
    image: make_poetry_logo,
  },
  {
    id: "bodega-inventory",
    category: "web",
    type: "Web App",
    title: "Everybody's Bodega",
    description:
      "A full-stack inventory management app for a corner store. Browse and manage products by category, with sorting, image support, and session-based admin authentication.",
    stack: ["Node.js", "Express", "PostgreSQL", "EJS"],
    demoUrl: "https://bodega-inventory-production.up.railway.app/",
    githubUrl: "https://github.com/housemouse62/bodega-inventory",
    image: bodega_logo,
  },
  {
    id: "cv-builder",
    category: "web",
    type: "Web App",
    title: "Build-A-CV",
    description:
      "A resume builder in React. Input your information, edit inline, and export a cleanly formatted CV — built as a practical tool and a demonstration of React state management.",
    stack: ["React", "JavaScript", "CSS"],
    demoUrl: "https://byocv.netlify.app/",
    githubUrl: "https://github.com/housemouse62/CV_Application",
    image: BYO_logo,
    desktopOnly: true,
  },
  {
    id: "storage-unit",
    category: "web",
    type: "Web App",
    title: "Storage Unit",
    description:
      "A full-stack file storage app. Upload files into folders, manage them, and share any folder with a time-limited public link — no account required to view a share.",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "Cloudinary", "EJS"],
    demoUrl: "https://storage-unit-production.up.railway.app/",
    githubUrl: "https://github.com/housemouse62/storage-unit",
    image: storage_unit_logo,
    desktopOnly: false,
  },
  {
    id: "baere-brewing",
    category: "design",
    type: "Operations · Design",
    title: "Baere Brewing Co.",
    description:
      "Co-founded and operated a craft brewery in Denver for eleven years — operations, finance, compliance, staff, marketing, logistics.",
    stack: ["Operations", "Finance", "Compliance", "Design", "Branding"],
    demoUrl: null,
    githubUrl: null,
    image: baere_logo,
    imageStyle: { height: "110px", margin: "10px 0" },

    modalContent: {
      narrative: `Co-founded Baere Brewing Company in Denver in 2014, after 2 years of conception, design and planning. Over nine years, managed all aspects of operations including staff hiring and management, financial oversight, production, regulatory compliance (TTB, state, local, OSHA), vendor relationships, logistics, branding and marketing. Grew the brewery from a small taproom to an established, award-winning Denver institution before selling in 2023.`,
      projects: [
        {
          id: "can-art",
          title: "Package Art & Design",
          objective:
            "Create bottle and can label art in house, utilizing Adobe Illustrator & Photoshop, Procreate, Canva and personal photography.",
          images: [
            can_art_10,
            can_art_1,
            can_art_2,
            can_art_3,
            can_art_4,
            can_art_5,
            can_art_6,
            can_art_7,
            can_art_8,
            can_art_9,
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
        {
          id: "anniversary",
          title: "Cohesive Event Branding",
          objective:
            "Build excitement for 8th Anniversary Party through cohesive branding and marketing, tying together multiple aspects of the event into one coherent message.",
          images: [anni1, anni2, anni3, anni4],
        },
        {
          id: "social_media",
          title: "Social Media",
          objective:
            "Market products through social media through creative and artistic photographs and images, showing the passion we genuinely have for our work.",
          images: [social1, social2, social3, social4, social5],
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
      "Assisted with the design of accessible visual content through Andrea Moore Arts for Special Olympics International projects, including an icon library, public health timelines, and educational materials for the developmental disabilities community and their advocates.",
    stack: ["Canva", "Visual Design", "Print"],
    demoUrl: null,
    githubUrl: null,
    image: ama_logo,
    imageStyle: { height: "120px", marginTop: "10px" },

    modalContent: {
      narrative:
        "Content design and visual communications work with Andrea Moore Arts on Special Olympics International contracts, supporting inclusive advocacy through accessible, audience-centered design.",
      projects: [
        {
          id: "icon-library",
          title: "Icon Library",
          objective:
            "Create a cohesive icon library of accessibility-related terminology to support the Navigating Healthcare Systems educational materials.",
          images: [icon1, icon2, icon3],
        },
        {
          id: "disability-health",
          title: "Disability Health Timeline",
          objective:
            "Source images and assist with the design of a visual timeline of health milestones within the disability community for display at a conference, contrasting lived experience against the broader public health landscape.",
          images: [dis1, dis2, dis3, dis4, dis5],
        },
        {
          id: "public-health",
          title: "Public Health Timeline",
          objective:
            "Source images and assist with design a visual timeline of public health milestones displayed alongside the community health timeline, forming a room-spanning installation illustrating the divergence between mainstream and community health histories.",
          images: [public1, public2, public3, public4, public5],
        },
        {
          id: "know-rights",
          title: "Navigating Healthcare Systems",
          objective:
            "Assist with the design of educational slide decks focused on navigating healthcare systems for individuals with developmental disabilities and their advocates, including alt-text for screen reader compatibility.",
          images: [rights1, rights2, rights3, rights4],
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
    image: digabble_logo,
    imageStyle: { height: "130px", marginBottom: "5px" },
    modalContent: {
      narrative:
        "Diggable Designs Landscape and Gardening is a small business based in Lakewood, Colorado. Designed print materials for use at trade conventions, targeting both residential customers and professional partners.",
      projects: [
        {
          id: "banner",
          title: "Convention Banner",
          objective:
            "Create a retractable banner for use at conventions and events. It should serve two purposes: to attract potential future customers as well as potential future employees.",
          images: [banner_mock, final_banner],
        },
        {
          id: "flyers",
          title: "Convention Flyers",
          objective:
            "Create two similarly designed flyers, one to attract potential future customers and one to attract potential future professional partners.",
          images: [flyer_pro, flyer_residential],
        },
      ],
    },
  },
];

export default PROJECTS;
