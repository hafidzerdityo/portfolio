import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ theme, toggleTheme, menu, setMenu }) => {
  const menuList = ["about", "resume", "projects"];

  return (
    <div className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm bg-base-100/80 shadow-sm">
      <div className="navbar sm:px-2 md:px-8 lg:px-[9.375rem]">
        {/* Left: Theme toggle */}
        <div className="navbar-start">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="btn btn-circle btn-ghost hover:bg-base-200 transition-colors"
          >
            <FontAwesomeIcon
              icon={theme === "light" ? faSun : faMoon}
              className="text-xl text-base-content"
            />
          </button>
        </div>

        {/* Center: Menu */}
        <div className="navbar-center">
          <div className="flex gap-1 p-1 bg-base-200 rounded-xl">
            {menuList.map((val) => (
              <button
                key={val}
                onClick={() => setMenu(val)}
                className={`
                  btn btn-sm h-8 px-4 rounded-lg capitalize transition-all duration-300
                  ${
                    menu === val
                      ? "bg-base-300 text-base-content shadow-md"
                      : "btn-ghost hover:bg-base-300"
                  }
                `}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Social */}
        <div className="navbar-end flex gap-2">
          <a
            href="https://www.linkedin.com/in/muhammad-hafidz-erdityo-024a1a206/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="btn btn-circle btn-ghost hover:bg-base-200 transition-colors"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl text-base-content hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://github.com/hafidzerdityo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="btn btn-circle btn-ghost hover:bg-base-200 transition-colors"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-xl text-base-content hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
