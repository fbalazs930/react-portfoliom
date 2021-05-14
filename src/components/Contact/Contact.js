import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_33gx7rg', 'template_109x6fc', e.target, 'user_J1ob3Ryk5QebuFnmmgVdQ')
        .then((result) => {
            alert("Elküldve!");
        }, (error) => {
            alert("Sikertelen!");
        });
        e.target.reset()        
    }

    

    return (
        <div className='contact'>
            <h1>Üzenetküldés</h1>
            <form onSubmit={sendEmail}>
                <input className='name' type="text" placeholder="Név" name="name"/>
                <input className='email' type="email" placeholder="E-mail cím" name="email"/>
                <input type="text" placeholder="Subject" name="subject"/>
                <textarea className='message' placeholder="Írj valamit..." name="message"></textarea>
                <button className='send' type="submit">Küldés</button>
            </form>
        </div>
    )
}
