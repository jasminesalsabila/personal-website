import { useState, useEffect } from "react";
import React from "react";
import "./header.css";
import ME from "../../assets/robot.png";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { WorkOutlined } from "@mui/icons-material";

const Header = () => {
  return (
    <header>
      <h2> Hello I'm </h2>
      <h1> Jasmine Salsabila Z. </h1>
      <h4 className="text-light">
        <span>
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={2000}
            words={[
              "Co-Owner Jafa Craft n Design",
              "SHS Student",
              "Graphic Designer",
            ]}
          />
        </span>
      </h4>

      <a href="Jafa" className="btn">
        Jafa 👀
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>

      <div className="header-social">
        <a href="https://www.instagram.com/jafacraft/">
          <BsInstagram color="var(--color-primary)" />
        </a>
        <a href="https://id.pinterest.com/jazzmiinzz/">
          <BsPinterest color="var(--color-primary)" />
        </a>
        <a href="https://github.com/jasminesalsabila">
          <AiOutlineGithub color="var(--color-primary)" />
        </a>
      </div>

      <div className="me">
        <img src={ME} alt="robotimg" />
      </div>

      <p className="scroll-down">Scroll Down</p>
    </header>
  );
};

export default Header;
