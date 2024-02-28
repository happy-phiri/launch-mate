/* eslint-disable react/prop-types */
import { useState, useId } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { countries } from "../../constants/countries";
import { useGlobalContext } from "../../contexts/AppContext";

const BasicInfoModal = ({ setShowBasicInfoModal }) => {
  const { setData, data } = useGlobalContext();
  const [submit, setSubmit] = useState(false);
  const [enterpriseInfo, setEnterpriseInfo] = useState({
    id: "",
    name: "",
    type: "",
    country: "",
  });

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setEnterpriseInfo((prevState) => {
      return {
        ...prevState,
        id: id,
        [e.target.name]: e.target.value,
      };
    });
  };

  //HANDLES FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevState) => {
      return {
        ...prevState,
        info: enterpriseInfo,
      };
    });
    setSubmit(true);
    setEnterpriseInfo({
      id: "",
      name: "",
      type: "",
      country: "",
    });
    console.log(data.info);
  };

  return (
    <div className="absolute max-xl:w-[90%] xl:w-[50%] max-lg:top-[50%] top-[20%] left-[50%] translate-x-[-50%] max-lg:translate-y-[-50%] translate-y-[-20%] rounded-xl bg-white z-50">
      <div className="relative p-8">
        <FontAwesomeIcon
          icon={faXmark}
          size="lg"
          className="absolute right-3 top-2 cursor-pointer hover:text-red-500"
          onClick={() => setShowBasicInfoModal(false)}
        />

        {submit ? (
          <div className="flex flex-col items-center gap-3">
            <p className="w-fit px-3 py-2 mx-auto mb-2 font-montserrat font-medium text-lg text-center rounded-lg">
              Data submitted successfully!
            </p>

            <Link
              to="problem"
              className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2">
              Start
            </Link>
          </div>
        ) : (
          <div>
            <h2 className="font-montserrat font-medium text-xl mb-4">
              Basic information about your enterprise
            </h2>

            <form className="flex flex-col gap-2">
              <div>
                <label
                  className="font-montserrat font-normal text-sm hidden"
                  htmlFor="name">
                  Enterprise Name:{" "}
                </label>
                <input
                  className="border border-purple-200 rounded-lg p-3 mb-2 focus:outline-none w-full font-poppins font-light placeholder:font-montserrat"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enterprise Name"
                  onChange={handleChange}
                  value={enterpriseInfo.name}
                  autoComplete="off"
                  required
                />
              </div>

              <div>
                <label htmlFor="type" className="text-sm mb-2 hidden">
                  Enterprise Type:
                </label>
                <select
                  className="border border-purple-200 rounded-lg p-3 mb-2 focus:outline-none w-full font-light font-montserrat cursor-pointer"
                  name="type"
                  id="type"
                  onChange={handleChange}
                  value={enterpriseInfo.type}
                  required>
                  <option value="">
                    -- Please Select Type of Enterprise --
                  </option>
                  <option value="for profit">For Profit</option>
                  <option value="not for profit">Not for Profit</option>
                  <option value="ngo">NGO</option>
                  <option value="social enterprise">Social Enterprise</option>
                </select>
              </div>

              <div>
                <label htmlFor="country" className="text-sm mb-2 hidden">
                  Country:
                </label>
                <select
                  className="border border-purple-200 rounded-lg p-3 mb-2 focus:outline-none w-full font-light font-montserrat cursor-pointer"
                  name="country"
                  id="country"
                  onChange={handleChange}
                  value={enterpriseInfo.country}
                  required>
                  <option value="">-- Please Select Country --</option>
                  {countries.map((country) => (
                    <option value={country.name} key={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!enterpriseInfo.name}
                className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 self-start">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicInfoModal;
