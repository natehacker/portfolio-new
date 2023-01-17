import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
// import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_so0dizh', 'template_1nzxk3s', form.current, 'DX1BDezZMMIxIwkFh')

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Cotact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Louissaintmark@gmail.com</h5>
            <a href="mailto:louissaintmark@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Linked In</h4>
            <h5>Nathan Louissaint</h5>
            <a href="https://www.linkedin.com/in/nathan-louissaint/" target="_blank" rel="noreferrer">Send a Massage on Linked In</a>
          </article>
        </div>
        {/* =========== eND OF CONTACT OPTIONS =========== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact