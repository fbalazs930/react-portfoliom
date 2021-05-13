import React from 'react';

export default function About() {
    return (
        <div className='about'>
            
            <h1>Bemutatkozás</h1>
            <div className="about-container">
                    <div className="desc">
                        <div className="text">
                        <p>Farkas Balázs vagyok. Szenvedélyem a weboldalkészítés és a programozás. A szakmával 2018-ban kezdtem el komolyabban foglalkozni még középiskolában.</p>
                        <p>Jelenleg IT munkatapsztalattal még nem rendelkezem, de remélhetőleg ez hamarosan meg fog változni. Tudásomat főként az internet segítségével autodidakta módon szereztem meg, amit napról napra igyekszek fejleszteni.</p>
                        </div>
                        
                        <div className="langs">
                            <p>A következő nyelvekkel van tapasztalatom:</p>
                            <ul>
                                <li>React</li>
                                <li>JS</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>C#</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}
