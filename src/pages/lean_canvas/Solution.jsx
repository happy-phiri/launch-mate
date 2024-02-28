import { useState, useId } from "react";
import { solutionBreakdown, solutionProTip } from "../../constants";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import ProTipCard from "../../components/cards/ProTipCard";
import { caseSolutions } from "../../constants/caseStudyData";
import CaseStudyComponent from "../../components/case-study/CaseStudy";
import NextPrevButton from "../../components/buttons/NextPrevButton";
import UserResponseCard from "../../components/cards/UserResponseCard";
import UserResponseForm from "../../components/UserResponseForm";
import Modal from "../../components/modals/Modal";
import { useGlobalContext } from "../../contexts/AppContext";

const Solution = () => {
  const { data, setData, showModal } = useGlobalContext();
  const [newSolution, setNewSolution] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [showTextarea, setShowTextarea] = useState(false);

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setNewSolution((prevState) => {
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
          solutions: prevState.blocks.solutions
            ? [...prevState.blocks.solutions, newSolution]
            : [newSolution],
        },
      };
    });

    // Clear the form
    setNewSolution({
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
        <h2 className="text-2xl mb-3 font-semibold font-montserrat">
          Solution
        </h2>
        <p className="font-poppins font-extralight leading-6 md:w-[90%]">
          In the Lean Canvas, the <span className="font-medium">Solution </span>
          component revolves around outlining how your business intends to
          address and solve the problems identified in the{" "}
          <span className="font-medium">Problem </span>
          block. It&apos;s about presenting a clear and innovative solution that
          adds value to your target customers.
        </p>
      </div>

      <div className="my-8">
        <img
          src="../images/solution.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="Helping a partner"
        />
      </div>

      {/* BREAKDOWN OF THE SOLUTION BLOCK */}
      <div className="mb-8">
        <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
          Here&apos;s a Breakdown of the Solution Block
        </h3>
        <div className="font-poppins font-light text-base flex flex-wrap justify-center gap-4">
          {solutionBreakdown.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="my-4">
        <CaseStudyComponent {...caseSolutions} />
      </div>

      {/* QUESTION AND FORM TO ADD SOLUTIONS(S) IDENTIFIED */}
      <div className="my-6 md:w-full lg:w-[95%] custom-bg px-5 py-7 rounded-lg">
        <h3 className="text-xl font-medium font-montserrat mb-2">
          Brainstorm: Identifying the Solution
        </h3>
        <p className="font-poppins font-light leading-6 mb-3">
          What is your proposed solution to the identified problem(s)?
        </p>

        {showTextarea ? (
          <UserResponseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={newSolution.title}
            description={newSolution.description}
          />
        ) : (
          <button
            onClick={() => setShowTextarea(true)}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-full text-center">
            Add Solution
          </button>
        )}

        {/* SOLUTIONS LISTED BY USER */}
        {data.blocks.solutions && (
          <div className="w-full">
            {data.blocks.solutions.length > 0 && (
              <div className="my-6">
                <h3 className="my-2 text-xl font-medium font-montserrat mb-2">
                  {data.blocks.solutions.length > 1
                    ? "Proposed Solutions"
                    : "Proposed Solution"}
                </h3>

                <ol className="shadow-2xl rounded-lg p-3">
                  {data.blocks.solutions.map((solution) => (
                    <div key={solution.id}>
                      <UserResponseCard
                        key={solution.id}
                        {...solution}
                        arr={data.blocks.solutions}
                        propName="solutions"
                      />
                      <div
                        className={`${
                          showModal
                            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
                            : null
                        }`}>
                        {showModal && (
                          <Modal
                            arr={data.blocks.solutions}
                            propName="solutions"
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
        <ProTipCard content={solutionProTip} />
      </div>

      <div className="flex justify-between lg:w-[95%]">
        <NextPrevButton prevStep="../customers" text="Prev" />
        <NextPrevButton nextStep="../unique-value-proposition" text="Next" />
      </div>
    </section>
  );
};

export default Solution;
