import "./Header.css";
import { header_links } from "../constants/constants";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const navMenu = useRef(null);
  const header = useRef(null);

  const showMenu = () => {
    navMenu.current.classList.add("show-menu");
  };
  const removeMenu = () => {
    navMenu.current.classList.remove("show-menu");
  };
  // Add event listener to track scroll position
  const handleScroll = () => {
    window.scrollY >= 50
      ? header.current.classList.add("blur-header")
      : header.current.classList.remove("blur-header");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={header} className="header" id="header">
      <nav className="nav container">
        <a className="nav__logo" href="#">
          Travel
        </a>

        <div ref={navMenu} className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {header_links.map((link) => (
              <li key={link} className="nav__item">
                <a className="nav__link" href={`#${link}`} onClick={removeMenu}>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__close" id="nav-close" onClick={removeMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
          <i className="ri-menu-fill"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
