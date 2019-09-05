import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import './calendar.sass'

let FullCalendar

export default function Calendar(props) {
  const [calendarLoaded, setCalendarLoaded] = useState(false)

  useEffect(() => {
    FullCalendar = dynamic({
      modules: () => ({
        calendar: import('@fullcalendar/react'),
        dayGridPlugin: import('@fullcalendar/daygrid'),
        timeGridPlugin: import('@fullcalendar/timegrid'),
        interactionPlugin : import("@fullcalendar/interaction"),
      }),
      render: (props, { calendar: Calendar, ...plugins }) => (
        <Calendar {...props} plugins={Object.values(plugins)} ref={props.myRef}/>
      ),
      ssr: false
    })
    setCalendarLoaded(true)
  })


  
  const header = {
    left: 'today,prev,next',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
  }


  
  const buttonText = {
    today:    'today',
    month:    'month',
    week:     'week',
    day:      'day',
    list:     'list',
    prev:     'Back',
    next:     'next'
    }
  let showCalendar = (props) => {
    if ( !calendarLoaded ) return <div>Loading ...</div>
    return (
      <FullCalendar 
        id='calendar'
        events={props.events} 
        height='parent'
        header={header} 
        buttonText={buttonText}
        editable="true"
        timeZone='UTC'
        themeSystem='bootstrap'
        selectable="true"
        {...props} 
      />
    )
  }
  return (
    <div className="calendar-block">
      <div className="container">
        <h1>Calendar View</h1>
        {showCalendar(props)}
      </div>
    </div>
  )
}