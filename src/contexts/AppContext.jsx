import { useContext, createContext, useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || {
      info: "",
      blocks: {
        problems: [],
        customers: [],
        solutions: [],
        uniqueValueProposition: [],
        unfairAdvantage: [],
        channels: [],
        costs: [],
        revenue: [],
        keyMetrics: [],
      },
    }
  );
  const [showModal, setShowModal] = useState(false);
  const [editedItem, setEditedItem] = useState("");

  // SAVE DATA TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const toggleModal = (item = null) => {
    setShowModal((prevState) => !prevState);
    setEditedItem(item);
  };

  // DELETE USER INPUT FUNCTION
  const handleDelete = (id, arr, propName) => {
    const updatedList = arr.filter((item) => item.id !== id);
    setData((prevState) => ({
      ...prevState,
      blocks: {
        ...prevState,
        [propName]: updatedList,
      },
    }));
  };

  // EDIT USER INPUT FUNCTION
  const handleEdit = (id, arr, title, description, propName) => {
    // Create new object with updated values
    const updatedItem = {
      id: id,
      title: title,
      description: description,
    };

    // List of items that will not be edited
    const uneditedItems = arr.filter((item) => item.id !== id);

    // Combined list of edited item and remaining unedited items
    const updatedList = [updatedItem, ...uneditedItems];

    //Update data state
    setData((prevState) => ({
      ...prevState,
      blocks: {
        ...prevState,
        [propName]: updatedList,
      },
    }));
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        handleDelete,
        showModal,
        setShowModal,
        toggleModal,
        handleEdit,
        editedItem,
      }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
