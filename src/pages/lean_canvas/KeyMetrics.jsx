import { useState, useId } from "react";
import { keyMetricsBreakdown, keyMetricsProTip } from "../../constants";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import ProTipCard from "../../components/cards/ProTipCard";
import { caseKeyMetrics } from "../../constants/caseStudyData";
import CaseStudyComponent from "../../components/case-study/CaseStudy";
import NextPrevButton from "../../components/buttons/NextPrevButton";
import UserResponseCard from "../../components/cards/UserResponseCard";
import UserResponseForm from "../../components/UserResponseForm";
import Modal from "../../components/modals/Modal";
import { useGlobalContext } from "../../contexts/AppContext";

const KeyMetrics = () => {
  const { data, setData, showModal } = useGlobalContext();
  const [newKeyMetric, setNewKeyMetric] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [showTextarea, setShowTextarea] = useState(false);

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setNewKeyMetric((prevState) => {
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
          keyMetrics: prevState.blocks.keyMetrics
            ? [...prevState.blocks.keyMetrics, newKeyMetric]
            : [newKeyMetric],
        },
      };
    });

    // Clear the form
    setNewKeyMetric({
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
          Key Metrics
        </h2>
        <p className="font-poppins font-extralight leading-6 md:w-[90%]">
          In the Lean Canvas, the{" "}
          <span className="font-medium">Key Metrics</span> component focuses on
          identifying and measuring the critical indicators that help assess the
          performance and health of your business. It involves understanding the
          key data points and performance metrics that are instrumental in
          making informed decisions and driving growth.
        </p>
        <p className="font-poppins font-extralight mt-1 leading-6 md:w-[90%]">
          Understanding and monitoring key metrics is fundamental for making
          informed decisions and steering your business toward success. By
          precisely defining and analyzing these indicators, you lay the
          groundwork for effective performance optimization, growth, and
          sustainability.
        </p>
      </div>

      <div className="my-8">
        <img
          src="../images/metrics.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="People looking at graphs and charts"
        />
      </div>

      {/* BREAKDOWN OF THE SOLUTION BLOCK */}
      <div className="mb-8">
        <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
          Here&apos;s a Breakdown of the Key Metrics Block
        </h3>
        <div className="font-poppins font-light text-base flex flex-wrap justify-start gap-4">
          {keyMetricsBreakdown.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="my-4">
        <CaseStudyComponent {...caseKeyMetrics} />
      </div>

      {/* QUESTION AND FORM TO ADD SOLUTIONS(S) IDENTIFIED */}
      <div className="my-6 md:w-full lg:w-[95%] custom-bg px-5 py-7 rounded-lg">
        <h3 className="text-xl font-medium font-montserrat mb-2">
          Brainstorm: Identifying the Key Performance Indicators (KPIs)
        </h3>
        <p className="font-poppins font-light leading-6 mb-3">
          What key performance indicators (KPIs) will you use to measure the
          success of your business?
        </p>

        {showTextarea ? (
          <UserResponseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={newKeyMetric.title}
            description={newKeyMetric.description}
          />
        ) : (
          <button
            onClick={() => setShowTextarea(true)}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-full text-center">
            Add Key Metric
          </button>
        )}

        {/* SOLUTIONS LISTED BY USER */}
        {data.blocks.keyMetrics && (
          <div className="w-full">
            {data.blocks.keyMetrics.length > 0 && (
              <div className="my-6">
                <h3 className="my-2 text-xl font-medium font-montserrat mb-2">
                  {data.blocks.keyMetrics.length > 1
                    ? "Key Metrics"
                    : "Key Metric"}
                </h3>

                <ol className="shadow-2xl rounded-lg p-3">
                  {data.blocks.keyMetrics.map((metric) => (
                    <div key={metric.id}>
                      <UserResponseCard
                        key={metric.id}
                        {...metric}
                        arr={data.blocks.keyMetrics}
                        propName="keyMetrics"
                      />
                      <div
                        className={`${
                          showModal
                            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
                            : null
                        }`}>
                        {showModal && (
                          <Modal
                            arr={data.blocks.keyMetrics}
                            propName="keyMetrics"
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
        <ProTipCard content={keyMetricsProTip} />
      </div>

      <div className="flex justify-between lg:w-[95%]">
        <NextPrevButton prevStep="../revenue" text="Prev" />
        <NextPrevButton nextStep="../summary" text="Next" />
      </div>
    </section>
  );
};

export default KeyMetrics;
