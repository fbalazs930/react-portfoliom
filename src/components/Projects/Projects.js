import React from 'react';
import portfSrc from './Images/portf.jpg'

export default function Projects() {
   
    return (
        <div className='projects'>
            <h1>Munkáim</h1>
            <div className='projects-container'>
                <div className='project'>
                    <div className='p-img'>
                        <img src={portfSrc} alt=""/>
                    </div>
                    <div className='textarea'>
                        <h2 className='title'>Portfólióm</h2>
                        <p className='text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dicta.
                        </p>
                        <div className='textarea-icons'>
                            <i className="fab fa-codepen"></i>
                            <i className="fab fa-github"></i>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='p-img'>
                        <img src={portfSrc} alt=""/>
                    </div>
                    <div className='textarea'>
                        <h2 className='title'>Portfólióm</h2>
                        <p className='text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ducimus?                            
                        </p>
                        <div className='textarea-icons'>
                            <i className="fab fa-codepen"></i>
                            <i className="fab fa-github"></i>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='p-img'>
                        <img src={portfSrc} alt=""/>
                    </div>
                    <div className='textarea'>
                        <h2 className='title'>Portfólióm</h2>
                        <p className='text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, excepturi.
                        </p>
                        <div className='textarea-icons'>
                            <i className="fab fa-codepen"></i>
                            <i className="fab fa-github"></i>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
