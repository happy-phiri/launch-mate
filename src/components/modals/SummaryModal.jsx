/* eslint-disable react/prop-types */
import SummaryCard from "../cards/SummaryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { dummyData } from "../constants/dummy";

const SummaryModal = ({ showModal, arr, name, setModalState }) => {
  return (
    <section className="absolute w-[90%] xl:w-[50%] top-[10%] max-sm:top-[0] left-[50%] translate-x-[-50%] translate-y-[20%] max-sm:translate-y-[10%] rounded-xl bg-white my-30 custom-bg">
      <div className="relative p-8">
        <FontAwesomeIcon
          icon={faXmark}
          size="lg"
          className="absolute right-3 top-2 cursor-pointer hover:text-red-500"
          onClick={() =>
            setModalState((prevState) => ({
              type: "",
              show: !prevState.show,
            }))
          }
        />

        <SummaryCard arr={arr} name={name} showModal={showModal} />
      </div>
    </section>
  );
};

export default SummaryModal;
