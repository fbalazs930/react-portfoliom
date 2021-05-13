import React from 'react';

export default function About() {
    return (
        <div className='about'>
            
            <h1>Bemutatkozás</h1>
            <div className="about-container">
                    <div className="desc">
                        <div className="text">
                            <p>Farkas Balázs vagyok. Szenvedélyem a weboldalkészítés és a programozás. A szakmával 2018-ban kezdtem el komolyabban foglalkozni még középiskolában.
                                
                            </p>
                            <p>Jelenleg IT munkatapsztalattal még nem rendelkezem, de remélhetőleg ez hamarosan meg fog változni. Tudásomat főként az internet segítségével autodidakta módon szereztem meg, amit napról napra igyekszek fejleszteni.

                            </p>
                        </div>
                        
                        <div className="langs">
                            <h2>
                                A következő nyelvekkel van tapasztalatom:
                            </h2>
                            <ul>
                                <div className="lang">
                                    <h3>React</h3>
                                    <i className="fab fa-react"></i>
                                </div>
                                <div className="lang">
                                    <h3>JavaScript</h3>
                                    <i className="fab fa-js"></i>
                                </div>
                                <div className="lang">
                                    <h3>HTML</h3>
                                    <i className="fab fa-html5"></i>
                                </div>
                                <div className="lang">
                                    <h3>CSS</h3>
                                    <i className="fab fa-css3-alt"></i>
                                </div>
                                
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}
