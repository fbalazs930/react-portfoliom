import React from 'react';
import portfSrc from './Images/portf.jpg'

export default function Projects() {
   
    return (
        <div className='projects'>
            <h1>Munkáim</h1>
            <div className='projects-container'>
                <div className='project'>
                    <div className="top">
                        <div className='p-img'>
                            <img src={portfSrc} alt=""/>
                        </div>
                        
                        <div className='textarea'>
                            <h2 className='title'>Portfólióm</h2>
                            <p className='text'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolorum nam, tenetur officiis a totam! Velit veniam veritatis ipsam repellat.
                            </p>
                            <div className="built-in">
                                <p>Készült: </p>
                                <i className="fab fa-react"></i>
                            </div>
                            <div className='textarea-icons'>
                                <i className="fab fa-codepen"></i>
                                <i className="fab fa-github"></i>
                                <i className="fas fa-external-link-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="line-hor"></div>
                    </div>
                </div>
                <div className='project'>
                    <div className="top">
                        <div className='p-img'>
                            <img src={portfSrc} alt=""/>
                        </div>
                        
                        <div className='textarea'>
                            <h2 className='title'>Portfólióm</h2>
                            <p className='text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste eveniet voluptate! Quaerat porro provident voluptates ducimus, soluta reiciendis non?                          
                            </p>
                            <div className="built-in">
                                <p>Készült: </p>
                                <i className="fab fa-react"></i>
                            </div>
                            <div className='textarea-icons'>
                                <i className="fab fa-codepen"></i>
                                <i className="fab fa-github"></i>
                                <i className="fas fa-external-link-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="line-hor"></div>
                    </div>
                </div>
                <div className='project'>
                    <div className="top">
                        <div className='p-img'>
                            <img src={portfSrc} alt=""/>
                        </div>
                        
                        <div className='textarea'>
                            <h2 className='title'>Portfólióm</h2>
                            <p className='text'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aliquid suscipit explicabo vero. Deleniti, laudantium. Suscipit expedita nihil minus officiis.                          
                            </p>
                            <div className="built-in">
                                <p>Készült: </p>
                                <i className="fab fa-react"></i>
                            </div>
                            <div className='textarea-icons'>
                                <i className="fab fa-codepen"></i>
                                <i className="fab fa-github"></i>
                                <i className="fas fa-external-link-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
