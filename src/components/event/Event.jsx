import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeletePopup from './DeletePopup';
import './event.scss';

const Event = ({ id, height, marginTop, title, time, deleteEvent }) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div onClick={() => setIsShowPopup(!isShowPopup)} style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <DeletePopup visible={isShowPopup} id={id} deleteEvent={deleteEvent} />
    </div>
  );
};

export default Event;

Event.propTypes = {
  id: PropTypes.string,
  height: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string,
  deleteEvent: PropTypes.func,
};
