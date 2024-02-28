import { useState } from "react";
import BenefitCard from "../../components/cards/BenefitCard";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import { buildingBlocks, benefits } from "../../constants";
import BasicInfoModal from "../../components/modals/BasicInfoModal";

const Start = () => {
  const [showBasicInfoModal, setShowBasicInfoModal] = useState(false);

  return (
    <section className="mb-5">
      <div className="mb-3">
        <h1 className="text-3xl leading-8 font-semibold  font-montserrat">
          Introduction to the Lean Canvas
        </h1>

        <p className="my-2 text-xl font-medium font-montserrat">
          A Strategic Blueprint for Your Startup
        </p>

        <p className="font-poppins font-light leading-6 md:w-[90%]">
          The Lean Canvas is a powerful tool designed to guide you through the
          essential elements of your startup&apos;s business model. Developed by
          Ash Maurya, the Lean Canvas is a concise, one-page framework that
          distills the complexities of business planning into nine key building
          blocks.
        </p>
      </div>

      <div className="my-8">
        <img
          src="images/intro.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="Illustration of a girl on a pathway"
        />
      </div>

      <div className="mb-10">
        <h2 className="font-montserrat font-medium text-xl mb-4">
          Why the Lean Canvas?
        </h2>
        <p className="font-poppins font-light leading-6 md:w-[90%]">
          The Lean Canvas is tailored for startups, emphasizing a rapid and
          iterative approach to business model development. It encourages
          entrepreneurs to focus on core components, make informed decisions,
          and adapt quickly in the ever-evolving landscape of entrepreneurship.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="font-montserrat font-medium text-xl mb-4">
          The Nine Building Blocks: A Step-by-Step Journey
        </h2>
        <div className="font-poppins font-light text-base flex flex-wrap justify-start gap-5">
          {buildingBlocks.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="font-montserrat font-medium text-xl mb-4">
          How the Lean Canvas Helps
        </h2>
        <div className="font-poppins font-light text-base flex flex-wrap justify-center gap-4">
          {benefits.map((benefit) => {
            return <BenefitCard key={benefit.name} {...benefit} />;
          })}
        </div>
      </div>

      <div className="mb-7">
        <div className="my-4 flex flex-col lg:flex-row">
          <img
            src="images/launching-rocket.svg"
            className="w-full sm:w-[50%] mx-auto max-lg:mb-3"
            alt="girl pressing start button to launch rocket"
          />

          <div className="lg:w-[60%] flex flex-col justify-center gap-4 items-start">
            <h2 className="font-montserrat font-medium text-xl">
              Let your Entrepreneurial Journey Begin
            </h2>
            <p className="font-poppins font-light text-base leading-6 w-full">
              As you embark on filling in each building block, remember that the
              Lean Canvas is not a static document. It&apos;s a living blueprint
              that evolves with your startup. Let&apos;s dive in, step by step,
              and shape the foundation of your business success.
            </p>

            <button
              onClick={() => setShowBasicInfoModal(true)}
              className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2">
              Start
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          showBasicInfoModal
            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
            : null
        }`}>
        {showBasicInfoModal && (
          <BasicInfoModal setShowBasicInfoModal={setShowBasicInfoModal} />
        )}
      </div>
    </section>
  );
};

export default Start;
