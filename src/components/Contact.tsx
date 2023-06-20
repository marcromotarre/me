import contactData from "../data/ContactData";
const Contact = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid justify-items-center gap-y-5 sm:w-max sm:grid-cols-1 sm:justify-items-start md:w-full md:grid-cols-3 md:justify-items-center lg:w-full lg:grid-cols-3 lg:justify-items-center">
        {contactData.map(({ value, icon, click }, index) => (
          <div key={index} className="flex w-max items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <img className="h-6" src={icon} alt="some file" />
            </div>
            <p className="pl-4 font-light text-white sm:text-base md:text-xs lg:text-base">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
