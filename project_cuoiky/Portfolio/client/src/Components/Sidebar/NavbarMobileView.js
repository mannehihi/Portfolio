import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FcHome,
  FcNightPortrait,
  FcFactory,
  FcTodoList,
  FcSalesPerformance,
  FcContacts,
} from "react-icons/fc";
import { MdCastForEducation, MdBiotech } from "react-icons/md";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({theme,changeThem}) => {

  const [open,setOpen] = useState(false)

  const handleOpen = () =>{
    setOpen(!open)
  }

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleOpen}/>
        </p>
      </div>
      
        {open?(
        <div className="mobile-nav">
        <ul>
          <li className="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcHome size={25} />
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcNightPortrait size={25} />
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="Work-Experience"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcFactory size={25} />
              Work Experience
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="Tech-Stack"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <MdBiotech size={25} />
              Tech Stack
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="Education"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <MdCastForEducation size={25} />
              Education
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="Project"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcTodoList size={25} />
              Project
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="Testimonial"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcSalesPerformance size={25} />
              Testimonial
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcContacts size={25} />
              Contact
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Switch onChange={changeThem} checked={theme==='dark'} />
           
          </li>
        </ul></div>):null}
      
    </div>
  );
};

export default NavbarMobileView;
