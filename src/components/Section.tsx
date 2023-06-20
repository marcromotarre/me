import { Section as SectionInterface } from "../interfaces/Section";

const Section = (section: SectionInterface) => {
  const { name, icon, component } = section;

  return (
    <>
      <div className="grid w-full grid-cols-[max-content_auto_48px] items-center gap-x-7">
        <h1 className="self-center text-2xl text-main">{name}</h1>
        <div className="flex h-full items-center justify-center">
          <div className="h-0.5 w-full bg-black"></div>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-black">
          <img className="h-6" src={icon} alt="some file" />
        </div>
      </div>
      <div className="w-full">{component()}</div>
    </>
  );
};

export default Section;
