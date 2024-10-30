import Link from 'next/link';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
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
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>We would love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us using the information below or fill out the contact form.</p>
    </div>
  );
};

export default Contact;
