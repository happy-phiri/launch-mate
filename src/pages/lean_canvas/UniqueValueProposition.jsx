import { useState, useId } from "react";
import { uvpBreakdown, uvpProTip } from "../../constants";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import ProTipCard from "../../components/cards/ProTipCard";
import { caseUVP } from "../../constants/caseStudyData";
import CaseStudyComponent from "../../components/case-study/CaseStudy";
import NextPrevButton from "../../components/buttons/NextPrevButton";
import UserResponseCard from "../../components/cards/UserResponseCard";
import UserResponseForm from "../../components/UserResponseForm";
import Modal from "../../components/modals/Modal";
import { useGlobalContext } from "../../contexts/AppContext";

const UniqueValueProposition = () => {
  const { data, setData, showModal } = useGlobalContext();
  const [newUniqueValueProposition, setNewUniqueValueProposition] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [showTextarea, setShowTextarea] = useState(false);

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setNewUniqueValueProposition((prevState) => {
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
          uniqueValueProposition: prevState.blocks.uniqueValueProposition
            ? [
                ...prevState.blocks.uniqueValueProposition,
                newUniqueValueProposition,
              ]
            : [newUniqueValueProposition],
        },
      };
    });

    // Clear the form
    setNewUniqueValueProposition({
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
          Unique Value Proposition
        </h2>
        <p className="font-poppins font-extralight leading-6 md:w-[90%]">
          The{" "}
          <span className="font-medium">Unique Value Proposition (UVP) </span>
          component centers around articulating the distinctive value your
          product or service offers to customers. By understanding, articulating
          and precisely defining what sets your offering apart, you
          differentiate your business in the market. It&apos;s a way of
          answering the question: &apos;Why should customers choose your product
          or service over alternatives?&apos;
        </p>
      </div>

      <div className="my-8">
        <img
          src="../images/uvp.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="A man standing in front of two doors about to choose which door to open"
        />
      </div>

      {/* BREAKDOWN OF THE CUSTOMERS BLOCK */}
      <div className="mb-8">
        <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
          Here&apos;s a Breakdown of the Unique Value Proposition
        </h3>
        <div className="font-poppins font-light text-base flex flex-wrap justify-start gap-4">
          {uvpBreakdown.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="my-4">
        <CaseStudyComponent {...caseUVP} />
      </div>

      {/* QUESTION AND FORM TO ADD CUSTOMERS(S) IDENTIFIED */}
      <div className="my-6 md:w-full lg:w-[95%] custom-bg px-5 py-7 rounded-lg">
        <h3 className="text-xl font-medium font-montserrat mb-2">
          Brainstorm: Identifying your Unique Value Proposition
        </h3>
        <p className="font-poppins font-light leading-6 mb-3">
          What makes your product or service unique and how does your offering
          provide more value or solve the problem better than competitors?
        </p>

        {showTextarea ? (
          <UserResponseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={newUniqueValueProposition.title}
            description={newUniqueValueProposition.description}
          />
        ) : (
          <button
            onClick={() => setShowTextarea(true)}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-full text-center">
            Add Unique Value Proposition
          </button>
        )}

        {/* CUSTOMERS LISTED BY USER */}
        {data.blocks.uniqueValueProposition && (
          <div className="w-full">
            {data.blocks.uniqueValueProposition.length > 0 && (
              <div className="my-6">
                <h3 className="my-2 text-xl font-medium font-montserrat mb-2">
                  {data.blocks.uniqueValueProposition.length > 1
                    ? "Unique Value Propositions Identified"
                    : "Unique Value Proposition Identified"}
                </h3>

                <ol className="shadow-2xl rounded-lg p-3">
                  {data.blocks.uniqueValueProposition.map((uvp) => (
                    <div key={uvp.id}>
                      <UserResponseCard
                        key={uvp.id}
                        {...uvp}
                        arr={data.blocks.uniqueValueProposition}
                        propName="uniqueValueProposition"
                      />
                      <div
                        className={`${
                          showModal
                            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
                            : null
                        }`}>
                        {showModal && (
                          <Modal
                            arr={data.blocks.uniqueValueProposition}
                            propName="uniqueValueProposition"
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
        <ProTipCard content={uvpProTip} />
      </div>

      <div className="flex justify-between lg:w-[95%]">
        <NextPrevButton prevStep="../solution" text="Prev" />
        <NextPrevButton nextStep="../unfair-advantage" text="Next" />
      </div>
    </section>
  );
};

export default UniqueValueProposition;
