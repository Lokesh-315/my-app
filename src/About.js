import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="image">
               <img src="/about.jpg" alt="Our team working together" />

            </div>
            <div className="content">
                <h2>About ss</h2>
                <p>We are a company that values innovation and customer satisfaction. Our mission is to provide the best services in the industry.</p>
                <a href="#contact" className="btn">Contact Us</a>
            </div>
        </section>
    );
};

export default About;
