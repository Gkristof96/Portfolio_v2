import React, { useState } from 'react'
import validate from '../../../hooks/validateMessage'
import useInput from '../../../hooks/useInput'
import { FaExclamationTriangle } from 'react-icons/fa'
import axios from 'axios'

const ContactCard = () => {
    // állapot az inputok tárolására
    const [values, setValues] = useState({
        email: '',
        name: '',
        message: ''
    });
    // Adatok küldése a szervernek
    const saveData = () => {
        axios
        .post("url", {
            message: {
            name: values.name,
            email: values.email,
            message: values.message,
            },
        })
        .then((response) => {
            console.log("elküldve", response);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    // saját horog hívása
    const { handleChange, handleSubmit, errors } = useInput(
        validate,
        values,
        setValues,
        saveData
    );
    return (
        <>
            <div className='contact-card'>
                <h1>Do you have a question?</h1>
                <h2>Complete this form, and we will answer it!</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Sebastion Montgomeri' value={values.name} onChange={handleChange}/>
                    </div>
                    {errors.name && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.name}
                        </p>
                    }
                    <div className='input-group'>
                        <label>Email</label>
                        <input type="email" name='email' placeholder='sebastion@mail.com' value={values.email} onChange={handleChange}/>
                    </div>
                    {errors.email && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.email}
                        </p>
                    }
                    <div className='input-group'>
                        <label>Message</label>
                        <textarea name='message' value={values.message} onChange={handleChange}/>
                    </div>
                    {errors.message && 
                        <p className='error-message'>
                        <FaExclamationTriangle/>
                        {errors.message}
                        </p>
                    }
                    <button type='submit'>Send</button>
                </form>
            </div>
        </>
    )
}

export default ContactCard
