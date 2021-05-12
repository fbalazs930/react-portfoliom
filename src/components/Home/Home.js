import React from 'react';
import { Link } from "react-scroll";

export default function Home() {  
    return (
        <div className='home'> 
            <div className='home-content'>
                <h1>Farkas Balázs</h1>      
                <h3>Junior Webfejlesztő</h3>     
                <Link className="home-btn" to="projects" spy={true} smooth={true} offset={50} duration={500}>                    
                    <button>Munkáimhoz</button>
                </Link>  
            </div>
        </div>
    )
}
