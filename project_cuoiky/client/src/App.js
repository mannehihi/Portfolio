import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Project from './Components/Projects/Project';
import Sidebar from './Components/Sidebar/Sidebar';
import TechStack from './Components/TechStack/TechStack';
import Testimonial from './Components/Testimonial/Testimonial';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import ScrollToTop from "react-scroll-to-top";
import './App.css'
import NavbarMobileView from './Components/Sidebar/NavbarMobileView';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {

  const [theme,setTheme]= useState('light')

  const changeThem = () =>{
    setTheme((prev) => (prev==='light'?'dark':'light'))
  }

  return (
    <ThemeContext.Provider value={{theme,changeThem}}>
    <div id={theme}>
      <NavbarMobileView changeThem={changeThem} theme={theme}/>
      <Sidebar changeThem={changeThem} theme={theme}/>
      <About/>
      <WorkExperience/>
      <TechStack/>
      <Education/>
      <Project/>
      <Testimonial/>
      <Contact/>

      <ScrollToTop
        smooth={true}
        top='20'
        color='white'
        height='20'
        width='20'
        style={{borderRadius:'90px',backgroundColor:'#38004c'}}
        />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
