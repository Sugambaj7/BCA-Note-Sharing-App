import { React, useState } from "react";
import "../Hamburger.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(true);

  const setAnimation = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={setAnimation}
      className={`${isOpen ? "hamburgeropen" : "hamburgerclose"}`}
    >
      <div className="first-bar"></div>
      <div className="middle-bar"></div>
      <div className="last-bar"></div>
    </div>
  );
};

export default Hamburger;
