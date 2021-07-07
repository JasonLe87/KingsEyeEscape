import React from 'react'
import Booking from './Booking.js'


export default function Bookings(props) {
  const Pricing = [9, 9, 11]

  return (
    <div className="BookingList">
      {props.data.map((res, index) => {
        if(index > 0) {
          return (
            <Booking key={index} data={res} pricing={Pricing[index]} setInstanceId={props.setInstanceId} setModal={props.setModal} createBasket={props.createBasket}/>
          )
        }
      })}
    </div>
  )
}