import { React, useState } from "react";
import Logo from "../assets/logo_transparent.png";
import { NavLink, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";

import SearchComponent from "./SearchComponent";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const [DropDownOpen, setDropDownOpen] = useState(false);

  const DropdownMenu = ({ dropdownItems }) => {
    return (
      <div
        className="absolute bg-slate-600 flex-col"
        onMouseEnter={() => setDropDownOpen(true)}
        onMouseLeave={() => setDropDownOpen(false)}
      >
        {dropdownItems &&
          dropdownItems.map((firstdropdown, index) => {
            return (
              <div className="border border-b-black">
                <p className="p-4 text-white hover:text-black" key={index}>
                  {firstdropdown.name}
                </p>
              </div>
            );
          })}
      </div>
    );
  };

  const navItems = [
    {
      name: "Home",
      icon: <FaHome />,
      link: "/",
    },
    {
      name: "Notes",
      icon: <CgNotes />,
      dropdown: [
        {
          name: "First Sem",
          subdropdown:[
            {
              name: "Digital Logic"
            },
            {
              name: "Computer Fundamentals"
            }
          ]
        },
        {
          name: "Second Sem",
        },
        {
          name: "Third Sem",
        },
      ],
    },
    {
      name: "About",
      icon: <FaCircleInfo />,
      link: "/about",
    },
  ];

  return (
    <div>
      <div className="flex flex-col bg-slate-600">
        {/* hide search component on top when it is greater than 460px */}
        <div className="w-[100%] mt-2 ml-2 xs:hidden">
          <SearchComponent />
        </div>
        <div className="flex">
          <div>
            <Link to="/">
              <img src={Logo} alt="logo" className="w-44 h-20 pt-2 pb-2 pl-2" />
            </Link>
          </div>

          {/* Navigation Items */}
          {/* Hide for small screens */}
          {!Nav && (
            <div className="hidden xs:flex justify-center items-center flex-grow pl-2">
              <nav className="flex h-[100%] justify-center items-center">
                {navItems.map((data, index) => (
                  <div key={index} className="h-[100%]">
                    <NavLink
                      key={index}
                      to={data.link}
                      onMouseEnter={() => {
                        if (data.name === "Notes" && data.dropdown) {
                          setDropDownOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (data.name === "Notes" && data.dropdown) {
                          setDropDownOpen(false);
                        }
                      }}
                      className="p-4 text-white flex h-[100%] justify-center items-center"
                    >
                      {data.icon}
                      {data.name}
                    </NavLink>
                    {/* Render dropdown menu if present */}
                    {data.name === "Notes" && DropDownOpen && (
                      <DropdownMenu dropdownItems={data.dropdown} />
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}

          <div className="w-[100%] flex justify-end items-center">
            {/* Search Component */}
            {!Nav && (
              <div className="hidden xs:flex justify-center items-center ">
                <SearchComponent />
              </div>
            )}

            {/* Hamburger Menu */}
            <div className="xs:hidden pr-3 pl-3" onClick={() => setNav(!Nav)}>
              <Hamburger />
            </div>
          </div>
        </div>
        {Nav && (
          <div className="flex justify-center items-center flex-grow pl-16">
            <nav className="flex flex-col">
              {navItems.map((data, index) => (
                <NavLink
                  key={index}
                  to={data.link}
                  className="p-4 text-white flex"
                >
                  {data.icon}
                  {data.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
