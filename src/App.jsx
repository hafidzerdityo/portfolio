import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [menu, setMenu] = useState("about");
  const [showNav, setShowNav] = useState(true);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div data-theme={theme}>
        {showNav && (
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            menu={menu}
            setMenu={setMenu}
          />
        )}

        {menu == "about" && <About />}
        {menu == "resume" && <Resume />}
        {menu == "projects" && (
          <Projects setShowNav={setShowNav} theme={theme} />
        )}
      </div>
    </>
  );
};

export default App;
