import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:h-screen items-center lg:items-center max-lg:gap-5 max-w-7xl xl:mx-auto px-6 xl:px-0 max-sm:mt-10 md:mb-10">
      <div className="lg:w-[60%] xl:w-[50%] flex flex-col gap-6 items-start">
        <h1 className=" text-3xl lg:text-4xl leading-tight font-bold font-montserrat md:w-[80%] lg:w-[100%]">
          Innovate, Validate & Succeed - <br /> A Step by Step Guide to Building
          Successful Ventures
        </h1>
        <p className="font-montserrat font-light text-lg leading-normal md:w-[90%] lg:w-[80%]">
          Embark on a transformative entrepreneurial journey as we guide you
          every step of the way in turning your innovative ideas into thriving
          ventures that will stand the test of time and grow from strength to
          strength
        </p>
        <Link
          to="plan"
          className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 w-[30%] text-center">
          Start
        </Link>
      </div>
      <div className="lg:w-[40%] xl:w-[50%] flex justify-center">
        <img
          src="../images/hero.svg"
          alt=""
          className="w-full max-lg:w-[70%] self-center"
        />
      </div>
    </section>
  );
};

export default Home;
