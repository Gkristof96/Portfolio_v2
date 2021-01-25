import React from 'react'
import emailjs from 'emailjs-com'

const ContactCard = ({handleOpen}) => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_h95q1ua', e.target, 'user_XKwWTJXKqLvBZMOufAXCz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          handleOpen();
    }
    return (
        <>
            <div className='contact-card'>
                <h1>Kérdésed van?</h1>
                <h2>Töltsd ki az űrlapot és válaszolok!</h2>
                <form onSubmit={sendEmail}>
                    <div className='input-group'>
                        <label>Név</label>
                        <input type="text" name='name' placeholder='Sebastion Montgomeri' required/>
                    </div>
                    <div className='input-group'>
                        <label>Email</label>
                        <input type="email" name='email' placeholder='sebastion@mail.com' required/>
                    </div>
                    <div className='input-group'>
                        <label>Üzenet</label>
                        <textarea name='message' data-gramm_editor="false" required/>
                    </div>
                    <button type='submit'>Küldés</button>
                </form>
            </div>
        </>
    )
}

export default ContactCard
