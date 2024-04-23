import React from 'react';
import PropTypes from 'prop-types';
import Day from '../day/Day';
import './week.scss';

const Week = ({ weekDates, allEvents, deleteEvent }) => (
  <div className="calendar__week">
    {weekDates.map(dayStart => {
      const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

      const dayEvents = allEvents.filter(
        event => event.dateFrom >= dayStart && event.dateTo <= dayEnd,
      );

      return (
        <Day
          deleteEvent={deleteEvent}
          key={dayStart.getDate()}
          dataDay={dayStart.getDate()}
          dayEvents={dayEvents}
        />
      );
    })}
  </div>
);

export default Week;

Week.propTypes = {
  weekDates: PropTypes.array,
  allEvents: PropTypes.array,
  deleteEvent: PropTypes.func,
};
