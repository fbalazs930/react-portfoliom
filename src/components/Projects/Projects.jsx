/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import projectData from './ProjectsData.jsx';

const Projects = () => {
    const [click, setClick] = useState(false);
    const [id, setId] = useState(0);
    const decrease = () => {
        if (id - 1 >= 0) {
            setId(id - 1)
        }
    }
    const increase = () => {
        if (id + 1 <= projectData[id].images.length - 1) {
            setId(id + 1);
        }
    }
    const updateId = (e) => {
        if (e.keyCode === 27) { setClick(false); }
        if (e.keyCode === 37) { decrease() }
        if (e.keyCode === 39) { increase() }
    }
    useEffect(() => {
        window.addEventListener('keyup', updateId);
        return () => { window.removeEventListener('keyup', updateId) }
    }, [id])
    return (
        <div className='projects'>
            <h1>Munkáim</h1>
            <div className='projects-container'>
                {projectData.map(project => (
                    <div className='project' key={project.id}>
                        <div className="top">
                            <div className='p-thumbnail'>
                                <img onClick={() => { setClick(true) }} src={project.pThumbnail} alt="" />
                            </div>
                            <div className='textarea'>
                                <h2 className='title'>{project.title}</h2>
                                <p className='text'>
                                    {project.text}
                                </p>
                                <div className="built-in">
                                    <p>Készült: </p>
                                    {project.builtInIcons.map(bi => (
                                        <i key={bi.id} className={bi.className} title="React"></i>
                                    ))}
                                </div>
                                <div className='textarea-icons'>
                                    <a target='_blank' href={project.gitHubLink} rel='noreferrer'>
                                        <i className="fab fa-github">
                                        </i>
                                    </a>
                                    <a target='_blank' href={project.website} rel='noreferrer'>
                                        <i className="fas fa-external-link-alt">
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="line-hor"></div>
                        </div>
                        {click &&
                            <div className="full-screen-image">
                                <div className="exit">
                                    <i onClick={() => { setClick(false) }} className="fas fa-times-circle">
                                    </i>
                                </div>
                                <div className="f-img">
                                    <img src={project.images[id].src} alt='Project' />
                                <div className="s-images">
                                    {project.images.map(img=>(
                                        <img onClick={()=>{setId(img.id)}} key={img.id} src={img.src} alt='project'/>
                                    ))}
                                </div>
                                </div>
                                <div className="arrows">
                                    <i className="fas fa-arrow-alt-circle-left"
                                        onClick={decrease}>
                                    </i>
                                    <i className="fas fa-arrow-alt-circle-right"
                                        onClick={increase}>
                                    </i>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
