import React from 'react';
import portfSrc from './Images/portf.jpg'
import weatherappSrc from './Images/weatherapp.png'


export default function Projects() {
   
    return (
        <div className='projects'>
            <h1>Munkáim</h1>
            <div className='projects-container'>
                <div className='project'>
                    <div className="top">
                        <div className='p-img'>
                            <img src={weatherappSrc} alt=""/>
                        </div>
                        
                        <div className='textarea'>
                            <h2 className='title'>Időjárás</h2>
                            <p className='text'>
                                A weboldal megmutajta bármelyik város jelenlegi hőmérsékletét egy ingyenes API (OpenWeatherMap) használatával. 
                            </p>
                            <div className="built-in">
                                <p>Készült: </p>
                                <i className="fab fa-html5" title="HTML"></i>
                                <i className="fab fa-css3-alt" title="CSS"></i>
                                <i className="fab fa-js" title="JavaScript"></i>
                            </div>
                            <div className='textarea-icons'>
                                <a target='_blank' href="https://codepen.io/fbalazs930/full/eYvmrjw"><i className="fab fa-codepen"></i></a>
                                <a target='_blank' href="https://github.com/fbalazs930/weatherappapi"><i className="fab fa-github"></i></a>  
                                <a target='_blank' href="https://idojaras-api.netlify.app/"><i className="fas fa-external-link-alt"></i></a>
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
                                <i className="fab fa-react" title="React"></i>
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
                                <i className="fab fa-react" title="React"></i>
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
