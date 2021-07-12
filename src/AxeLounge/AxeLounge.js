import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'
import SafetyList from './SafetyList.js'
import SummaryList from './SummaryList.js'

export default function AxeLounge() {

  useEffect(() => {
    document.getElementById("root").scrollIntoView();
  }, []);

  return (
    <motion.div className="AxeMain"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div className="AxeLounge">
        <header>Indoor AXE THROWING Lounge</header>
        <div className="divisor" />
        <p>
          Here at King's Eye Escape, our love language is definitely AXe of Service! So come kick back and  relAX in our latest AXperience! Join us today for a fantAXtic time!
        </p>
        <div className="AxeRoom">
          <img className="Poster" src="./AxeLounge.jpg" alt="/"/>
          <div className="Description">
            <p>Enjoy our AXE-tremely personal and AXE-ceptional service in our private indoor lounge! Learn how to throw various weapons safely from our IntellAXEuals! Stop being BOARD and come out and AXually have a good time! You probably won’t mAX out your credit card because that would be unAXEceptable!</p>
            <div className="Information">
              <div className="Info">
                <FontAwesomeIcon icon={faCrosshairs} size='1x'style={{ color: 'white'}} />
                <p>Ages 8+ (supervision required for minors)</p>
              </div>
              <div className="Info">
                <FontAwesomeIcon icon={faCrosshairs} size='1x'style={{ color: 'white' }} />
                <p>From 2 to 8 players</p>
              </div>
              <div className="Info">
                <FontAwesomeIcon icon={faCrosshairs} size='1x'style={{ color: 'white' }} />
                <p>$50pp/1hr for 2, $35pp/1hr for 3+ people</p>
              </div>
              <div className="Info">
                <FontAwesomeIcon icon={faCrosshairs} size='1x'style={{ color: 'white' }} />
                <p>Safety training included</p>
              </div>
              <div className="Info">
                <FontAwesomeIcon icon={faCrosshairs} size='1x'style={{ color: 'white' }} />
                <p>Walk-ins welcome when lanes are available</p>
              </div>
            </div>
            <Link to="/book_now">
              <div >BOOK NOW</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="AxeSafety">
        <h1>SAFETY RULES</h1>
        <div className="divisor" />
        <p>Safety is first in mind with everything we do at King’s Eye. Please carefully read and understand everything below in order to have a safe and enjoyable Axe Throwing experience. Please be aware that any violation of our safety policies or other unsafe behavior by any member of your group may result in you being unable to participate in your event, and/or removal from the premises. Your event fee will not be refunded.</p>
        <SafetyList />
        <h2>SUMMARY</h2>
        <SummaryList />
      </div>
    </motion.div>
  )
}