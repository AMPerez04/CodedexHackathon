import React from 'react';
import FullCalendar from '@fullcalendar/react';
import './EventCalendar.css';
import dayGridPlugin from '@fullcalendar/daygrid';

function EventCalendar() {
  return (
    <div className="event-calendar main">
      <div className=" event-calendar flex justify-center">
        <h1 className="event-calendar text-3xl font-bold text-center">Event Calendar</h1>
      </div>
      <div className="calendar">
      <FullCalendar
        
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Board Game Night', date: '2024-07-12' },
          { title: 'Strategy Workshop', date: '2024-07-13' },
          { title: 'Bloomburrow Pre-release 6pm', date: '2024-07-26' },
          { title: 'Bloomburrow Pre-release 5pm', date: '2024-07-27' },
          { title: 'Bloomburrow Pre-release 6pm', date: '2024-07-29' },
          { title: 'RCQ Round 7 Pioneer 10am', date: '2024-06-30' },
          { title: 'Commander Night 6pm', date: '2024-07-17' },
          { title: 'Commander Night 6pm', date: '2024-07-24' },
          { title: 'Commander Night 6pm', date: '2024-07-31' },
          { title: 'Commander Night 6pm', date: '2024-08-07' },
          { title: 'Commander Night 6pm', date: '2024-07-14' },
          { title: 'Modern 7pm', date: '2024-07-18' },
          { title: 'Modern 7pm', date: '2024-08-01' },
          { title: 'Modern 7pm', date: '2024-07-25' },
        ]}
      /></div>

    </div>
  );
}


export default EventCalendar;