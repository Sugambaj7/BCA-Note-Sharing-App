import React from "react";
import Logo from "../assets/logo_transparent.png";
import { NavLink, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import SearchComponent from "./SearchComponent";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      icon: <FaHome />,
      link: "/",
    },
    {
      name: "Notes",
      icon: <CgNotes />,
      link: "/notes",
    },
    {
      name: "About",
      icon: <FaCircleInfo />,
      link: "/about",
    },
  ];
  return (
    <div>
      <div className="flex bg-slate-600 justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="w-44 h-20 pt-2 pb-2 pl-2" />
          </Link>
        </div>

        <div className="flex justify-center items-center flex-grow">
          <nav className="flex">
            {navItems.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  to={`${data.link}`}
                  className="p-4 text-white flex"
                >
                  {data.icon}
                  {data.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="flex justify-center items-center">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
