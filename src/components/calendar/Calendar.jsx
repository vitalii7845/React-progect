import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ weekDates, allEvents, deleteEvent }) => (
  <section className="calendar">
    <Navigation weekDates={weekDates} />
    <div className="calendar__body">
      <div className="calendar__week-container">
        <Sidebar />
        <Week deleteEvent={deleteEvent} weekDates={weekDates} allEvents={allEvents} />
      </div>
    </div>
  </section>
);

export default Calendar;

Calendar.propTypes = {
  weekDates: PropTypes.array,
  allEvents: PropTypes.array,
  deleteEvent: PropTypes.func,
};
