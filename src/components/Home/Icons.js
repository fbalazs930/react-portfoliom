import React, { useState } from 'react';

export default function Icons() {
    const[color,setColor] = useState(true);

    window.addEventListener('scroll', () => {
        if(window.scrollY>=50){
            setColor(false);
        }
        else{
            setColor(true);
        }
    });

    return (
        <div className='icons'>
            <a target='_blank' href="https://github.com/fbalazs930" rel="noreferrer">
                <i id={color ? 'iconLight' : 'iconDark'} className="fab fa-github"></i>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/farkas-bal%C3%A1zs-3321a5204/" rel="noreferrer">
                <i id={color ? 'iconLight' : 'iconDark'} className="fab fa-linkedin-in"></i>
            </a>
            <a target='_blank' href="https://codepen.io/fbalazs930" rel="noreferrer">
                <i id={color ? 'iconLight' : 'iconDark'} className="fab fa-codepen"></i>
            </a>
        </div>
    )
}
