import React from 'react';
import learningSessionImage from '../assets/orientation.jpeg';
import orientationImage from '../assets/orientation.jpeg';

const missionPoints = [
    'To make technology accessible, engaging, and hands-on for every student in the CST community.',
    'To organize technical sessions, workshops, and events that foster innovation and practical skills.',
    'To connect students with industry professionals and alumni through expert talks and mentorship.',
    'To promote a culture of teamwork, leadership, and creative problem-solving through real-world projects and competitions.',
    'To encourage exploration beyond classrooms — from coding and AI to robotics, cybersecurity, and design.'
];

const styles = {
    container: { padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' },
    pageTitle: { textAlign: 'center', fontSize: '3rem', marginBottom: '60px' },
    section: { marginBottom: '60px' },
    sectionTitle: { fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px', display: 'inline-block' },
    missionList: { listStyle: 'none', paddingLeft: '0', maxWidth: '800px', margin: '0 auto', textAlign: 'left' },
    missionListItem: { fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color-secondary)', marginBottom: '20px', paddingLeft: '25px', position: 'relative' },
    cardsContainer: { display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' },
    card: { backgroundColor: 'var(--surface-color)', borderRadius: '12px', width: '350px', border: '1px solid #2a2a2a', overflow: 'hidden' },
    cardImage: { width: '100%', height: '220px', objectFit: 'cover' },
    cardContent: { padding: '25px' },
    cardTitle: { fontSize: '1.5rem', marginTop: '0', color: 'var(--text-color)' },
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
                <ul style={styles.missionList}>
                    {missionPoints.map((point, index) => (
                        <li key={index} style={styles.missionListItem}>
                           <span style={{ color: 'var(--primary-color)', position: 'absolute', left: 0 }}>&#10148;</span> {point}
                        </li>
                    ))}
                </ul>
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
                                <p style={{ color: 'var(--text-color-secondary)' }}>{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutPage;