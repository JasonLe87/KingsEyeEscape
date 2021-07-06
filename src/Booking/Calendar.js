import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'

export default function ReactCalendar() {
  const [value, setValue] = useState(new Date())
  const [bookingDate, setBookingDate] = useState(new Date((new Date()).getTime() - ((new Date()).getTimezoneOffset())*60*1000).toISOString().split('T')[0])


  function onChange(nextValue) {
    let yourDate = nextValue
    let offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    setValue(nextValue)
    setBookingDate(yourDate.toISOString().split('T')[0])
  }

  return (
    <div className="FlexColumnCenter">
      <Calendar
      onChange={onChange}
      value={value}
      minDate={new Date}
      />
      {bookingDate}
    </div>
  )
}