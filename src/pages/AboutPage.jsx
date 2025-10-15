// src/pages/AboutPage.jsx
import React from 'react';
import learningSessionImage from '../assets/orientation.jpeg';
import orientationImage from '../assets/orientation.jpeg';

const styles = {
    container: { padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' },
    pageTitle: { textAlign: 'center', fontSize: '3rem', marginBottom: '40px' },
    section: { marginBottom: '60px' },
    sectionTitle: { fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center', borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px', display: 'inline-block' },
    missionText: { fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'center', color: '#b0b0b0', maxWidth: '800px', margin: '0 auto' },
    cardsContainer: { display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' },
    card: { backgroundColor: '#1e1e1e', borderRadius: '8px', width: '320px', border: '1px solid #2a2a2a', overflow: 'hidden' },
    cardImage: { width: '100%', height: '200px', objectFit: 'cover' },
    cardContent: { padding: '20px' },
    cardTitle: { fontSize: '1.5rem', marginTop: '0' },
};

const activities = [
    { title: 'Workshops & Sessions', description: 'We conduct hands-on workshops and learning sessions on the latest technologies to help members build practical skills.', image: learningSessionImage },
    { title: 'Community Events', description: 'From orientations to hackathons, we foster a vibrant community where students can connect, collaborate, and innovate.', image: orientationImage }
];

function AboutPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.pageTitle}>About TechXtract</h1>
            <section style={styles.section}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={styles.sectionTitle}>Our Mission</h2>
                </div>
                <p style={styles.missionText}>Our mission is to be a hub for innovation, collaboration, and engineering creativity. We aim to empower students by providing a platform to learn, build, and share their passion for technology.</p>
            </section>
            <section style={styles.section}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={styles.sectionTitle}>What We Do</h2>
                </div>
                <div style={styles.cardsContainer}>
                    {activities.map((activity, index) => (
                        <div key={index} style={styles.card}>
                            <img src={activity.image} alt={activity.title} style={styles.cardImage} />
                            <div style={styles.cardContent}>
                                <h3 style={styles.cardTitle}>{activity.title}</h3>
                                <p>{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutPage;