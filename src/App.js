import './App.css';
import Nav from './components/Home/Nav';
import Home from './components/Home/Home';
import Icons from './components/Home/Icons';
import Projects from './components/Projects/Projects';
import CV from './components/CV/CV';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
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
      <Nav/>
      <Home/>
      <Icons/>
      <Projects/>
      <CV/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
