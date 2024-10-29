// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
//import contact from '@/app/contact';



const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      
        <div className={styles.links}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact">Contact Us</a>
         
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Baig-PowerIoTize. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
