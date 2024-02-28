import { useState } from "react";
import SummaryCard from "../../components/cards/SummaryCard";
import SummaryModal from "../../components/modals/SummaryModal";
import { useGlobalContext } from "../../contexts/AppContext";

const Summary = () => {
  // const [showModal, setShowModal] = useState(false);
  const { data } = useGlobalContext();
  const [modalState, setModalState] = useState({ show: false, type: "" });

  const handleModalToggle = (type, name) => {
    setModalState((prevState) => ({
      show: !prevState.show,
      name: prevState.name ? "" : name,
      type: prevState.type ? "" : type,
    }));
    // renderModal();
  };

  const renderModal = () => {
    if (modalState.show) {
      return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop">
          <SummaryModal
            arr={data.blocks[modalState.type]}
            name={modalState.name}
            showModal={modalState.show}
            setModalState={setModalState}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <section className="mb-5 relative z-5">
      <div className="">
        <h2 className="text-2xl mb-3 font-semibold font-montserrat">Summary</h2>
      </div>

      <div className="grid md:grid-cols-[1fr,1fr] md:auto-rows-auto xl:grid-cols-[1fr,1fr,0.5fr,0.5fr,1fr,1fr] xl:grid-rows-[1fr,1fr,1fr] gap-[0px] max-xl:gap-3">
        <div
          onClick={() => handleModalToggle("problems", "Problem")}
          className="xl:row-start-1 xl:row-end-3 xl:col-start-1 xl:col-end-2 p-2 border max-xl:rounded-lg border-slate-300 hover:cursor-pointer hover:bg-amber-50 hover:border-slate-500">
          <SummaryCard arr={data.blocks.problems} name="Problem" />
        </div>

        <div
          onClick={() => handleModalToggle("customers", "Customer Segments")}
          className="xl:row-start-1 xl:row-end-3 xl:col-start-6 xl:col-end-7 p-2 border max-xl:rounded-lg border-slate-300 hover:cursor-pointer hover:bg-amber-50 hover:border-slate-500">
          <SummaryCard arr={data.blocks.customers} name="Customer Segments" />
        </div>

        <div
          onClick={() => handleModalToggle("solutions", "Solution")}
          className="xl:row-start-1 xl:row-end-2 xl:col-start-2 xl:col-end-3 p-2 border max-xl:rounded-lg border-slate-300 hover:cursor-pointer hover:bg-amber-50 hover:border-slate-500">
          <SummaryCard arr={data.blocks.solutions} name="Solution" />
        </div>

        <div
          onClick={() =>
            handleModalToggle(
              "uniqueValueProposition",
              "Unique Value Proposition"
            )
          }
          className="xl:row-start-1 xl:row-end-3 xl:col-start-3 xl:col-end-5 p-2 border max-xl:rounded-lg border-slate-300 hover:cursor-pointer hover:bg-amber-50 hover:border-slate-500">
          <SummaryCard
            arr={data.blocks.uniqueValueProposition}
            name="Unique Value Proposition"
          />
        </div>

        <div
          onClick={() =>
            handleModalToggle("unfairAdvantage", "Unfair Advantage")
          }
          className="xl:row-start-1 xl:row-end-2 xl:col-start-5 xl:col-end-6 p-2 border max-xl:rounded-lg border-slate-300 hover:cursor-pointer hover:bg-amber-50 hover:border-slate-500">
          <SummaryCard
            arr={data.blocks.unfairAdvantage}
            name="Unfair Advantage"
          />
        </div>

        <div
          onClick={() => handleModalToggle("channels", "Channels")}
          className="xl:row-start-2 xl:row-end-3 xl:col-start-5 xl:col-end-6 p-2 border max-xl:rounded-lg border-slate-300 hover:cursor-pointer hover:bg-amber-50 hover:border-slate-500">
          <SummaryCard arr={data.blocks.channels} name="Channel" />
        </div>

        <div
          onClick={() => handleModalToggle("costs", "Cost Structure")}
          className="xl:row-start-3 xl:row-end-4 xl:col-start-1 xl:col-end-4 p-2 border max-xl:rounded-lg border-slate-300 hover:cursor-pointer hover:bg-amber-50 hover:border-slate-500">
          <SummaryCard arr={data.blocks.costs} name="Cost Structure" />
        </div>

        <div
          onClick={() => handleModalToggle("revenue", "Revenue Streams")}
          className="xl:row-start-3 xl:row-end-4 xl:col-start-4 xl:col-end-7 p-2 border max-xl:rounded-lg border-slate-300 hover:cursor-pointer hover:bg-amber-50 hover:border-slate-500">
          <SummaryCard arr={data.blocks.revenue} name="Revenue Streams" />
        </div>

        <div
          onClick={() => handleModalToggle("keyMetrics", "Key Metrics")}
          className="xl:row-start-2 xl:row-end-3 xl:col-start-2 xl:col-end-3 p-2 border max-xl:rounded-lg border-slate-300 hover:cursor-pointer hover:bg-amber-50 hover:border-slate-500">
          <SummaryCard arr={data.blocks.keyMetrics} name="Key Metrics" />
        </div>
      </div>

      {renderModal()}
    </section>
  );
};

export default Summary;
