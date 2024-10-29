import React from 'react';
import styles from './PowerCard.module.css';

interface PowerCardProps {
  title: string;
  value: string;
  unit: string;
  update: string
  
}

const PowerCard: React.FC<PowerCardProps> = ({ title, value, unit, update }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.value}>
        {value} {unit}
      </p>
      <p className={styles.lastUpdate}>{update}</p> {/* Display last update */}
    </div>
  );
};

export default PowerCard;
