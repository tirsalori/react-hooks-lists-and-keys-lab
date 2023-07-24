import React from "react";

function NavBar({home, about, projects}) {
  // const links = ["home", "about", "projects"];

  return <nav>{
    <><a key="home" href="#home">home</a><a key="about" href="#about">about</a><a key="projects" href="#projects">projects</a></>
    /* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
