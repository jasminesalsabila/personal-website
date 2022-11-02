import React from "react";
import Nav from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Portofolio from "./components/Portofolio/portofolio";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portofolio />
      <Contact />
    </>
  );
};

export default App;
