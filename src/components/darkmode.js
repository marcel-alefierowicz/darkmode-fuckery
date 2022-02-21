import { BsMoonStarsFill, BsSun, BsSunFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "../index.css";

const DarkMode = () => {
  let clicked = "clicked",
    light = "light",
    dark = "dark";

  const [Content, setContent] = useState(<BsMoonStarsFill />);

  let theme = localStorage ? localStorage.getItem("theme") : light;

  document.documentElement.classList.add(theme);

  const switchTheme = (e) => {
    document.documentElement.classList.remove(light, dark);
    theme = theme === light ? dark : light;
    e.target.classList.remove(clicked);

    localStorage.setItem("theme", theme);

    switch (theme) {
      case light:
        return setContent(<BsSunFill />);
      case dark:
        return setContent(<BsMoonStarsFill />);
    }
  };

  return (
    
      <button
        className={theme === "dark" ? clicked : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      >
        {Content}
      </button>
    
  );
};
export default DarkMode;
