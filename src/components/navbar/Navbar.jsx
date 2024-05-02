import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/Logo.svg";
import "./Navbar.scss";

//BEM -> Block Element Modifier Css Convention

const Links = () => {
  return (
    <>
      <a href="#home">Home</a>
      <a href="#wgpt">What is GPT?</a>
      <a href="#possibility">Open AI</a>
      <a href="#features">Case Studies</a>
      <a href="#blog">Library</a>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_title">
          <Links />
        </div>
        <div className="gpt3__navbar-links_auth">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Links />
            <div className="gpt3__navbar-menu_container-links-auth">
              <button>Sign In</button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
