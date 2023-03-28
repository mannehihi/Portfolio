import React, { useState } from 'react'
import './TechStack.css'
import Rotate from 'react-reveal/Rotate';

const TechStack = () => {

    const data= [
        {name: 'Full Stack Software Developer'},
        {name: 'UX/UI Designer'},
        {name: 'JavaScript'},
        {name: 'Nodejs'},
        {name: 'NuxtJs'},
        {name: 'Kotlin'},
        {name: 'VueJs'},
        {name: 'Nextjs'},
        {name: 'Python'},
        {name: 'ReactJs'},
        {name: 'Boostrap'},
        {name: 'Css'},
        {name: 'Canvas'},
        {name: 'Raspberry'},
        {name: 'TypeScript'},
        {name: 'MongoDB'},
        {name: 'NuxtJs Developer'},
    ]

    const colors = [
        '#696969',
        '#FF34B3',
        '#2F4F4F',
        '#8B4513',
        '#CD853F',
        '#CDB38B',
        '#CD96CD',
        '#8B8386',
        '#8470FF',
        '#7CCD7C',
        '#ADFF2F',
        '#556B2F',
        '#CD5555',
        '#CD3333',
        '#FF7F00',
        '#FF6EB4',
        '#8B7B8B',
    ]

    const [showMoretechStack,setShowMoretechStack] = useState(9)

    const loadMore =() =>{
        setShowMoretechStack((prev)=>prev+3)
    }

  return (
    <div className='container techstack-section' id='Tech-Stack'>
        <div className='section-title'>
            <h5>Tech Stack</h5>
            <span className='line'></span>
        </div>
        <div className='row'>
            {data.slice(0,showMoretechStack).map((item,index)=>(
                <Rotate >
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                    <div className={index===0?'tech-content-marked tech-content':'tech-content'}>
                        <span className='tech-number' style={{backgroundColor:colors[index]}}>{index+1}</span>
                        <p>{item.name}</p>
                    </div>
                </div>
                </Rotate>
            ))}
        </div>
        {
            showMoretechStack >= data.length ? null :(<span className='load-more-tech-stack' onClick={loadMore}>load More</span>)
        }
    </div>
  )
}

export default TechStack