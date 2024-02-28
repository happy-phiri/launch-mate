import { useState, useId } from "react";
import { customersBreakdown, customersProTip } from "../../constants";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import ProTipCard from "../../components/cards/ProTipCard";
import { caseCustomers } from "../../constants/caseStudyData";
import CaseStudyComponent from "../../components/case-study/CaseStudy";
import NextPrevButton from "../../components/buttons/NextPrevButton";
import UserResponseCard from "../../components/cards/UserResponseCard";
import UserResponseForm from "../../components/UserResponseForm";
import Modal from "../../components/modals/Modal";
import { useGlobalContext } from "../../contexts/AppContext";

const CustomerSegments = () => {
  const { data, setData, showModal } = useGlobalContext();
  const [newCustomer, setNewCustomer] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [showTextarea, setShowTextarea] = useState(false);

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setNewCustomer((prevState) => {
      return {
        ...prevState,
        id: id,
        [e.target.name]: e.target.value,
      };
    });
  };

  // HANDLES THE SUBMIT BUTTON AND SAVES INPUT DATA
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the data using setData function
    setData((prevState) => {
      return {
        ...prevState,
        blocks: {
          ...prevState.blocks,
          customers: prevState.blocks.customers
            ? [...prevState.blocks.customers, newCustomer]
            : [newCustomer],
        },
      };
    });

    // Clear the form
    setNewCustomer({
      id: "",
      title: "",
      description: "",
    });

    setShowTextarea(false);
  };

  return (
    <section className="mb-5">
      {/* BRIEF EXPLANATION OF THE CUSTOMERS BLOCK OF THE LEAN CANVAS */}
      <div className="mb-3">
        <h2 className="text-2xl mb-3 font-semibold font-montserrat">
          Customers
        </h2>
        <p className="font-poppins font-extralight leading-6 md:w-[90%]">
          The <span className="font-medium">Customers</span> component revolves
          around comprehending your target audience, their needs, and how your
          business can address them. Understanding and addressing the needs of
          your customers is fundamental to a thriving business. By precisely
          defining their characteristics, being customer-centric, and
          quantifying the value you provide, you set the stage for creating
          offerings that genuinely meet customer expectations.
        </p>
      </div>

      <div className="my-8">
        <img
          src="../images/customers.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="Illustration of a girl in a jewelry shop at the counter"
        />
      </div>

      {/* BREAKDOWN OF THE CUSTOMERS BLOCK */}
      <div className="mb-8">
        <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
          Here&apos;s a Breakdown of the Customers Block
        </h3>
        <div className="font-poppins font-light text-base flex flex-wrap justify-start gap-4">
          {customersBreakdown.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="my-4">
        <CaseStudyComponent {...caseCustomers} />
      </div>

      {/* QUESTION AND FORM TO ADD CUSTOMERS(S) IDENTIFIED */}
      <div className="my-6 md:w-full lg:w-[95%] custom-bg px-5 py-7 rounded-lg">
        <h3 className="text-xl font-medium font-montserrat mb-2">
          Brainstorm: Identifying the Customers
        </h3>
        <p className="font-poppins font-light leading-6 mb-3">
          Who are your target customers, and what are their need, preferences
          and characteristics?
        </p>

        {showTextarea ? (
          <UserResponseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={newCustomer.title}
            description={newCustomer.description}
          />
        ) : (
          <button
            onClick={() => setShowTextarea(true)}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-full text-center">
            Add Customer
          </button>
        )}

        {/* CUSTOMERS LISTED BY USER */}
        {data.blocks.customers && (
          <div className="w-full">
            {data.blocks.customers.length > 0 && (
              <div className="my-6">
                <h3 className="my-2 text-xl font-medium font-montserrat mb-2">
                  {data.blocks.customers.length > 1
                    ? "Customers Identified"
                    : "Customer Identified"}
                </h3>

                <ol className="shadow-2xl rounded-lg p-3">
                  {data.blocks.customers.map((customer) => (
                    <div key={customer.id}>
                      <UserResponseCard
                        key={customer.id}
                        {...customer}
                        arr={data.blocks.customers}
                        propName="customers"
                      />
                      <div
                        className={`${
                          showModal
                            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
                            : null
                        }`}>
                        {showModal && (
                          <Modal
                            arr={data.blocks.customers}
                            propName="customers"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mb-6  lg:w-[95%]">
        <ProTipCard content={customersProTip} />
      </div>

      <div className="flex justify-between lg:w-[95%]">
        <NextPrevButton prevStep="../problem" text="Prev" />
        <NextPrevButton nextStep="../solution" text="Next" />
      </div>
    </section>
  );
};

export default CustomerSegments;
