import React, {useState, useEffect} from "react";
import reactDom from "react-dom";
import "../index.css";
import { BsMoonStarsFill, BsSun, BsSunFill } from 'react-icons/bs';


const DarkMode = () => {
  let clickedClass = "clicked";
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;


  const [Content, setContent] = useState(<BsMoonStarsFill/>)

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    document.documentElement.classList.add(theme);
  } else {
    document.documentElement.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      document.documentElement.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setContent(<BsMoonStarsFill/>);

    } else {
      document.documentElement.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      setContent(<BsSunFill/>)
    }
  };

  return (
    <div>
      <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      > 

       {Content} 
      </button>
    </div>
  );
}; 
export default DarkMode;
