import { useState, useId } from "react";
import { revenueBreakdown, revenueProTip } from "../../constants";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import ProTipCard from "../../components/cards/ProTipCard";
import { caseRevenue } from "../../constants/caseStudyData";
import CaseStudyComponent from "../../components/case-study/CaseStudy";
import NextPrevButton from "../../components/buttons/NextPrevButton";
import UserResponseCard from "../../components/cards/UserResponseCard";
import UserResponseForm from "../../components/UserResponseForm";
import Modal from "../../components/modals/Modal";
import { useGlobalContext } from "../../contexts/AppContext";

const RevenueStreams = () => {
  const { data, setData, showModal } = useGlobalContext();
  const [newRevenue, setNewRevenue] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [showTextarea, setShowTextarea] = useState(false);

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setNewRevenue((prevState) => {
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
          revenue: prevState.blocks.revenue
            ? [...prevState.blocks.revenue, newRevenue]
            : [newRevenue],
        },
      };
    });

    // Clear the form
    setNewRevenue({
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
          Revenue Streams
        </h2>
        <p className="font-poppins font-extralight leading-6 md:w-[90%]">
          In the Lean Canvas, the{" "}
          <span className="font-medium">Revenue Streams</span> component focuses
          on understanding how your business generates income and sustains
          itself financially. It involves identifying and quantifying the
          various sources of revenue that contribute to your business&apos;s
          overall financial success.
        </p>
        <p className="font-poppins font-extralight mt-1 leading-6 md:w-[90%]">
          Understanding and diversifying your revenue streams is fundamental for
          a resilient and sustainable business model. By precisely defining your
          sources of income, you lay the groundwork for effective financial
          planning, flexibility, and long-term profitability.
        </p>
      </div>

      <div className="my-8">
        <img
          src="../images/revenue.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="A girl in a retail shop looking at clothes"
        />
      </div>

      {/* BREAKDOWN OF THE SOLUTION BLOCK */}
      <div className="mb-8">
        <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
          Here&apos;s a Breakdown of the Revenue Streams Block
        </h3>
        <div className="font-poppins font-light text-base flex flex-wrap justify-start gap-4">
          {revenueBreakdown.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="my-4">
        <CaseStudyComponent {...caseRevenue} />
      </div>

      {/* QUESTION AND FORM TO ADD SOLUTIONS(S) IDENTIFIED */}
      <div className="my-6 md:w-full lg:w-[95%] custom-bg px-5 py-7 rounded-lg">
        <h3 className="text-xl font-medium font-montserrat mb-2">
          Brainstorm: Identifying the Revenue Streams
        </h3>
        <p className="font-poppins font-light leading-6 mb-3">
          How do you plan to generate revenue for your business?
        </p>

        {showTextarea ? (
          <UserResponseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={newRevenue.title}
            description={newRevenue.description}
          />
        ) : (
          <button
            onClick={() => setShowTextarea(true)}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-full text-center">
            Add Revenue Stream
          </button>
        )}

        {/* SOLUTIONS LISTED BY USER */}
        {data.blocks.revenue && (
          <div className="w-full">
            {data.blocks.revenue.length > 0 && (
              <div className="my-6">
                <h3 className="my-2 text-xl font-medium font-montserrat mb-2">
                  {data.blocks.revenue.length > 1
                    ? "Revenue Streams"
                    : "Revenue Stream"}
                </h3>

                <ol className="shadow-2xl rounded-lg p-3">
                  {data.blocks.revenue.map((revenueItem) => (
                    <div key={revenueItem.id}>
                      <UserResponseCard
                        key={revenueItem.id}
                        {...revenueItem}
                        arr={data.blocks.revenue}
                        propName="revenue"
                      />
                      <div
                        className={`${
                          showModal
                            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
                            : null
                        }`}>
                        {showModal && (
                          <Modal arr={data.blocks.revenue} propName="revenue" />
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
        <ProTipCard content={revenueProTip} />
      </div>

      <div className="flex justify-between lg:w-[95%]">
        <NextPrevButton prevStep="../costs" text="Prev" />
        <NextPrevButton nextStep="../key-metrics" text="Next" />
      </div>
    </section>
  );
};

export default RevenueStreams;
