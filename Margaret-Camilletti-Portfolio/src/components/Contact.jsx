import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const [isMessageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('mcamilletti1', 'template_7ztkd4e', form.current, '34L68QSZcxrCsE6Vl')
        .then((result) => {
            console.log(result.text);
            setMessageSent(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="contact">
            <h3 id="contact-header">Contact Me</h3>
            <section id="flex-contact">
                <section id="left-contact">
                    <section id="phoneEmail">
                        <strong>Call Me</strong>
                        <p>304-914-2902</p>
                        <strong>Email</strong>
                        <p>mhcamilletti@gmail.com</p>
                    </section>
                    <section id="contactButtons">
                        <a href="https://linkedin.com/in/margaretcamilletti/" id="contactLinkedIn" rel="noreferrer" target="_blank"><button>LinkedIn</button></a>
                        <a href="https://github.com/mcamilletti1" rel="noreferrer" target="_blank"><button>GitHub</button></a>
                    </section>
                </section>
                <section id="contact-form">
                    <h4 id="form-header">Send me a message!</h4>
                    {isMessageSent ? (
                        <p>Message sent!</p>
                    ) : (
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="user_name">Your name</label>
                        <input type="text" name="user_name" placeholder="Your name"></input>
                        <br />
                        <label htmlFor="user_email">Your email</label>
                        <input type="email" name="user_email" placeholder="Your email"></input>
                        <br />
                        <label htmlFor="message">Your message</label>
                        <textarea name="message" rows="5" cols="30" placeholder="Write your message here"></textarea>
                        <br />
                        <button type="submit" value="Send">Submit</button>
                    </form>
                    )}
                </section>
            </section>

        </section>
    )
}

export default Contact