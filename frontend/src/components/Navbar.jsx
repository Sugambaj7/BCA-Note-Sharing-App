import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      icon: "home icon",
      link: "/",
    },
    {
      name: "About",
      icon: "about icon",
      link: "/about",
    },
  ];
  return (
    <div className="w-[100%] h-3 bg-pink-400">
      <nav>
        {navItems.map((data, index) => {
          return (
            <NavLink key={index} to={`${data.link}`} className="text-white p-4">
              {data.icon}
              {data.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
