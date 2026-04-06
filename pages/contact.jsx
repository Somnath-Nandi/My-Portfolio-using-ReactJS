import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import contactbg from '../assets/images/contactbg.png'
import Navbar from './nav.jsx'

const contact = () => {
    const [state, handleSubmit] = useForm("xgvzrbqr");
    if (state.succeeded) {
        alert("Thanks for Contacting!");
    }
    return (
        <>
                <div className="contact-page">
                    <Navbar />
                    <h1><span>Contact Me</span></h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                        />
                        <ValidationError
                            prefix="Name"
                            field="text"
                            errors={state.errors}
                        />
                        <label htmlFor="phone-number">
                            Phone Number
                        </label>
                        <input
                            id="phone-number"
                            type="phone"
                            name="phone-number"
                        />
                        <ValidationError
                            prefix="Phone-Number"
                            field="number"
                            errors={state.errors}
                        />
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor="message">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                    <footer className="contact-footer">
                        <p>&copy; 2025 Somnath Nandi. All Rights Reserved.</p>
                    </footer>
                </div>
        </>
    );
}


export default contact