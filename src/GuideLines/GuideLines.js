import React from 'react'

export default function Guidelines() {
  return (
    <div className="Guidelines">
      <header>Our Covid Guidelines</header>
      <div className="divisor"/>
      <p>In Order to help prevent the spread of COVID-19, we've implemented stict safety measures to protect our guests</p>
      <div className="SafetyList">
        <li>Only allow small group sizes (Less than 10) to participate in our experiences.</li>
        <li>Maintain a period of at least 45 minutes between bookings for each game.</li>
        <li>Only allow for one group at a time in our lobby.</li>
        <li>Thoroughly sanitize between every group.</li>
        <li>Only private groups (Family and Friends only, no mixing of strangers) allowed to book.</li>
        <li>Maintain a comprehensie Contact Tracing log.</li>
        <li>Social Distance between Staff and Patrons</li>
        <li>Stock Hand Sanitizer, Anti-bacterial wipes, Masks</li>
      </div>
      <img className="logo" src="./CovidGuidelines.jpeg" alt="Covid Guidelines" />
    </div>
  )
}