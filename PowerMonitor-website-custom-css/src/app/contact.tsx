import Link from 'next/link';
import styles from './styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {/* <img src="/logo.png" alt="Logo" className={styles.logo} /> */}
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>You can reach us at contact@example.com</p>
    </div>
  );
};

export default Contact;
