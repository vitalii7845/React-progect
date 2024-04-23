import React from 'react';
import PropTypes from 'prop-types';
import EventForm from './EventForm';
import './modal.scss';

const Modal = ({ visible, closeModal, createNewEvent }) =>
  visible ? (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button onClick={closeModal} data-can-delete className="create-event__close-btn">
            +
          </button>
          <EventForm closeModal={closeModal} createNewEvent={createNewEvent} />
        </div>
      </div>
    </div>
  ) : null;

export default Modal;

Modal.propTypes = {
  visible: PropTypes.bool,
  closeModal: PropTypes.func,
  createNewEvent: PropTypes.func,
};
