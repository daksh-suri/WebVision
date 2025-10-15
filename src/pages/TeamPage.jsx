// src/pages/TeamPage.jsx
import React from 'react';
import teamPhoto from '../assets/team-photo.jpg'; // Corrected file extension

const styles = {
    container: {
        padding: '60px 20px',
        textAlign: 'center',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '40px',
    },
    imageContainer: {
        maxWidth: '1000px',
        margin: '0 auto',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    }
}

function TeamPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>The People Who Make It Happen</h1>
      <div style={styles.imageContainer}>
        <img src={teamPhoto} alt="TechXtract Team" style={styles.image} />
      </div>
    </div>
  );
}

export default TeamPage;