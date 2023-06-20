import Certificates from "../components/sections/Certificates";
import Education from "../components/sections/Education";
import Languages from "../components/sections/Languages";
import Skills from "../components/sections/Skills";
import Technologies from "../components/sections/Technologies";
import WorkExperience from "../components/sections/WorkExperience";

export default [
  {
    name: "Work Experience",
    icon: `icons/sections/section-work-experience.svg`,
    size: 100,
    component: WorkExperience,
    col: 1,
  },
  {
    name: "Education",
    icon: `icons/sections/section-education.svg`,
    size: 100,
    component: Education,
    col: 1,
  },
  {
    name: "Technologies",
    icon: `icons/sections/section-technologies.svg`,
    size: 80,
    component: Technologies,
    col: 2,
  },
  {
    name: "Skills",
    icon: `icons/sections/section-skills.svg`,
    size: 100,
    component: Skills,
    col: 2,
  },
  {
    name: "Languages",
    icon: `icons/sections/section-languages.svg`,
    size: 100,
    component: Languages,
    col: 2,
  },
  {
    name: "Certificates",
    icon: `icons/sections/section-certificates.svg`,
    size: 100,
    component: Certificates,

    col: 2,
  },
];
