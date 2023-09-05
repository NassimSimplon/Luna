import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
type Props = object;

const Navbar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 769 ? true : false);
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      {isOpen && (
        <ul>
          <li>About us</li>
          <li>Work with us</li>
          <li>FAQs</li>
          <li>Blog</li>
        </ul>
      )}
      <img
        className="menu"
        src={menu}
        alt="menu"
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </div>
  );
};

export default Navbar;
