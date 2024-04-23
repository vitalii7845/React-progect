import React from 'react';
import PropTypes from 'prop-types';

const DayLabel = ({ dayName, dayNumber }) => (
  <div className="calendar__day-label day-label">
    <span className="day-label__day-name">{dayName}</span>
    <span className="day-label__day-number">{dayNumber}</span>
  </div>
);

export default DayLabel;

DayLabel.propTypes = {
  dayName: PropTypes.string,
  dayNumber: PropTypes.number,
};
