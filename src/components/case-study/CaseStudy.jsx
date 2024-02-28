/* eslint-disable react/prop-types */
import CaseStudyCard from "../cards/CaseStudyCard";

const CaseStudyComponent = ({
  title,
  shortDescription,
  image,
  imageDescription,
  breakdown,
}) => {
  return (
    <div>
      <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
        Case Study: Online Tutoring Platform
      </h3>
      <div className="">
        <img
          src={image}
          className="sm:w-[50%] w-full mx-auto"
          alt={imageDescription}
        />
        <p className="font-poppins font-extralight leading-6 w-full lg:w-[95%] mb-3">
          <span className="font-medium font-montserrat">{title}: </span>
          {shortDescription}
        </p>
      </div>

      <div className="font-poppins leading-6 md:w-full lg:w-[95%]">
        <h3 className="font-montserrat font-medium  mb-3">
          Breakdown of the {title}:
        </h3>
        {breakdown.map((item) => {
          return <CaseStudyCard key={item.title} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CaseStudyComponent;
