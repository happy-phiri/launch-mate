/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../contexts/AppContext";
import { useState } from "react";

const Modal = ({ arr, propName }) => {
  const { toggleModal, editedItem, handleEdit } = useGlobalContext();
  const [editedTitle, setEditedTitle] = useState(editedItem.title);
  const [editedDescription, setEditedDescription] = useState(
    editedItem.description
  );

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    handleEdit(editedItem.id, arr, editedTitle, editedDescription, propName);
    toggleModal();
  };

  return (
    <div className="absolute max-xl:w-[90%] xl:w-[50%] top-[20%] left-[50%] translate-x-[-50%] translate-y-[-20%] max-xl:top-[50%] max-xl:translate-y-[-50%] rounded-xl bg-white z-50">
      <div className="relative p-8">
        <FontAwesomeIcon
          icon={faXmark}
          size="lg"
          className="absolute right-2 top-2 cursor-pointer hover:text-red-500"
          onClick={() => toggleModal()}
        />
        <form>
          <input
            type="text"
            className="border border-purple-200 border-b-0 rounded-t-lg p-3 mb-0 focus:outline-none w-full font-poppins font-light placeholder:font-montserrat"
            placeholder="Title"
            name="title"
            value={editedTitle}
            onChange={handleTitleChange}
            autoComplete="off"
          />
          <textarea
            name="description"
            value={editedDescription}
            onChange={handleDescriptionChange}
            id="description"
            rows="3"
            placeholder="Description of problem"
            className="border border-t-0 border-purple-200 rounded-b-lg px-3 focus:outline-none resize-none w-full  font-poppins font-light placeholder:font-montserrat"></textarea>

          <button
            onClick={handleUpdate}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 block mt-3">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
