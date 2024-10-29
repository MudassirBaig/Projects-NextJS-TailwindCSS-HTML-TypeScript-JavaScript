'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faLightbulb, faSnowflake } from '@fortawesome/free-solid-svg-icons';


const ToggleButton: React.FC = () => {
  const [fanOn, setFanOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [lightOn, setLightOn] = useState(false);

  const toggleFan = () => setFanOn(!fanOn);
  const toggleAC = () => setAcOn(!acOn);
  const toggleLight = () => setLightOn(!lightOn);

  return (
    <div className="flex justify-between p-4">
      <button onClick={toggleFan} className={`flex items-center px-4 py-2 rounded-lg text-white transition duration-300 ${
          fanOn ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 hover:bg-gray-500'
        }`}
      >
        <FontAwesomeIcon icon={faFan} className="mr-2" />
        {fanOn ? ' Turn Off Fan' : ' Turn On Fan'}
      </button>
      <button onClick={toggleAC}className={`flex items-center px-4 py-2 rounded-lg text-white transition duration-300 ${
          acOn ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
        }`}
      >
        <FontAwesomeIcon icon={faSnowflake} className="mr-2" />
        {acOn ? ' Turn Off AC' : ' Turn On AC'}
      </button>
      <button onClick={toggleLight}className={`flex items-center px-4 py-2 rounded-lg text-white transition duration-300 ${
          lightOn ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-400 hover:bg-gray-500'
        }`}
      >
        <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
        {lightOn ? ' Turn Off Light' : ' Turn On Light'}
      </button>
    </div>
  );
};

export default ToggleButton;

