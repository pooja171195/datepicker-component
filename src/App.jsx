import React, { useContext } from "react";
import './App.css';
//import image from "./Images/1.jpg"; 
import {DateRangePicker} from "rsuite"
import { theme } from "./theme";
import { ThemeContext } from "./Provider";
import ThemeSwitch from "./ThemeSwitch";

import "rsuite/dist/rsuite.min.css" 
const getStyles = (mode) => ({
  header: {
    fontSize: 34,
    fontWeight: "400"
  },
  app: {
    height: "100%",
    width: "100%",
    padding: 16,
    backgroundColor: theme[mode].backgroundColor
  },
  text: {
    fontWeight: "200",
    color: theme[mode].color
  },
  theme: {
    color: theme[mode].highlight
  }
});


function App() {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

   return (
     <>
      <div style={styles.app}>
      <h2 style={styles.text}>
        Current theme is <span style={styles.theme}>{mode}</span> mode
      </h2>
      <ThemeSwitch/>
    </div>

     <div className='name'><h1>DATE - PICKER</h1>
     <hr/>
     </div>
     <div className='pooj_d'>
    <div className="dates" >
      <DateRangePicker/>
      </div>
    </div>
    </>
  );
}

export default App;
