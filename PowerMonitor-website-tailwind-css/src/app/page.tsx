

import PowerCard from './components/PowerCard';// Import the PowerCard component
import ToggleButton from './components/ToggleButton';
import React from 'react';

const Home: React.FC = () => {

  return (
    <div className="items-center p-4 bg-white" >
                    
     <p className="text-xl font-bold text-black text-center font-serif">
        Welcome to our centralized power management solution. Our dashboard provides real-time insights into your energy consumption, allowing you to monitor your usage, control connected devices, and make informed decisions about your energy efficiency.
      </p>
      <h2  className="text-3xl font-bold text-black text-center"  >Power Analysis</h2>
      <div >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4" >
        
          <PowerCard title="Power" value="1.9" unit="KWKJKJ" update="last update 30 secs ago" color="bg-blue-500"/>
                   
          <PowerCard title="Voltage" value="230" unit="V" update='last update 5 secs ago' color="bg-blue-500" /> 
        
          <PowerCard title="Current" value="0.65" unit="A" update='last update 5 secs ago ' color="bg-blue-500"/>

          <PowerCard title="Power factor" value="1" unit="W" update='last update 1 hr ago' color="bg-blue-500"/>

          <PowerCard title="Temprature" value="30" unit="C" update='last update 5 secs ago' color="bg-blue-500"/>
         
          <PowerCard title="Frequancy" value="50" unit="HZ" update='last update 5 secs ago' color="bg-blue-500"/>

          <PowerCard title="Energy" value="1.5" unit="kWh" update='last update 1 hr ago' color="bg-blue-500"/>

         
        </div>
        <h3  className="text-3xl font-bold text-black text-center">Control Appliances</h3>
        <div >
          <ToggleButton />
        </div>
        <h4  className="text-3xl font-bold text-black text-center">Graph</h4>
        <div className="flex justify-center">
  <img 
    src="./images/home-monitoring-grafana-dashboard.jpg" 
    alt="Description" 
    className="max-w-full h-auto rounded-lg" // Optional classes for responsiveness and styling
  />
</div>
       
        
      </div>
    
    </div>
    
  );
};

export default Home;
