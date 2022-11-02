import React from "react";
import "./about.css";
import { FaRobot } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="header-about">
        <h5>Get to know</h5>
        <h2>About me</h2>
      </div>

      <div className="about-container">
        <div className="about-me">
          <div className="about-me-img"></div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaRobot />
              <h5>Interested in</h5>
              <small>Robotics and UI UX design</small>
            </div>

            <div className="about-card">
              <div className="skill">
                <h5>My skills</h5>
                <li>
                  <small>Pixellab</small>
                  <span className="bar">
                    <span className="pixellab"></span>
                  </span>
                </li>

                <li>
                  <small>Figma</small>
                  <span className="bar ">
                    <span className="figma"></span>
                  </span>
                </li>

                <li>
                  <small>Adobe Illustrator</small>
                  <span className="bar">
                    <span className="adobe"></span>
                  </span>
                </li>
                <li>
                  <small>Power point</small>
                  <span className="bar">
                    <span className="ppt"></span>
                  </span>
                </li>
                <li>
                  <small>Inkscape</small>
                  <span className="bar">
                    <span className="inkscape"></span>
                  </span>
                </li>
                <li>
                  <small>Tes</small>
                  <span className="bar">
                    <span className="tes"></span>
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
