import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, deleteEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            day={dataDay}
            dataHour={hour}
            hourEvents={hourEvents}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Day;

Day.propTypes = {
  dataDay: PropTypes.number,
  dayEvents: PropTypes.array,
  deleteEvent: PropTypes.func,
};
