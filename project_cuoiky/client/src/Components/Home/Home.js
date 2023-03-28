import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "../../Image/Man.pdf";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const Home = ({ theme, changeThem }) => {
  return (
    <div className="containe-fluid home" id="home">
      <div className="theme-change" onClick={changeThem}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />{" "}
          </p>
        ) : (
          <p>
            <CiLight className="sun-theme-icon" size={40} />{" "}
          </p>
        )}
      </div>

      <div className="container home-content">
        <Fade right>
          <h1>Hi I'm a</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Full stack SoftWare Developer",
                  "Mern Stack Developer",
                  "Web Developer",
                  "UI/UX Desugner",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h2>
        </Fade>
        <div className="button-for-action">
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={100}
            offset={-100}
          >
            <div className="hire-me-button">Hire me</div>
          </Link>

          <div className="get-resume-button">
            <a href={MyCv} download="Man_cv">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
