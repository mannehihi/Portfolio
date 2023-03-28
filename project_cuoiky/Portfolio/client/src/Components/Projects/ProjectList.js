import React, { useState } from 'react'
import { FcCollapse, FcExpand } from 'react-icons/fc'
import './Project.css'
import Zoom from 'react-reveal/Zoom';

const ProjectList = ({name,des,projectlink,techused}) => {

    const colors = [
        "#696969",
        "#FF34B3",
        "#2F4F4F",
        "#8B4513",
        "#CD853F",
        "#CDB38B",
        "#CD96CD",
        "#8B8386",
        "#8470FF",
        "#7CCD7C",
        "#ADFF2F",
        "#556B2F",
        "#CD5555",
        "#CD3333",
        "#FF7F00",
        "#FF6EB4",
        "#8B7B8B",
      ];

    const [show, setShow] = useState(false)

    const handleShow = ()=>{
        setShow(!show)
    }

  return (
    <Zoom bottom>
    <div className='project-list' onClick={handleShow} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <div className='title-and-collapse-option'>
            <h5>{name}</h5>
            <p>
                {show?<FcExpand size={20}/>:<FcCollapse size={20}/>}
            </p>
        </div>
        
        {show?(<p>{des}</p>):(<p>{des.substring(0,150)}...</p>)}
        <div className='row'>
            {techused && techused.map((tech,index)=>(
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
                    <div className='tech-used-in-project' >
                        <p style={{background:colors[index]}}>{tech.techname}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='live-demo-button'>
                <a target="_" href={projectlink}>Live demo</a>
        </div>
        {show?'Next Text':null}
    </div>
    </Zoom>
  )
}

export default ProjectList