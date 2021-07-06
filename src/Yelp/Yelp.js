import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Yelp () {
  return (
    <div className="Reviews">
        <h1>Check Out Why People <strong>LOVE</strong> Us</h1>
        <div className="divisor"/>
        <h2>And why they can't wait for more!</h2>
        <div className="ReviewCarousel">
          <FontAwesomeIcon icon={faArrowLeft} size="6x" style={{margin: "0 50px"}}/>
          <div className="Review">
            <img src="https://s3-media1.fl.yelpcdn.com/photo/C4uaMHPBpgjK4a6Q4impLw/o.jpg" alt=""/>
            <h3>Sandy T.</h3>
            <h3>2021-04-06</h3>
            <p>I've only done a few escape rooms before, and this one is by far the most challenging, fun, and thrilling (disclaimer: I get startled easily)!

            <br/><br/>Marc (the owner) has done a terrific job building this escape room -- everything from the props to music to puzzles.

            <br/><br/>I look forward to the second escape room theme and ax-throwing room!

            <br/><br/>PROS
            <br/>+ Fun
            <br/>+ Challenging
            <br/>+ Scary
            <br/>+ Easy to book
            <br/>+ COVID safety precautions (masks are available if you don't have <br/>one, all employees wear masks, hand sanitizer is available, <br/>capacity is limited, bookings are spaced out, rooms are sanitized <br/>between groups)

            <br/><br/>CONS
            <br/>- Scary
            <br/>- We weren't smart enough to finish the room within the time limit! :( But Marc did a mini walkthrough to show us how close we were to finishing.</p>
          </div>
          <FontAwesomeIcon icon={faArrowRight} size="6x" style={{margin: "0 50px"}}/>
        </div>
    </div>
  )
}