import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function EventCalendar() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Board Game Night', date: '2024-07-12' },
          { title: 'Strategy Workshop', date: '2024-07-13' },
        ]}
      />
    </div>
  );
}

export default EventCalendar;
