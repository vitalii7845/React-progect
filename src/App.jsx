import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';
import { removeEvent, fetchEvents, addEvent } from './gateway/events';
import './styles/common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const goToNextWeekHandler = () => {
    const copyWeekStartDate = new Date(weekStartDate);
    setWeekStartDate(new Date(copyWeekStartDate.setDate(weekStartDate.getDate() + 7)));
  };

  const goToPrevWeekHandler = () => {
    const copyWeekStartDate = new Date(weekStartDate);
    setWeekStartDate(new Date(copyWeekStartDate.setDate(weekStartDate.getDate() - 7)));
  };

  const [allEvents, setAllevents] = useState([]);

  useEffect(() => {
    fetchEvents(weekStartDate).then(events => {
      if (!events) {
        return;
      }

      setAllevents(events);
    });
  }, [weekStartDate]);

  const createNewEvent = eventData => {
    addEvent(eventData).then(event => {
      if (!event) {
        return;
      }

      setAllevents([
        ...allEvents,
        { ...event, dateFrom: new Date(event.dateFrom), dateTo: new Date(event.dateTo) },
      ]);
    });
  };

  const deleteEvent = id => {
    removeEvent(id).then(() => {
      setAllevents(allEvents.filter(e => e.id !== id));
    });
  };

  return (
    <>
      <Header
        createNewEvent={createNewEvent}
        weekDates={weekDates}
        goToNextWeek={goToNextWeekHandler}
        goToPrevWeek={goToPrevWeekHandler}
        showCurrentWeek={() => setWeekStartDate(new Date())}
      />
      <Calendar deleteEvent={deleteEvent} weekDates={weekDates} allEvents={allEvents} />
    </>
  );
};

export default App;
