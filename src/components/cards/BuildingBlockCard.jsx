/* eslint-disable react/prop-types */
const BuildingBlockCard = ({ step, name, description }) => {
  return (
    <div className="shadow-xl rounded-2xl border-t-2 border-purple-500 w-full md:w-[225px] lg:w-[200px] xl:w-[230px] flex flex-col items-center gap-3 pt-4 pb-6 px-3 text-center">
      <h3 className="bg-purple-500 text-white rounded-full border-2 flex justify-center items-center h-11 w-11 text-xl font-semibold">
        {step}
      </h3>
      <h4 className="font-medium font-montserrat">{name}</h4>
      <p className="font-poppins font-extralight text-base">{description}</p>
    </div>
  );
};

export default BuildingBlockCard;
