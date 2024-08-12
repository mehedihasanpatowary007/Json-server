import Phone from "./Phone";

const Phones = ({phones}) => {
    return (
      <div className="bg-gray-900">
        <div className="sticky top-0 bg-white z-50">
          <h1 className="uppercase text-5xl font-bold italic text-gray-700 text-center py-8">
            my phone house
          </h1>
        </div>
        <div className=" pt-5 flex flex-wrap justify-center gap-10 z-40">
          {phones.map((phone) => (
            <Phone key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    );
};

export default Phones;