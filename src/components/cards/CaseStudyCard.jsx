/* eslint-disable react/prop-types */
const CaseStudyCard = ({ title, description }) => {
  return (
    <div className="border border-l-4 rounded-xl border-l-purple-500 p-2 mb-2 font-extralight">
      <h3 className="font-montserrat font-medium">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CaseStudyCard;
