import React, { useState } from "react";

import Logo from "../assets/images/Logo.png";
import { navigation } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";

const MainNavbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <div className="sticky top-0 left-0 w-full z-50 border-b border-n-6 bg-n-8/90 md:backdrop-blur-sm">
      <div className="flex items-center px-5 md:px-7.5 xl:px-10 max-md:py-4">
        <a className="flex items-center block w-[12rem] md:mr-8" href="/">
          <img src={Logo} alt="Logo" width={40} height={40} />
          <span className="hidden md:block font-code text-2xl uppercase md:text-md md:font-bold px-4 space-nowrapwhite">
            Jonathan Jimena Jr.
          </span>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed inset-0 bg-n-8 md:static md:flex md:mx-auto md:bg-transparent w-full`}
        >
          <div className="relative z-2 flex flex-col items-center m-auto md:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.url}`}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 md:-mr-0.25 md:text-xs md:font-semibold`}
                onClick={() => setOpenNavigation(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <div className="relative flex justify-end items-center md:hidden w-full">
          <button
            className="flex items-center justify-center w-10 h-10"
            onClick={() => setOpenNavigation(!openNavigation)}
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
