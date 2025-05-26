import React from 'react';

const Services = () => {
    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="service-grid">
                <div className="service">
                    <i className="icon">🌐</i>
                    <h3>Web Design</h3>
                    <p>We create stunning, responsive websites.</p>
                </div>
                <div className="service">
                    <i className="icon">🔧</i>
                    <h3>Development</h3>
                    <p>Building powerful web applications.</p>
                </div>
                <div className="service">
                    <i className="icon">📱</i>
                    <h3>Mobile App</h3>
                    <p>Creating user-friendly mobile applications.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
