import React from 'react';


const bannerStyle = {
  backgroundImage: "url('/3472.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
// const overlayStyle = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
//   zIndex: 1,
// };

const contentStyle = {
  position: 'relative',
  zIndex: 2,
};

const Home = () => {
    return (
        <section id="home" className="banner"  style={bannerStyle}>
            <div className="banner-content" style={contentStyle}>
            <h1>Welcome to Our Website</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           </div>
        </section>
    );
};

export default Home;
