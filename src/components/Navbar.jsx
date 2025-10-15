// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px',
        height: '80px',
        backgroundColor: '#1e1e1e',
        borderBottom: '1px solid #2a2a2a',
    },
    logo: { 
        height: '50px', 
    },
    navLinks: {
        display: 'flex',
        gap: '20px',
    },
    link: {
        color: 'var(--text-color)',
        textDecoration: 'none',
        fontSize: '1rem',
    }
}

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/">
        <img src={logo} alt="TechXtract Logo" style={styles.logo} />
      </Link>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;