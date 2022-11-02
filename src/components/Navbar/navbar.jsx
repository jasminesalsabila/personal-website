import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiFolder } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { AiFillFormatPainter } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#Skills">
        <AiFillFormatPainter />
      </a>
      <a href="#portofolio">
        <HiFolder />
      </a>
      <a href="#contact">
        <ImPhone />
      </a>
    </nav>
  );
};

export default Navbar;
