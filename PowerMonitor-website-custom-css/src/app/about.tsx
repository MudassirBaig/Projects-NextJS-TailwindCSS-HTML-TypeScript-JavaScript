import Link from 'next/link';
import styles from './styles/About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {/* <img src="/logo.png" alt="Logo" className={styles.logo} /> */}
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </nav>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>This is the about page of our website.</p>
    </div>
  );
};

export default About;
