import React from 'react';
import portfSrc from './Images/portf.jpg'

export default function Projects() {
   
    return (
        <div className='projects'>
            <div className='projects-container'>
                <div className='project'>
                    <div className='p-img'>
                        <img src={portfSrc} alt=""/>
                    </div>
                    <div className='textarea'>
                        <h2 className='title'>Saját portfólióm</h2>
                        <p className='text'>
                            A portfóliómat a saját munkásságom bemutatása érdekében hoztam létre.
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
                        <h2 className='title'>Saját portfólióm</h2>
                        <p className='text'>
                            A portfóliómat a saját munkásságom bemutatása érdekében hoztam létre.
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
                        <h2 className='title'>Saját portfólióm</h2>
                        <p className='text'>
                            A portfóliómat a saját munkásságom bemutatása érdekében hoztam létre.
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
