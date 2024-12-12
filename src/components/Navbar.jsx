import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ theme, toggleTheme, menu, setMenu }) => {
  const menuList = ["about", "resume", "projects"];
  return (
    <>
      <div className="navbar bg-base-100 sm:px-2 md:px-8 lg:px-[9.375rem] fixed top-0 left-0 right-0 z-10">
        <div className="navbar-start">
          <button
            className="btn btn-ghost mx-2 text-sm sm:text-base"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
          </button>
        </div>

        <div className="navbar-center text-xs sm:text-sm md:text-base">
          {menuList.map((val) => (
            <button
              key={val}
              className={`btn btn-sm mx-1 ${
                menu === val ? "btn-neutral" : "btn-ghost"
              }`}
              onClick={() => setMenu(val)}
            >
              {val}
            </button>
          ))}
        </div>

        <div className="navbar-end">
          <a
            href="https://www.linkedin.com/in/muhammad-hafidz-erdityo-024a1a206/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 text-sm sm:mx-2"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a
            href="https://github.com/hafidzerdityo"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 text-sm sm:mx-2"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
