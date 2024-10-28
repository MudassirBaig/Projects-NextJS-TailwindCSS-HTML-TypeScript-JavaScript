import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';


interface PowerCardProps {
  title: string;
  value: string;
  unit: string;
  update: string;
  color: string; // New color prop
  
}

const PowerCard: React.FC<PowerCardProps> = ({ title, value, unit, update, color }) => {
    return (
      <div className={`p-6 rounded-lg shadow-md text-white text-center ${color}`}>
        <FontAwesomeIcon icon={faBolt} size="2x" className="mb-2" />
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-2xl">
          {value} {unit}
        </p>
        <p className="text-sm">{update}</p> {/* Display last update */}
      </div>
    );
  };

export default PowerCard;