import React from 'react';


export default function Projects() {
   
    return (
        <div className='projects'>
            <h1>Munkáim</h1>
            <div className='projects-container'>
            <div className='project'>
                    <div className="top">
                        <div className='p-img'>
                            <img src='https://i.postimg.cc/4yCfztxn/guitar-shop.png' alt=""/>
                        </div>
                        
                        <div className='textarea'>
                            <h2 className='title'>Gitár Shop</h2>
                            <p className='text'>
                                Egy létező gitárgyártó cég weboldalának másolata.   
                            </p>
                            <div className="built-in">
                                <p>Készült: </p>
                                <i className="fab fa-react" title="React"></i>
                            </div>
                            <div className='textarea-icons'>
                                <a target='_blank' href="https://github.com/fbalazs930/guitar-shop"><i className="fab fa-github"></i></a>  
                                <a target='_blank' href="https://jackson-clone.netlify.app/"><i className="fas fa-external-link-alt"></i></a>
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
                            <img src='https://i.postimg.cc/pXqCrBTW/messenger.png' alt=""/>
                        </div>                        
                        <div className='textarea'>
                            <h2 className='title'>Messenger App</h2>
                            <p className='text'>
                                Facebook Messegnerhez hasonló üzenetküldő App. Firebase adatbázissal készült, amely lehetővé teszi az üzenetek megőrzését.                    
                            </p>
                            <div className="built-in">
                                <p>Készült: </p>
                                <i className="fab fa-react" title="React"></i>
                            </div>
                            <div className='textarea-icons'>
                                <a target='_blank' href="https://github.com/fbalazs930/messenger-app"><i className="fab fa-github"></i></a>  
                                <a target='_blank' href="https://messenger-react.netlify.app/"><i className="fas fa-external-link-alt"></i></a>
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
                            <img src='https://i.postimg.cc/dVyHLyTL/weatherapp.png' alt=""/>
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
                                <a target='_blank' href="https://github.com/fbalazs930/weatherappapi"><i className="fab fa-github"></i></a>  
                                <a target='_blank' href="https://idojaras-api.netlify.app/"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>                               
            </div>
        </div>
    )
}
