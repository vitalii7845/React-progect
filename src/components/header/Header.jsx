import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation/Navigation';
import Modal from '../modal/Modal';
import './header.scss';

const Header = ({ weekDates, goToNextWeek, goToPrevWeek, showCurrentWeek, createNewEvent }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const closeModal = e => {
    const { canDelete } = e.target.dataset;
    if (canDelete) {
      setModalVisibility(false);
    }
  };

  return (
    <header className="header">
      <div className="header__title">
        <img
          className="header__logo"
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-03-128.png"
          alt="google calendar icon"
        />
        <span className="header__title-text">Calendar</span>
      </div>
      <button onClick={() => setModalVisibility(true)} className="create-event-btn">
        +
      </button>
      <Navigation
        weekDates={weekDates}
        goToNextWeek={goToNextWeek}
        goToPrevWeek={goToPrevWeek}
        showCurrentWeek={showCurrentWeek}
      />
      <div className="header__user user">
        <img
          src="https://img.icons8.com/?size=64&id=t4YbEbA834uH&format=png"
          alt="react icon"
          className="react__icon"
        />
      </div>
      <Modal visible={modalVisibility} createNewEvent={createNewEvent} closeModal={closeModal} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  weekDates: PropTypes.array,
  goToPrevWeek: PropTypes.func,
  goToNextWeek: PropTypes.func,
  showCurrentWeek: PropTypes.func,
  createNewEvent: PropTypes.func,
};
