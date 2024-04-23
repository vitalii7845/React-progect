import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentMonths } from '../../../utils/dateUtils';
import './navigation.scss';

const Navigation = ({ weekDates, goToNextWeek, goToPrevWeek, showCurrentWeek }) => (
  <div className="navigation">
    <button onClick={showCurrentWeek} className="navigation__today-btn button">
      Today
    </button>
    <button onClick={goToPrevWeek} className="icon-button navigation__nav-icon">
      <i className={'fas fa-chevron-left'} />
    </button>
    <button onClick={goToNextWeek} className="icon-button navigation__nav-icon">
      <i className={'fas fa-chevron-right'} />
    </button>
    <span className="navigation__displayed-month">{getCurrentMonths(weekDates).join(' - ')}</span>
  </div>
);

export default Navigation;

Navigation.propTypes = {
  weekDates: PropTypes.array,
  goToNextWeek: PropTypes.func,
  goToPrevWeek: PropTypes.func,
  showCurrentWeek: PropTypes.func,
};
