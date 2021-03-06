import React from 'react';
import { Link } from "react-scroll";


const Home = () => {
    return (
        <div className='home'>
            <div className='home-content'>
                <h1>Farkas Balázs</h1>
                <h3>Junior Webfejlesztő</h3>
                <Link className="home-btn" to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                    <button>Munkáimhoz</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
