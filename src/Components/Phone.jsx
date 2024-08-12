
const Phone = ({phone}) => {
    const {name, price , image, specification, feature} = phone;
    const {display, processor, camera} = specification;
    return (
      <div className="bg-gray-600 flex flex-col gap-4 p-4 rounded">
        <div className="border-2 border-black bg-white rounded hover:scale-105 duration-1000">
          <img src={image} alt={name} />
        </div>
        <div className="text-white flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-black">{name}</h1>
          <h4>Display : {display}</h4>
          <h4>Processor : {processor}</h4>
          <h4>Camera : {camera}</h4>
          <h4>Feature : {feature}</h4>
          <h2 className="text-3xl font-bold">$<span>{price}</span></h2>
        </div>
      </div>
    );
};

export default Phone;