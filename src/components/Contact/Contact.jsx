import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [red, setRed] = useState({});// = { border: '2px solid red' };
    function sendEmail(e) {
        e.preventDefault();
        if (name && email && message && subject) {
            emailjs.sendForm('service_33gx7rg', 'template_109x6fc', e.target, 'user_J1ob3Ryk5QebuFnmmgVdQ')
                .then((result) => {
                    alert("Elküldve!");
                }, (error) => {
                    alert("Sikertelen!");
                });
            setRed();
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            e.target.reset()
        }
        else {
            alert("Hiányzó adatok!");
            setRed({ border: '2px solid red' });
        }
    }
    return (
        <div className='contact'>
            <h1>Üzenetküldés</h1>
            <form onSubmit={sendEmail}>
                <input style={!name ? red : {}} className='name' type="text" placeholder="Név" name="name"
                    value={name} onChange={(e) => { setName(e.target.value) }} />

                <input style={!email ? red : {}} className='email' type="email" placeholder="E-mail cím" name="email"
                    value={email} onChange={(e) => { setEmail(e.target.value) }} />

                <input style={!subject ? red : {}} type="text" placeholder="Tárgy" name="subject"
                    value={subject} onChange={(e) => { setSubject(e.target.value) }} />

                <textarea style={!message ? red : {}} className='message' placeholder="Írj valamit..." name="message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>

                <button className='send' type="submit">Küldés</button>
            </form>
            <div className='icons c-icons'>
                <a target='_blank' href="https://www.linkedin.com/in/f-balazs/" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a target='_blank' href="https://github.com/fbalazs930" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a target='_blank' href="mailto:fbalazs930@gmail.com" rel="noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
                <a target='_blank' href="tel:06203370852" rel="noreferrer">
                    <i className="fas fa-phone-alt"></i>
                </a>
            </div>
        </div>
    )
}

export default Contact;
