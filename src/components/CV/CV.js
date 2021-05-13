import React from 'react'
import cvPdf from './FarkasBalázsCV.pdf';

export default function CV() {
    return (
        <div className='cv'>
            <h1>Önéletrajz</h1>
            <div className="cv-container">
                <h3>Az önéletrajzom a gombra kattintva tekinthető meg.</h3>
                <button onClick={()=>{window.open(cvPdf)}}>Megnyit</button>
            </div>
        </div>
    )
}
