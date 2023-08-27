import React, { useState } from "react";

//icons
import BarsIcon from "../assets/img/bars.png";
import CloseIcon from "../assets/img/close.png";

//navigation data
import { navigation } from "../data";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="lg:hidden relative z-20">
      {/* menu icon */}
      <button onClick={() => setIsOpen(true)}>
        <img src={BarsIcon} alt="bar icon" />
      </button>
      {/* nav list */}
      <ul
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-primary fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg`}
      >
        {/* close button */}
        <button
          className="absolute top-6 left-6"
          onClick={() => setIsOpen(false)}
        >
          <img src={CloseIcon} alt="close" />
        </button>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                offset={-200}
                className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
