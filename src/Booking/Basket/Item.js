import React from 'react'

export default function Item({ item }) {

  if (item.booking_date === null) {
    return (
      <></>
    )
  } else {

  return (
    <>
      <div className="Item">
        <img src="https://www.kingseyeescape.com/wp-content/uploads/2021/05/AdobeStock_164586851-copy-2048x1153.jpeg" />
      </div>
      <div className="Pricing">
        <h2 style={{fontSize: "1.3rem"}}>{item.item.name}</h2>
        <div className="PricingRow">
          <p>Date</p>
          <p>{item.booking_date}</p>
        </div>
        <div className="PricingRow">
          <p>Time</p>
          <p>{item.booking_time}</p>
        </div>
        <div className="PricingRow">
          <p>Ticket Price</p>
          <p>Number</p>
        </div>
        <div className="PricingRow">
          <p>Quantity</p>
          <p>{item.total_quantity}</p>
        </div>
        <div className="PricingRow">
          <p>Subtotal</p>
          <p>{item.total}</p>
        </div>
      </div>
    </>
  )

  }
}