import { PDFViewer } from "@react-pdf/renderer";
import SummaryPDF from "./SummaryPDF";

const About = () => {
  return (
    <section>
      <h1>PDF TEST</h1>
      <PDFViewer className="w-full h-[100vh]">
        <SummaryPDF />
      </PDFViewer>
    </section>
  );
};

export default About;
