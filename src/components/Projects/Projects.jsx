import React from 'react';


const Projects = () => {

    return (
        <div className='projects'>
            <h1>Munkáim</h1>
            <div className='projects-container'>
                <div className='project'>
                    <div className="top">
                        <div className='p-img'>
                            <img src='https://i.postimg.cc/4yCfztxn/guitar-shop.png' alt="" />
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
                                <a target='_blank' href="https://github.com/fbalazs930/guitar-shop" rel='noreferrer'>
                                    <i className="fab fa-github">
                                    </i>
                                </a>
                                <a target='_blank' href="https://guitar-shop.pages.dev/" rel='noreferrer'>
                                    <i className="fas fa-external-link-alt">
                                    </i>
                                </a>
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
                            <img src='https://i.postimg.cc/pXqCrBTW/messenger.png' alt="" />
                        </div>
                        <div className='textarea'>
                            <h2 className='title'>Messenger App</h2>
                            <p className='text'>
                                Facebook Messengerhez hasonló üzenetküldő App. Firebase adatbázissal készült, amely lehetővé teszi az üzenetek megőrzését.
                            </p>
                            <div className="built-in">
                                <p>Készült: </p>
                                <i className="fab fa-react" title="React"></i>
                            </div>
                            <div className='textarea-icons'>
                                <a target='_blank' href="https://github.com/fbalazs930/messenger-app" rel='noreferrer'>
                                    <i className="fab fa-github">
                                    </i>
                                </a>
                                <a target='_blank' href="https://messenger-app.pages.dev/" rel='noreferrer'>
                                    <i className="fas fa-external-link-alt">
                                    </i>
                                </a>
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
                            <img src='https://i.postimg.cc/kgg9NbQX/weather.png' alt="" />
                        </div>
                        <div className='textarea'>
                            <h2 className='title'>Időjárás</h2>
                            <p className='text'>
                                A weboldal megmutajta bármelyik város jelenlegi időjárásának információit egy ingyenes API (OpenWeatherMap) használatával.
                            </p>
                            <div className="built-in">
                                <p>Készült: </p>
                                <i className="fab fa-html5" title="HTML"></i>
                                <i className="fab fa-css3-alt" title="CSS"></i>
                                <i className="fab fa-js" title="JavaScript"></i>
                            </div>
                            <div className='textarea-icons'>
                                <a target='_blank' href="https://github.com/fbalazs930/idojaras-api-react" rel='noreferrer'>
                                    <i className="fab fa-github">
                                    </i>
                                </a>
                                <a target='_blank' href="https://idojaras-api-react.pages.dev/" rel='noreferrer'>
                                    <i className="fas fa-external-link-alt">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
