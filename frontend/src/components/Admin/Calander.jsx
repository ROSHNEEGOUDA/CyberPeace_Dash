import React, { useState, useEffect } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import axios from 'axios';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MAX_EVENTS_DISPLAY = 2; // Maximum number of events to display initially

const AdminCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});

  useEffect(() => {
    // Load events from localStorage on component mount
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    // Fetch events from backend whenever the month changes
    fetchEvents();
  }, [currentMonth]);

  useEffect(() => {
    // Store events in localStorage whenever events state changes
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/event`,
        {
          params: {
            month: format(currentMonth, 'yyyy-MM')
          }
        }
      );
      const fetchedEvents = response.data.reduce((acc, event) => {
        const date = event.date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(event);
        return acc;
      }, {});
      setEvents(fetchedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="text-lg font-bold">&lt;</button>
        <div className="text-xl font-bold">{format(currentMonth, 'MMMM yyyy')}</div>
        <button onClick={nextMonth} className="text-lg font-bold">&gt;</button>
      </div>
    );
  };

  const renderDays = () => {
    return (
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-bold text-gray-600">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];

    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, 'd');
        const isoDate = format(day, 'yyyy-MM-dd');
        const dayEvents = events[isoDate] || [];

        days.push(
          <div
            key={isoDate}
            className={`relative h-24 flex flex-col p-1 border ${isSameMonth(day, monthStart) ? 'border-gray-300' : 'border-gray-100'} ${isSameDay(day, new Date()) ? 'bg-blue-300' : ''}`}
            onClick={() => openModal(isoDate)}
          >
            <div className='flex justify-between'>
              <span className={`text-gray-900 ${!isSameMonth(day, monthStart) ? 'text-gray-400' : ''}`}>{formattedDate}</span>
            </div>
            <div className="text-xs">
              {dayEvents.slice(0, MAX_EVENTS_DISPLAY-1).map((event, index) => (
                <div key={index}>
                  <div className="font-semibold text-xs">{event.time}</div>
                  <div className='text-xs'>{event.instructor}</div>
                </div>
              ))}

            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-2" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const openModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { time, title, instructor } = event.target.elements;
    const newEvent = { date: selectedDate, time: time.value, title: title.value, instructor: instructor.value };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/event`,
        newEvent
      );
      newEvent.id = response.data.id; // Assuming the backend returns the new event's id
      // Update the local events state
      if (!events[selectedDate]) {
        events[selectedDate] = [];
      }
      events[selectedDate].push(newEvent);
      setEvents({ ...events }); // Trigger state update
      closeModal();
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      {renderHeader()}
      {renderDays()}
      {renderCells()}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button className="absolute top-0 right-0 m-2 text-lg" onClick={closeModal}>&times;</button>
            <form onSubmit={handleFormSubmit}>
              <h2 className="text-xl mb-4">Add Event for {selectedDate}</h2>
              <div className="mb-2">
                <label className="block text-sm font-bold mb-1">Time</label>
                <input type="text" name="time" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-bold mb-1">Title</label>
                <input type="text" name="title" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-bold mb-1">Instructor</label>
                <input type="text" name="instructor" className="w-full p-2 border rounded" required />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Event</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;
