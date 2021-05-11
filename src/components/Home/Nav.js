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

    
    /*//#region Navbar Opacity
    const[op,setOp]=useState(0);  

    

    //#region Detect Scrolling Direction
    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget; 
            if (y < window.scrollY && op+1 <= 1){
                setOp(op+1);
                console.log(op);
            }
            if (y > window.scrollY && op-1 >= 0){
                setOp(op-1);
                console.log(op);
            }        
            
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
        
    }, [handleNavigation]);
    //#endregion 
*/
    

    //#endregion

    return (
        <div className='nav'>
            <i className="logo fab fa-wolf-pack-battalion"></i>
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
