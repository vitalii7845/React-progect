import React from 'react';
import PropTypes from 'prop-types';

const DeletePopup = ({ visible, deleteEvent, id }) => {
  const deleteEventHandler = () => {
    deleteEvent(id);
  };
  return visible ? (
    <button onClick={deleteEventHandler} className="delete-event-btn">
      delete <i></i>
    </button>
  ) : null;
};

export default DeletePopup;

Event.propTypes = {
  id: PropTypes.string,
  visible: PropTypes.bool,
  deleteEvent: PropTypes.func,
};
