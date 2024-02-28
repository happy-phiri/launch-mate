import { useState, useId } from "react";
import { problemBreakdown } from "../../constants";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import ProTipCard from "../../components/cards/ProTipCard";
import { problemProTip } from "../../constants";
import { caseProblems } from "../../constants/caseStudyData";
import CaseStudyComponent from "../../components/case-study/CaseStudy";
import NextPrevButton from "../../components/buttons/NextPrevButton";
import UserResponseCard from "../../components/cards/UserResponseCard";
import UserResponseForm from "../../components/UserResponseForm";
import Modal from "../../components/modals/Modal";
import { useGlobalContext } from "../../contexts/AppContext";

const Problem = () => {
  const { data, setData, showModal } = useGlobalContext();
  const [newProblem, setNewProblem] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [showTextarea, setShowTextarea] = useState(false);

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setNewProblem((prevState) => {
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
          problems: prevState.blocks.problems
            ? [...prevState.blocks.problems, newProblem]
            : [newProblem],
        },
      };
    });

    // Clear the form
    setNewProblem({
      id: "",
      title: "",
      description: "",
    });

    setShowTextarea(false);
  };

  return (
    <section className="mb-5">
      {/* BRIEF EXPLANATION OF THE PROBLEM BLOCK OF THE LEAN CANVAS */}
      <div className="mb-3">
        <h2 className="text-2xl mb-3 font-semibold font-montserrat">
          Problem (Pain Points)
        </h2>
        <p className="font-poppins font-extralight leading-6 md:w-[90%]">
          In the Lean Canvas, the <span className="font-medium">Problem</span>{" "}
          statement isn&apos;t just a starting point — it&apos;s a catalyst for
          groundbreaking ideas. It emphasizes creating impactful solutions,
          empathizing with your potential customers, understanding their
          challenges, and gearing your business towards providing meaningful
          solutions.
        </p>
        <p className="font-poppins font-extralight mt-1 leading-6 md:w-[90%]">
          As you use the Lean Canvas, remember: the Problem section is more than
          a puzzle piece; it&apos;s where you paint a story of innovation,
          empathy, and purpose.
        </p>
      </div>

      <div className="my-8">
        <img
          src="../images/problem.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="Illustration of an overwhelmed girl"
        />
      </div>

      {/* BREAKDOWN OF THE PROBLEM BLOCK */}
      <div className="mb-8">
        <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
          Breakdown of the Problem Block
        </h3>
        <div className="font-poppins font-light text-base flex flex-wrap justify-start gap-4">
          {problemBreakdown.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="my-4">
        <CaseStudyComponent {...caseProblems} />
      </div>

      {/* QUESTION AND FORM TO ADD PROBLEM(S) IDENTIFIED */}
      <div className="my-6 md:w-full lg:w-[95%] custom-bg px-5 py-7 rounded-lg">
        <h3 className="mb-2 text-xl font-medium font-montserrat">
          Brainstorm: Identifying the Problem(s)
        </h3>
        <p className="font-poppins font-light leading-6 mb-3">
          What specific problems or pain points are you looking to address for
          your target customers?
        </p>

        {showTextarea ? (
          <UserResponseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={newProblem.title}
            description={newProblem.description}
          />
        ) : (
          <button
            onClick={() => setShowTextarea(true)}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-full text-center">
            Add Problem
          </button>
        )}

        {/* PROBLEMS LISTED BY USER */}
        {data.blocks.problems && (
          <div className="w-full">
            {data.blocks.problems.length > 0 && (
              <div className="my-6">
                <h3 className="my-2 text-xl font-medium font-montserrat mb-2">
                  {data.blocks.problems.length > 1
                    ? "Problems Identified"
                    : "Problem Identified"}
                </h3>

                <ol className="shadow-2xl rounded-lg p-3">
                  {data.blocks.problems.map((problem) => (
                    <div key={problem.id}>
                      <UserResponseCard
                        key={problem.id}
                        {...problem}
                        arr={data.blocks.problems}
                        propName="problems"
                      />
                      <div
                        className={`${
                          showModal
                            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
                            : null
                        }`}>
                        {showModal && (
                          <Modal
                            arr={data.blocks.problems}
                            propName="problems"
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
        <ProTipCard content={problemProTip} />
      </div>

      <div className="flex justify-between lg:w-[95%]">
        <NextPrevButton prevStep=".." text="Prev" />
        <NextPrevButton nextStep="../customers" text="Next" />
      </div>
    </section>
  );
};

export default Problem;
