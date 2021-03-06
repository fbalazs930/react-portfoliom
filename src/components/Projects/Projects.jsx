/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import projectData from './ProjectsData.jsx';
import ScrollContainer from 'react-indiana-drag-scroll';




const Projects = () => {


    const [click, setClick] = useState(false);
    const [id, setId] = useState(0);
    const [images, setImages] = useState([]);
    const close = (e) => {
        if (e.keyCode === 27) {
            setClick(false)
        }
    }
    useEffect(() => {
        window.addEventListener('keyup', close)
        return () => { window.removeEventListener('keyup', close) }
    }, [])
    const clicked = (e) => {
        if (e.target.className.includes("exit")) {
            setClick(false);
        }
    }
    useEffect(() => {
        window.addEventListener('click', clicked)
        return () => { window.removeEventListener('click', clicked) }
    }, [])
    return (
        <div className='projects'>
            <h1>Munkáim</h1>
            <div className='projects-container'>
                {projectData.map(project => (
                    <div className='project' key={project.id}>
                        <div className="top">
                            <div className='p-thumbnail'>
                                <img onClick={() => { setClick(true); setImages(project.images) }} src={project.pThumbnail} alt="" />
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
                        {(project.id !== projectData.length-1) &&
                            <div className="bottom">
                                <div className="line-hor"></div>
                            </div>
                        }
                    </div>
                ))}

                {click &&
                    <div className="full-screen-image exit">
                        <div className="exit">
                            <i onClick={() => { setClick(false) }} className="fas fa-times-circle">
                            </i>
                        </div>
                        <div className="f-img">
                            <img src={images[id].src} alt='Project' />
                        </div>
                        <ScrollContainer className="scroll-container" hideScrollbars='false'>
                            {images.map(img => (
                                <img onClick={() => { setId(img.id) }} key={img.id} src={img.src} alt='Project' />
                            ))}
                        </ScrollContainer>
                    </div>
                }
            </div>
        </div>
    )
}

export default Projects;
