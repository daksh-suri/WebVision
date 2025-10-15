// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import eventSecretCipher from '../assets/event-secret-cipher.jpeg';
import eventLuminar from '../assets/event-luminar.jpg';

const styles = {
  heroContainer: { minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' },
  headline: { fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', margin: '0 0 1rem 0' },
  subheading: { fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 2rem auto' },
  button: { backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', padding: '12px 24px', margin: '0 10px', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', fontWeight: '600' },
  buttonSecondary: { backgroundColor: 'transparent', border: '1px solid var(--primary-color)' },
  section: { padding: '80px 20px', textAlign: 'center' },
  sectionTitle: { fontSize: '2.5rem', marginBottom: '40px' },
  aboutSection: { backgroundColor: '#1e1e1e' },
  aboutText: { fontSize: '1.1rem', lineHeight: '1.7', color: '#b0b0b0', maxWidth: '800px', margin: '0 auto' },
  cardsContainer: { display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' },
  card: { backgroundColor: '#1e1e1e', borderRadius: '8px', overflow: 'hidden', width: '300px', border: '1px solid #2a2a2a', textAlign: 'left' },
  cardImage: { width: '100%', height: 'auto', display: 'block' },
  cardContent: { padding: '20px' },
  cardTitle: { fontSize: '1.5rem', marginTop: '0', color: 'var(--primary-color)' },
};

const eventsData = [
  {
    title: 'Secret Cipher 2.0',
    description: 'A thrilling coding event focused on cryptography and problem-solving.',
    image: eventSecretCipher,
  },
  {
    title: 'Luminar Insights',
    description: 'An expert talk by an industry leader on emerging technologies.',
    image: eventLuminar,
  },
];

function HomePage() {
  return (
    <>
      <section style={styles.heroContainer}>
        <h1 style={styles.headline}>A Hub for Innovation & Creativity</h1>
        <p style={styles.subheading}>Welcome to TechXtract, the society where ideas become reality. We are forward-thinking engineers building the future, together.</p>
        <div>
          <Link to="/team" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Meet the Team</button>
          </Link>
        </div>
      </section>

      <section style={{...styles.section, ...styles.aboutSection}}>
        <h2 style={styles.sectionTitle}>What is TechXtract?</h2>
        <p style={styles.aboutText}>TechXtract is the official technology society of our Department — a hub for innovation, collaboration, and engineering creativity. We focus on turning bold ideas into impactful projects, fostering a community of passionate builders and thinkers.</p>
        <div style={{ marginTop: '30px' }}>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <button style={styles.button}>Learn More About Us</button>
            </Link>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Recent Events</h2>
        <div style={styles.cardsContainer}>
          {eventsData.map((event, index) => (
            <div key={index} style={styles.card}>
              <img src={event.image} alt={event.title} style={styles.cardImage} />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '40px' }}>
          <Link to="/events" style={{ textDecoration: 'none' }}>
            <button style={{ ...styles.button, ...styles.buttonSecondary }}>View All Events</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;