import './SCSS/Main.css';
import Nav from './components/Home/Nav.jsx';
import Home from './components/Home/Home.jsx';
import Icons from './components/Home/Icons.jsx';
import Projects from './components/Projects/Projects.jsx';
import CV from './components/CV/CV.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Particles from 'react-particles-js';

function App() {
    return (
        <div className='App'>
            <div className="bg2"></div>
            <Particles className='bg'
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }}
            />
            <Nav />
            <Home />
            <Icons />
            <Projects />
            <CV />
            <About />
            <Contact />
        </div>
    );
}

export default App;
