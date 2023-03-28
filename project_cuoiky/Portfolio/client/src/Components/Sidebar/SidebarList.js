import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/mandz.jpg";
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

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="Mẫn đẹp zai quá trời" />
          </div>

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
          </ul>
        </div>
      ) : (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="Mẫn đẹp zai quá trời" />
          </div>

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
                
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
