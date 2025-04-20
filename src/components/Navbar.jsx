import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ theme, toggleTheme, menu, setMenu }) => {
  const menuList = ["about", "resume", "projects"];

  return (
    <div className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm">
      <div className="navbar bg-base-100/80 sm:px-2 md:px-8 lg:px-[9.375rem]">
        {/* Left Section */}
        <div className="navbar-start">
          <button
            className="btn btn-circle btn-ghost hover:bg-base-200"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <FontAwesomeIcon
              icon={theme === "light" ? faSun : faMoon}
              className="text-xl text-primary"
            />
          </button>
        </div>

        {/* Center Section */}
        <div className="navbar-center">
          <div className="flex gap-1 p-1 bg-base-200 rounded-xl">
            {menuList.map((val) => (
              <button
                key={val}
                className={`
                  btn btn-sm min-h-8 h-8 px-4 rounded-lg capitalize transition-all duration-300
                  ${
                    menu === val
                      ? "btn-primary text-primary-content shadow-lg"
                      : "btn-ghost hover:bg-base-300"
                  }
                `}
                onClick={() => setMenu(val)}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-end">
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/muhammad-hafidz-erdityo-024a1a206/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-ghost hover:bg-base-200"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-xl text-primary hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://github.com/hafidzerdityo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-ghost hover:bg-base-200"
              aria-label="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="text-xl text-primary hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
