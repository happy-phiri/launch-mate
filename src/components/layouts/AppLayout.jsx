import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const AppLayout = () => {
  return (
    <main className="max-w-full bg-amber-50">
      <section className="flex flex-col justify-start min-h-[100dvh]">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </main>
  );
};

export default AppLayout;
