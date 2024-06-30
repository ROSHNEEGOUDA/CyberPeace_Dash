import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const events = {
  '2024-06-01': [{ time: '10:00 AM - 11:00 PM', title: 'Class with Prof. Smith' }],
  '2024-06-05': [{ time: '10:00 AM - 11:00 PM', title: 'Class with Prof. Smith' }],
  '2024-06-09': [{ time: '10:00 AM - 11:00 PM', title: 'Class with Prof. Smith' }],
  '2024-06-12': [{ time: '2:00 PM - 3:00 PM', title: 'Class with Prof. Johnson' }],
  '2024-06-15': [{ time: '11:00 AM - 12:00 PM', title: 'Class with Prof. Brown' }],
  '2024-06-18': [{ time: '11:00 AM - 12:00 PM', title: 'Class with Prof. Brown' }],
  '2024-06-22': [{ time: '3:00 PM - 4:00 PM', title: 'Class with Prof. Davis' }],
  '2024-06-24': [{ time: '3:00 PM - 4:00 PM', title: 'Class with Prof. Davis' }],
  '2024-06-28': [{ time: '3:00 PM - 4:00 PM', title: 'Class with Prof. Davis' }],
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

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
        const cloneDay = day;
        days.push(
          <div
            key={isoDate}
            className={`relative h-24 flex items-start justify-center p-2 border ${isSameMonth(day, monthStart) ? 'border-gray-300' : 'border-gray-100'} ${isSameDay(day, new Date()) ? 'bg-blue-300' : ''}`}
          >
            <span className={`text-gray-900 ${!isSameMonth(day, monthStart) ? 'text-gray-400' : ''}`}>{formattedDate}</span>
            {events[isoDate] && (
              <div className="absolute top-0 left-0 mt-8 ml-2 w-40 p-2 z-50 bg-gray-800 text-white text-sm rounded shadow-lg cursor-pointer">
                {events[isoDate].map((event, i) => (
                  <div key={i}>
                    <div>{event.time}</div>
                    <div>{event.title}</div>
                  </div>
                ))}
              </div>
            )}
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

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
