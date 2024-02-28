import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import LeanCanvasLayout from "./components/layouts/LeanCanvasLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Intro from "./pages/lean_canvas/Intro";
import Problem from "./pages/lean_canvas/Problem";
import Solution from "./pages/lean_canvas/Solution";
import UniqueValueProposition from "./pages/lean_canvas/UniqueValueProposition";
import UnfairAdvantage from "./pages/lean_canvas/UnfairAdvantage";
import CustomerSegments from "./pages/lean_canvas/CustomerSegments";
import Channels from "./pages/lean_canvas/Channels";
import KeyMetrics from "./pages/lean_canvas/KeyMetrics";
import CostStructure from "./pages/lean_canvas/CostStructure";
import RevenueStreams from "./pages/lean_canvas/RevenueStreams";
import Summary from "./pages/lean_canvas/Summary";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="plan" element={<LeanCanvasLayout />}>
              <Route index element={<Intro />} />
              <Route path="problem" element={<Problem />} />
              <Route path="solution" element={<Solution />} />
              <Route
                path="unique-value-proposition"
                element={<UniqueValueProposition />}
              />
              <Route path="unfair-advantage" element={<UnfairAdvantage />} />
              <Route path="customers" element={<CustomerSegments />} />
              <Route path="channels" element={<Channels />} />
              <Route path="key-metrics" element={<KeyMetrics />} />
              <Route path="costs" element={<CostStructure />} />
              <Route path="revenue" element={<RevenueStreams />} />
              <Route path="summary" element={<Summary />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
