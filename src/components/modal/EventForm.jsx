import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EventForm = ({ createNewEvent, closeModal }) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  const submitEventFormHandler = e => {
    e.preventDefault();
    const { title, description, date, startTime, endTime } = eventData;
    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`).getTime(),
      dateTo: new Date(`${date} ${endTime}`).getTime(),
    };

    createNewEvent(newEvent);
    closeModal(e);
  };

  const changeInputHandler = e => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  return (
    <form className="event-form" onSubmit={submitEventFormHandler} data-can-delete>
      <input
        value={eventData.title}
        onChange={changeInputHandler}
        type="text"
        name="title"
        placeholder="Title"
        className="event-form__field"
      />
      <div className="event-form__time">
        <input
          value={eventData.date}
          onChange={changeInputHandler}
          type="date"
          name="date"
          className="event-form__field"
        />
        <input
          value={eventData.startTime}
          onChange={changeInputHandler}
          type="time"
          name="startTime"
          className="event-form__field"
        />
        <span>-</span>
        <input
          value={eventData.endTime}
          onChange={changeInputHandler}
          type="time"
          name="endTime"
          className="event-form__field"
        />
      </div>
      <textarea
        value={eventData.description}
        onChange={changeInputHandler}
        name="description"
        placeholder="Description"
        className="event-form__field"
      ></textarea>
      <button type="submit" className="event-form__submit-btn">
        Create
      </button>
    </form>
  );
};

export default EventForm;

EventForm.propTypes = {
  closeModal: PropTypes.func,
  createNewEvent: PropTypes.func,
};
