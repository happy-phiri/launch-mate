/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../contexts/AppContext";
// import Modal from "../Modal";

const UserResponseCard = ({ title, description, id, arr, propName }) => {
  const { handleDelete, toggleModal } = useGlobalContext();

  return (
    <div className="font-poppins font-extralight flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3 border-b pb-3 border-purple-400">
      <div>
        <h3 className="font-montserrat font-medium">{title}</h3>
        <p>{description}</p>
      </div>

      <div className="flex flex-nowrap gap-3">
        {/* UPDATE BUTTON */}
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="lg"
          className="cursor-pointer hover:text-purple-500"
          onClick={() => {
            toggleModal({ id, title, description });
          }}
        />

        {/* DELETE BUTTON */}
        <FontAwesomeIcon
          icon={faTrash}
          size="lg"
          className="cursor-pointer hover:text-purple-500"
          onClick={() => handleDelete(id, arr, propName)}
        />
      </div>
    </div>
  );
};

export default UserResponseCard;
