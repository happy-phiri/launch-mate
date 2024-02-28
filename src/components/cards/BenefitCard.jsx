/* eslint-disable react/prop-types */

const BenefitCard = ({ icon, name, description }) => {
  return (
    <div className="w-[230px] h-[220px] md:w-[200px] shadow-xl border-t-2 rounded-full border-purple-500 p-6 text-center flex flex-col flex-nowrap justify-center">
      <img src={icon} alt="" width={30} height={30} className="mx-auto mb-3" />
      <h3 className="font-medium font-montserrat mb-1">{name}</h3>
      <p className="font-poppins text-sm font-extralight">{description}</p>
    </div>
  );
};

export default BenefitCard;
