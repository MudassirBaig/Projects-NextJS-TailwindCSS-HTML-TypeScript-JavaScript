import Link from 'next/link';
import styles from './Privacy.module.css';

const Privacy: React.FC = () => {
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
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.description}>This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.</p>
    </div>
  );
};

export default Privacy;
