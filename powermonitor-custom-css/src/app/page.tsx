import Link from 'next/link';
import styles from './styles/Home.module.css';
import PowerCard from '../components/PowerCard';
import ToggleButton from '../components/ToggleButton';
import React from 'react';

const Home: React.FC = () => {

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
      <Link href="#">
        <img src="./images/energy-monitor-logo-300x166.png"
         alt="Logo" className={styles.logo} />
          </Link>
        <h1 className={styles.h1}>Power Monitoring Dashboard </h1 >
        <div className={styles.navLinks}>
       
                </div>
      </nav>

<p className={styles.description}>
        Welcome to our centralized power management solution. Our dashboard provides real-time insights into your energy consumption, allowing you to monitor your usage, control connected devices, and make informed decisions about your energy efficiency.
      </p>
      <h2 className={styles.h2}>Power Analysis</h2 >
      <div className={styles.mainContainer}>
        <div className={styles.cardContainer}>
        
          <PowerCard title="Power" value="1.9" unit="KW" update="last update 30 secs ago"/>
                   
          <PowerCard title="Voltage" value="230" unit="V" update='last update 5 secs ago' /> 
        
          <PowerCard title="Current" value="0.65" unit="A" update='last update 5 secs ago'/>

          <PowerCard title="Power factor" value="1" unit="W" update='last update 1 hr ago'/>

          <PowerCard title="Temprature" value="30" unit="C" update='last update 5 secs ago'/>
         
          <PowerCard title="Frequancy" value="50" unit="HZ" update='last update 5 secs ago'/>

          <PowerCard title="Energy" value="1.5" unit="kWh" update='last update 1 hr ago' />

         
        </div>
        <h3 className={styles.h3}>Control Appliances</h3>
        <div className={styles.buttonContainer}>
          <ToggleButton />
        </div>
        <h4 className={styles.h4}>Graph</h4>
        <div className={styles.imageContainer}>
          <img src="./images/home-monitoring-grafana-dashboard.jpg" alt="Description" className={styles.image} />
        </div>
       
        
      </div>
    
    </div>
    
  );
};

export default Home;
