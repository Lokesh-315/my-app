import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="text" name="subject" placeholder="Subject" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="map">
                <h2>Our Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </section>
    );
};

export default Contact;
