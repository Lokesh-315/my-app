import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Left: Logo */}
      <div style={styles.logo}>MyLogo</div>

      {/* Center: Menu */}
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}><a href="#home" style={styles.link}>Home</a></li>
          <li style={styles.li}><a href="#about" style={styles.link}>About</a></li>
          <li style={styles.li}><a href="#services" style={styles.link}>Services</a></li>
          <li style={styles.li}><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>
      </nav>

      {/* Right: Search + Button */}
      <div style={styles.right}>
        <input type="text" placeholder="Search..." style={styles.search} />
        <button style={styles.button}>Go</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 30px',
    
  },
  logo: {
    flex: '0 0 auto',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  nav: {
    flex: '1 1 auto',
    textAlign: 'center',
  },
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'inline-flex',
    gap: '20px',
  },
  li: {
    // no special styles needed here
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
  },
  right: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  search: {
    padding: '5px 10px',
    fontSize: '16px',
  },
  button: {
    padding: '6px 12px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Header;
