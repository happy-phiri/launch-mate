import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavToggle = () => {
    setShowNav((prevState) => !prevState);
    console.log(showNav);
  };

  return (
    <header className="shadow-lg z-10">
      <div
        className={`${
          showNav
            ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-0 modal-backdrop"
            : null
        }`}>
        <nav className="flex md:justify-between items-center py-2 mx-auto px-6 max-w-7xl xl:px-0 font-montserrat">
          <Link to="/">
            <img src="/images/logo.svg" alt="" width={120} className="" />
          </Link>

          <div
            className={`flex md:flex-row md:justify-end max-md:flex-col md:relative md:top-auto gap-7 max-md:overflow-hidden max-md:h-0 w-[60%] ${
              showNav
                ? "absolute max-md:overflow-visible max-md:h-full max-md:pl-10 max-md:pt-32 bg-amber-50 shadow-md top-0 left-0 ]"
                : "hidden"
            }}`}>
            <NavLink to="/" className="hover:text-purple-600 hover:font-medium">
              Home
            </NavLink>
            <NavLink
              to="plan"
              className="hover:text-purple-600 hover:font-medium">
              Plan
            </NavLink>
            <NavLink
              to="about"
              className="hover:text-purple-600 hover:font-medium">
              About
            </NavLink>
            <NavLink
              to="resources"
              className="hover:text-purple-600 hover:font-medium">
              Resources
            </NavLink>
          </div>
        </nav>
        <button
          onClick={handleNavToggle}
          className="absolute top-5 right-6 md:hidden z-100 ">
          {showNav ? (
            <FontAwesomeIcon icon={faXmark} size="xl" className="text-white" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
