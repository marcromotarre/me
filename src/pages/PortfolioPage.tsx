import { Section as SectionInterface } from "../interfaces/Section";
import Contact from "../components/Contact";
import Me from "../components/Me";
import Section from "../components/Section";
import sections from "../data/Sections";

const Portfolio = () => {
  const sectionsColumn1 = sections.filter(({ col }) => col === 1);
  const sectionsColumn2 = sections.filter(({ col }) => col === 2);
  return (
    <div className="m-0 p-0 ">
      <div className="grid grid-cols-[auto_min(90%,1300px)_auto]">
        <div className="bg-main" />
        <Me />
        <div className="bg-main" />
        <div className="bg-secondary" />
        <div className="bg-secondary p-3">
          <Contact />
        </div>
        <div className="bg-secondary" />

        <div></div>
        <div className="flex justify-center pt-5">
          <div className="grid gap-x-16 sm:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col  justify-between">
              {sectionsColumn1.map(
                (section: SectionInterface, index: number) => (
                  <Section key={index} {...section}></Section>
                )
              )}
            </div>
            <div className="flex flex-col justify-between">
              {sectionsColumn2.map(
                (section: SectionInterface, index: number) => (
                  <Section key={index} {...section}></Section>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
