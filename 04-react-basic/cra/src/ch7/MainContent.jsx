
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white'
    }}>
      <p> Hello world! </p>
      <button onClick={toggleTheme}> Change theme </button>
    </div>
  )
}

export default MainContent
