import { useState, useId } from "react";
import { channelsBreakdown, channelsProTip } from "../../constants";
import BuildingBlockCard from "../../components/cards/BuildingBlockCard";
import ProTipCard from "../../components/cards/ProTipCard";
import { caseChannels } from "../../constants/caseStudyData";
import CaseStudyComponent from "../../components/case-study/CaseStudy";
import NextPrevButton from "../../components/buttons/NextPrevButton";
import UserResponseCard from "../../components/cards/UserResponseCard";
import UserResponseForm from "../../components/UserResponseForm";
import Modal from "../../components/modals/Modal";
import { useGlobalContext } from "../../contexts/AppContext";

const Channels = () => {
  const { data, setData, showModal } = useGlobalContext();
  const [newChannel, setNewChannel] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [showTextarea, setShowTextarea] = useState(false);

  // GENERATE UNIQUE ID
  const id = `${useId()}-${Math.floor(Math.random() * 10000)}`;

  // HANDLES USER INPUT
  const handleChange = (e) => {
    setNewChannel((prevState) => {
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
          channels: prevState.blocks.channels
            ? [...prevState.blocks.channels, newChannel]
            : [newChannel],
        },
      };
    });

    // Clear the form
    setNewChannel({
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
          Channels
        </h2>
        <p className="font-poppins font-extralight leading-6 md:w-[90%]">
          The <span className="font-medium">Channels </span>component in the
          Lean Canvas focuses on how your business reaches and communicates with
          its customers. It involves defining the specific methods or avenues
          through which your products or services are delivered to and accessed
          by your target audience.
        </p>
        <p className="font-poppins font-extralight mt-1 leading-6 md:w-[90%]">
          Understanding and optimizing your chosen channels is essential for
          effective customer outreach and engagement. By precisely defining and
          leveraging these channels, you position your company to reach its
          target audience efficiently, ultimately contributing to business
          growth.
        </p>
      </div>

      <div className="my-8">
        <img
          src="../images/channels.svg"
          className="sm:w-[50%] w-full mx-auto"
          alt="A man and woman with different marketing channels"
        />
      </div>

      {/* BREAKDOWN OF THE SOLUTION BLOCK */}
      <div className="mb-8">
        <h3 className="my-2 text-xl font-medium font-montserrat mb-4">
          Here&apos;s a Breakdown of the Channels Block
        </h3>
        <div className="font-poppins font-light text-base flex flex-wrap justify-start gap-4">
          {channelsBreakdown.map((block) => {
            return <BuildingBlockCard key={block.step} {...block} />;
          })}
        </div>
      </div>

      <div className="my-4">
        <CaseStudyComponent {...caseChannels} />
      </div>

      {/* QUESTION AND FORM TO ADD SOLUTIONS(S) IDENTIFIED */}
      <div className="my-6 md:w-full lg:w-[95%] custom-bg px-5 py-7 rounded-lg">
        <h3 className="text-xl font-medium font-montserrat mb-2">
          Brainstorm: Identifying your Channel(s)
        </h3>
        <p className="font-poppins font-light leading-6 mb-3">
          Through which channels will you reach your target customers and what
          is your distribution strategy for getting your product or service to
          market?
        </p>

        {showTextarea ? (
          <UserResponseForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={newChannel.title}
            description={newChannel.description}
          />
        ) : (
          <button
            onClick={() => setShowTextarea(true)}
            className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-full text-center">
            Add Channel
          </button>
        )}

        {/* CHANNELS LISTED BY USER */}
        {data.blocks.channels && (
          <div className="w-full">
            {data.blocks.channels.length > 0 && (
              <div className="my-6">
                <h3 className="my-2 text-xl font-medium font-montserrat mb-2">
                  {data.blocks.channels.length > 1 ? "Channels" : "Channel"}
                </h3>

                <ol className="shadow-2xl rounded-lg p-3">
                  {data.blocks.channels.map((channel) => (
                    <div key={channel.id}>
                      <UserResponseCard
                        key={channel.id}
                        {...channel}
                        arr={data.blocks.channels}
                        propName="channels"
                      />
                      <div
                        className={`${
                          showModal
                            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
                            : null
                        }`}>
                        {showModal && (
                          <Modal
                            arr={data.blocks.channels}
                            propName="channels"
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
        <ProTipCard content={channelsProTip} />
      </div>

      <div className="flex justify-between lg:w-[95%]">
        <NextPrevButton prevStep="../unfair-advantage" text="Prev" />
        <NextPrevButton nextStep="../costs" text="Next" />
      </div>
    </section>
  );
};

export default Channels;
