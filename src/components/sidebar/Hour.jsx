import React from 'react';
import PropTypes from 'prop-types';

const Hour = ({ hour }) => (
  <div className="time-slot">
    <span className="time-slot__time">{`${hour}:00`}</span>
  </div>
);

export default Hour;

Hour.propTypes = {
  hour: PropTypes.number,
};
