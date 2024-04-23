import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatMins } from '../../utils/dateUtils.js';
import Event from '../event/Event';
import RedLine from './RedLine';
import './hour.scss';

const Hour = ({ day, dataHour, hourEvents, deleteEvent }) => {
  const [redLineConditions, setlineConditions] = useState({
    currentHour: new Date().getHours(),
    currentMinutes: new Date().getMinutes(),
  });

  useEffect(() => {
    const updateRedLineConditions = setInterval(() => {
      setlineConditions({
        currentHour: new Date().getHours(),
        currentMinutes: new Date().getMinutes(),
      });
    }, 1000 * 60);

    return () => {
      clearInterval(updateRedLineConditions);
    };
  }, []);

  const { currentMinutes, currentHour } = redLineConditions;
  const showLineCondition = new Date().getDate() === day && currentHour === dataHour;

  const events = hourEvents.map(({ id, dateFrom, dateTo, title }) => {
    const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
    const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

    return (
      <Event
        deleteEvent={deleteEvent}
        key={id}
        id={id}
        height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
        marginTop={dateFrom.getMinutes()}
        time={`${eventStart} - ${eventEnd}`}
        title={title}
      />
    );
  });

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      <RedLine isShow={showLineCondition} top={currentMinutes - 1} />
      {events}
    </div>
  );
};

export default Hour;

Hour.propTypes = {
  day: PropTypes.number,
  dataHour: PropTypes.number,
  hourEvents: PropTypes.array,
  deleteEvent: PropTypes.func,
};
