'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faLightbulb, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import styles from './ToggleButton.module.css';

const ToggleButton: React.FC = () => {
  const [fanOn, setFanOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [lightOn, setLightOn] = useState(false);

  const toggleFan = () => setFanOn(!fanOn);
  const toggleAC = () => setAcOn(!acOn);
  const toggleLight = () => setLightOn(!lightOn);

  return (
    <div className={styles.buttonContainer}>
      <button onClick={toggleFan} className={styles.button}>
        <FontAwesomeIcon icon={faFan} />
        {fanOn ? ' Turn Off Fan' : ' Turn On Fan'}
      </button>
      <button onClick={toggleAC} className={styles.button}>
        <FontAwesomeIcon icon={faSnowflake} />
        {acOn ? ' Turn Off AC' : ' Turn On AC'}
      </button>
      <button onClick={toggleLight} className={styles.button}>
        <FontAwesomeIcon icon={faLightbulb} />
        {lightOn ? ' Turn Off Light' : ' Turn On Light'}
      </button>
    </div>
  );
};

export default ToggleButton;

