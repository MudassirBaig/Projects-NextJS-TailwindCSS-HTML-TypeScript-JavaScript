import Link from 'next/link';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
    <nav className={styles.nav}>
    <Link href="/">
      <img src="./images/energy-monitor-logo-300x166.png"
       alt="Logo" className={styles.logo} />
        </Link>
      <h1 className={styles.h1}>Power Monitoring Dashboard </h1 >
      <div className={styles.navLinks}>
     
              </div>
    </nav>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>This is the about page of our website.</p>
    </div>
  );
};

export default About;