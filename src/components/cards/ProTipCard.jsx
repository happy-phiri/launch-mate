/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

const ProTipCard = ({ content }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:justify-evenly  border border-purple-200 rounded-lg p-3">
      <h3 className="font-montserrat font-medium mb-3 flex flex-nowrap gap-2 justify-between">
        <FontAwesomeIcon
          icon={faLightbulb}
          size="xl"
          className="text-purple-500"
        />
        <span className="whitespace-nowrap">Pro Tip</span>
      </h3>
      <p className="font-poppins font-extralight xl:w-[80%] leading-6 mb-3">
        {content}
      </p>
    </div>
  );
};

export default ProTipCard;
// md:w-[85%] lg:w-[95%]
