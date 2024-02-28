import { NavLink, Outlet } from "react-router-dom";

const LeanCanvasLayout = () => {
  return (
    <section className="mb-10">
      <div className="max-w-7xl max-xl:px-6 mx-auto grid grid-cols-1 lg:grid-cols-7 ">
        <aside className="lg:col-span-2 w-full h-fit lg:mt-6 mb-6 border rounded-md">
          <nav className="flex lg:flex-col md:gap-6 gap-4 flex-wrap justify-center w-full px-6 py-8">
            <NavLink
              to="."
              end
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                0
              </span>{" "}
              <span className="hidden lg:inline">Introduction</span>
            </NavLink>

            <NavLink
              to="problem"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                1
              </span>{" "}
              <span className="hidden lg:inline">Problem</span>
            </NavLink>

            <NavLink
              to="customers"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                2
              </span>{" "}
              <span className="hidden lg:inline">Customers</span>
            </NavLink>

            <NavLink
              to="solution"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                3
              </span>{" "}
              <span className="hidden lg:inline">Solution</span>
            </NavLink>

            <NavLink
              to="unique-value-proposition"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                4
              </span>{" "}
              <span className="hidden lg:inline">Unique Value Proposition</span>
            </NavLink>

            <NavLink
              to="unfair-advantage"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                5
              </span>{" "}
              <span className="hidden lg:inline">Unfair Advantage</span>
            </NavLink>

            <NavLink
              to="channels"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                6
              </span>{" "}
              <span className="hidden lg:inline">Channels</span>
            </NavLink>

            <NavLink
              to="costs"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                7
              </span>{" "}
              <span className="hidden lg:inline">Costs</span>
            </NavLink>

            <NavLink
              to="revenue"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                8
              </span>{" "}
              <span className="hidden lg:inline">Revenue</span>
            </NavLink>

            <NavLink
              to="key-metrics"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                9
              </span>{" "}
              <span className="hidden lg:inline">Key Metrics</span>
            </NavLink>

            <NavLink
              to="summary"
              className="flex gap-3 items-center font-montserrat">
              <span className="rounded-full border border-purple-500 flex justify-center items-center h-8 w-8">
                10
              </span>{" "}
              <span className="hidden lg:inline">Summary</span>
            </NavLink>
          </nav>
        </aside>
        <section className="md:col-span-5 md:mt-10 lg:pl-6">
          <Outlet />
        </section>
      </div>
    </section>
  );
};

export default LeanCanvasLayout;
