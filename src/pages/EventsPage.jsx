
import React from 'react';

const styles = {
  container: { padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' },
  pageTitle: { fontSize: '3rem', marginBottom: '60px' },
  sectionTitle: { fontSize: '2.5rem', marginTop: '60px', marginBottom: '30px', borderBottom: '2px solid var(--primary-color)', display: 'inline-block', paddingBottom: '10px' },
  cardsContainer: { display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' },
  card: { backgroundColor: 'var(--surface-color)', borderRadius: '12px', padding: '25px', width: '320px', border: '1px solid #2a2a2a', textAlign: 'left' },
  cardTitle: { fontSize: '1.5rem', marginTop: '0', color: 'var(--primary-color)' },
};

const allEventsData = [
  { title: 'WebVision Hackathon', description: 'Our flagship hackathon focused on modern web development and design.', status: 'past' },
  { title: 'Intro to React Workshop', description: 'A hands-on session covering the fundamentals of building with React.', status: 'past' },
  { title: 'UI/UX Design Principles', description: 'A talk by industry experts on creating intuitive and beautiful user experiences.', status: 'past' },
  { title: 'Getting Started with Git & GitHub', description: 'Learn version control essentials for collaborative projects.', status: 'upcoming' },
  { title: 'Advanced CSS Animations', description: 'A deep dive into creating fluid and engaging web animations.', status: 'upcoming' },
  { title: 'Backend Development with Node.js', description: 'An introduction to building server-side applications with Node.js and Express.', status: 'past' },
];

const upcomingEvents = allEventsData.filter(event => event.status === 'upcoming');
const pastEvents = allEventsData.filter(event => event.status === 'past');

function EventsPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Events & Workshops</h1>
      <section>
        <h2 style={styles.sectionTitle}>Upcoming Events</h2>
        <div style={styles.cardsContainer}>
          {upcomingEvents.map((event, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{event.title}</h3>
              <p style={{ color: 'var(--text-color-secondary)' }}>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>Past Events</h2>
        <div style={styles.cardsContainer}>
          {pastEvents.map((event, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{event.title}</h3>
              <p style={{ color: 'var(--text-color-secondary)' }}>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EventsPage;