import { useState, useId } from "react";
import {
  unfairAdvantageBreakdown,
  unfairAdvantageProTip,
} from "../../constants";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import ProTipCard from "../../components/cards/ProTipCard";
import { caseUfairAdvantage } from "../../constants/caseStudyData";
import CaseStudyComponent from "../../components/case-study/CaseStudy";
import NextPrevButton from "../../components/buttons/NextPrevButton";
import UserResponseCard from "../../components/cards/UserResponseCard";
import UserResponseForm from "../../components/UserResponseForm";
import Modal from "../../components/modals/Modal";
import { useGlobalContext } from "../../contexts/AppContext";

const UnfairAdvantage = () => {
  const { data, setData, showModal } = useGlobalContext();
  const [newUnfairAdvantage, setNewUnfairAdvantage] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [showTextarea, setShowTextarea] = useState(false);

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setNewUnfairAdvantage((prevState) => {
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
          unfairAdvantage: prevState.blocks.unfairAdvantage
            ? [...prevState.blocks.unfairAdvantage, newUnfairAdvantage]
            : [newUnfairAdvantage],
        },
      };
    });

    // Clear the form
    setNewUnfairAdvantage({
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
          Unfair Advantage
        </h2>
        <p className="font-poppins font-extralight leading-6 md:w-[90%]">
          The <span className="font-medium">Unfair Advantage </span>
          component focuses on what sets your business apart from the
          competition. It&apos;s about identifying a unique edge that gives your
          venture a distinct advantage. Understanding and leveraging your unfair
          advantage is essential for building a sustainable and competitive
          business. By precisely defining this advantage, you&apos;re
          positioning your company to excel in the market and outperform
          competitors.
        </p>
      </div>

      <div className="my-8">
        <img
          src="../images/unfair-advantage.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="A man about to run surrounded by things that give him the competitive edge"
        />
      </div>

      {/* BREAKDOWN OF THE SOLUTION BLOCK */}
      <div className="mb-8">
        <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
          Here&apos;s a Breakdown of the Unfair Advantage Block
        </h3>
        <div className="font-poppins font-light text-base flex flex-wrap justify-start gap-4">
          {unfairAdvantageBreakdown.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="my-4">
        <CaseStudyComponent {...caseUfairAdvantage} />
      </div>

      {/* QUESTION AND FORM TO ADD SOLUTIONS(S) IDENTIFIED */}
      <div className="my-6 md:w-full lg:w-[95%] custom-bg px-5 py-7 rounded-lg">
        <h3 className="text-xl font-medium font-montserrat mb-2">
          Brainstorm: Identifying the Unfair Advantages
        </h3>
        <p className="font-poppins font-light leading-6 mb-3">
          Do you have any unique advantages that give your business an edge?
        </p>

        {showTextarea ? (
          <UserResponseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={newUnfairAdvantage.title}
            description={newUnfairAdvantage.description}
          />
        ) : (
          <button
            onClick={() => setShowTextarea(true)}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-full text-center">
            Add Unfair Advantage
          </button>
        )}

        {/* SOLUTIONS LISTED BY USER */}
        {data.blocks.unfairAdvantage && (
          <div className="w-full">
            {data.blocks.unfairAdvantage.length > 0 && (
              <div className="my-6">
                <h3 className="my-2 text-xl font-medium font-montserrat mb-2">
                  {data.blocks.unfairAdvantage.length > 1
                    ? "Unfair Advantages"
                    : "Unfair Advantage"}
                </h3>

                <ol className="shadow-2xl rounded-lg p-3">
                  {data.blocks.unfairAdvantage.map((advantage) => (
                    <div key={advantage.id}>
                      <UserResponseCard
                        key={advantage.id}
                        {...advantage}
                        arr={data.blocks.unfairAdvantage}
                        propName="unfairAdvantage"
                      />
                      <div
                        className={`${
                          showModal
                            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
                            : null
                        }`}>
                        {showModal && (
                          <Modal
                            arr={data.blocks.unfairAdvantage}
                            propName="unfairAdvantage"
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
        <ProTipCard content={unfairAdvantageProTip} />
      </div>

      <div className="flex justify-between lg:w-[95%]">
        <NextPrevButton prevStep="../unique-value-proposition" text="Prev" />
        <NextPrevButton nextStep="../channels" text="Next" />
      </div>
    </section>
  );
};

export default UnfairAdvantage;
