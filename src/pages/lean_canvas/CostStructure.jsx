import { useState, useId } from "react";
import { costsBreakdown, costsProTip } from "../../constants";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import ProTipCard from "../../components/cards/ProTipCard";
import { caseCosts } from "../../constants/caseStudyData";
import CaseStudyComponent from "../../components/case-study/CaseStudy";
import NextPrevButton from "../../components/buttons/NextPrevButton";
import UserResponseCard from "../../components/cards/UserResponseCard";
import UserResponseForm from "../../components/UserResponseForm";
import Modal from "../../components/modals/Modal";
import { useGlobalContext } from "../../contexts/AppContext";

const CostStructure = () => {
  const { data, setData, showModal } = useGlobalContext();
  const [newCost, setNewCost] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [showTextarea, setShowTextarea] = useState(false);

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setNewCost((prevState) => {
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
          costs: prevState.blocks.costs
            ? [...prevState.blocks.costs, newCost]
            : [newCost],
        },
      };
    });

    // Clear the form
    setNewCost({
      id: "",
      title: "",
      description: "",
    });

    setShowTextarea(false);
  };

  return (
    <section className="mb-5">
      {/* BRIEF EXPLANATION OF THE SOLUTION BLOCK OF THE LEAN CANVAS */}
      <div className="mb-3">
        <h2 className="text-2xl mb-3 font-semibold font-montserrat">Costs</h2>
        <p className="font-poppins font-extralight leading-6 md:w-[90%]">
          In the Lean Canvas,{" "}
          <span className="font-medium">Cost Structure</span> component revolves
          around comprehending the financial challenges and resource demands
          that your business may encounter. It&apos;s about identifying and
          quantifying the expenditures essential for running your business
          effectively.
        </p>
        <p className="font-poppins font-extralight mt-1 leading-6 md:w-[90%]">
          Understanding and managing your costs is fundamental for a sustainable
          business model. By precisely defining your expenditures, you lay the
          groundwork for effective financial planning, budgeting, and
          profitability.
        </p>
      </div>

      <div className="my-8">
        <img
          src="../images/costs.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="A man calculating expenses for a construction project"
        />
      </div>

      {/* BREAKDOWN OF THE SOLUTION BLOCK */}
      <div className="mb-8">
        <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
          Here&apos;s a Breakdown of the Costs Block
        </h3>
        <div className="font-poppins font-light text-base flex flex-wrap justify-start gap-4">
          {costsBreakdown.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="my-4">
        <CaseStudyComponent {...caseCosts} />
      </div>

      {/* QUESTION AND FORM TO ADD SOLUTIONS(S) IDENTIFIED */}
      <div className="my-6 md:w-full lg:w-[95%] custom-bg px-5 py-7 rounded-lg">
        <h3 className="text-xl font-medium font-montserrat mb-2">
          Brainstorm: Identifying the Cost(s)
        </h3>
        <p className="font-poppins font-light leading-6 mb-3">
          What are the fixed and variable costs associated with running your
          business?
        </p>

        {showTextarea ? (
          <UserResponseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={newCost.title}
            description={newCost.description}
          />
        ) : (
          <button
            onClick={() => setShowTextarea(true)}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-full text-center">
            Add Cost
          </button>
        )}

        {/* SOLUTIONS LISTED BY USER */}
        {data.blocks.costs && (
          <div className="w-full">
            {data.blocks.costs.length > 0 && (
              <div className="my-6">
                <h3 className="my-2 text-xl font-medium font-montserrat mb-2">
                  {data.blocks.costs.length > 1 ? "Costs" : "Cost"}
                </h3>

                <ol className="shadow-2xl rounded-lg p-3">
                  {data.blocks.costs.map((cost) => (
                    <div key={cost.id}>
                      <UserResponseCard
                        key={cost.id}
                        {...cost}
                        arr={data.blocks.costs}
                        propName="costs"
                      />
                      <div
                        className={`${
                          showModal
                            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
                            : null
                        }`}>
                        {showModal && (
                          <Modal arr={data.blocks.costs} propName="costs" />
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
        <ProTipCard content={costsProTip} />
      </div>

      <div className="flex justify-between lg:w-[95%]">
        <NextPrevButton prevStep="../channels" text="Prev" />
        <NextPrevButton nextStep="../revenue" text="Next" />
      </div>
    </section>
  );
};

export default CostStructure;
