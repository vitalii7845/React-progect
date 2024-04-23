import React from 'react';
import Hour from './Hour';
import './sidebar.scss';

const Sidebar = () => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__time-scale">
      {hours.map(hour => (
        <Hour key={hour + Math.random()} hour={hour} />
      ))}
    </div>
  );
};

export default Sidebar;
