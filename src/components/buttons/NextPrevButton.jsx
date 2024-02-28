/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const NextPrevButton = ({ prevStep, nextStep, text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (nextStep) {
      navigate(nextStep);
    } else if (prevStep) {
      navigate(prevStep);
    }
  };

  useEffect(() => {
    window.scrollTo(-10, 0);
  }, [prevStep, nextStep]);

  return (
    <button
      // to={nextStep ? nextStep : prevStep}
      onClick={handleClick}
      className="font-montserrat border border-purple-500 hover:bg-purple-500 shadow-md hover:text-white rounded-lg px-6 py-2">
      {nextStep ? (
        <div className="flex items-center gap-2">
          {text} <FontAwesomeIcon icon={faCaretRight} />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCaretLeft} />
          {text}
        </div>
      )}
    </button>
  );
};

export default NextPrevButton;
