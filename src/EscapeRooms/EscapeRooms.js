import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import TheHarvest from './TheHarvest.js'
import TheXtraction from './TheXtraction.js'

export default function EscapeRooms() {

  useEffect(() => {
    document.getElementById("root").scrollIntoView();
  }, []);

  return (
    <motion.div className="EscapeRooms"
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
      <header>Our Escape Rooms</header>
      <div className="divisor" />
      <TheHarvest />
      <TheXtraction />
    </motion.div>
  )
}