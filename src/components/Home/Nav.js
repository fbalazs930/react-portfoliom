import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-scroll";

export default function Nav() {
    //#region Menu
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => {setClick(false)};

    window.addEventListener('resize',()=>{
        setClick(false);
    });
    //#endregion
    
    //#region NavBg
    const [scrollY, setScrollY] = useState(0);
    function getY() {
        setScrollY(window.pageYOffset / 650);
    }
    
    useEffect(() => {
        window.addEventListener("scroll", getY);
        return () => {
          window.removeEventListener("scroll", getY);
        };
    });  
        
        
    //#endregion
    

    
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

    return (
        <div className='nav' style={{background:`rgba(34, 40, 49, ${scrollY})`}}>
            <i onClick={scrollToTop} className="logo fab fa-wolf-pack-battalion"></i>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link onClick={closeMenu} className="nav-link" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                    Munkáim
                </Link>                
                <Link onClick={closeMenu} className="nav-link" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                    Önéletrajz
                </Link>
                <Link onClick={closeMenu} className="nav-link" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                    Rólam
                </Link>
                <Link onClick={closeMenu} className="nav-link" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                    Kapcsolat
                </Link>            
            </ul>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
        </div>
    )
}
