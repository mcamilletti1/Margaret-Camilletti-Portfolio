import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('mcamilletti1', 'template_b4w2n0f', form.current, '34L68QSZcxrCsE6Vl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="contact">
            <h3 id="contact-header">Contact Me</h3>
            <section id="flex-contact">
                <section id="left-contact">
                    <strong>Call Me</strong>
                    <p>304-914-2902</p>
                    <br></br>
                    <strong>Email</strong>
                    <p>mhcamilletti@gmail.com</p>
                    <br></br>
                    <a href="https://linkedin.com/in/margaretcamilletti" target="_blank"><button>LinkedIn</button></a>
                    <br></br>
                    <a href="https://github.com/mcamilletti1" target="_blank"><button>GitHub</button></a>
                </section>
                <section id="contact-form">
                    <h4 id="form-header">Send me a message!</h4>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Your name"></input>
                        <br></br>
                        <input type="email" name="user_email" placeholder="Your email"></input>
                        <br></br>
                        <textarea name="message" rows="5" cols="30" placeholder="Write your message here"></textarea>
                        <br></br>
                        <button type="submit" value="Send">Submit</button>
                    </form>
                </section>
            </section>

        </section>
    )
}

export default Contact