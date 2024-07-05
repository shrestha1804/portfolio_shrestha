import styles from './ContactStyles.module.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8ecgz06', 'template_pqgsj3d', form.current, {
        publicKey: 'WIOlB1i708BaNi-fn',
      })
      .then(
        () => {
          alert('Email Sent!!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Your Name Here"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="user_email"
            id="email"
            placeholder="Your Email Here"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Type Your Message Here..."
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
