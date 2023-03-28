import React from "react";
import ProjectList from "./ProjectList";
import './Project.css'

const Project = () => {
  const data = [
    {
      name: "MERN Stack Job Portal",
      des: "MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js frontend framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any frontend JavaScript framework can work.",
      projectlink:'https://react-company-profile.netlify.app/',
      techused:[
        {
          techname: 'NodeJs'
        },
        {
          techname: 'ExpresJs'
        },
        {
          techname: 'TypeScript'
        },
        {
          techname: 'AngularJs'
        }
      ]
    },
    {
      name: "FullStack dev",
      des: " Angular.js frontend framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node),MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional  and really any frontend JavaScript framework can work.",
      projectlink:'https://react-company-profile.netlify.app/',
      techused:[
        {
          techname: 'Reactjs'
        },
        {
          techname: 'NodeJs'
        },
        {
          techname: 'Css'
        },
        {
          techname: 'Javascript'
        }
      ]
    },
    {
      name: "Thiết kế đồ họa",
      des: "where the traditional Angular.js frontend framework is replaced with React.js. Other variants include MEVN MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), (MongoDB, Express, Vue, Node), and really any frontend JavaScript framework can work.",
      projectlink:'https://react-company-profile.netlify.app/',
      techused:[
        {
          techname: 'photoShop'
        },
        {
          techname: 'VideoEdit'
        },
        {
          techname: 'AdobetX'
        },
        {
          techname: 'Phonetolo'
        }
      ]
    },
    {
      name: "Backend Dev",
      des: "framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any frontend JavaScript framework can work.MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js frontend ",
      projectlink:'https://react-company-profile.netlify.app/',
      techused:[
        {
          techname: 'NodeJs'
        },
        {
          techname: 'PHP'
        },
        {
          techname: 'Lavarel'
        },
        {
          techname: 'Express'
        }
      ]
    },
  ];

  return (
    <div className="container" id="Project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index)=>(
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" key={index}>
            <ProjectList {...item}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
