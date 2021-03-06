import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

import TheHarvest from './TheHarvest.js'
import TheXtraction from './TheXtraction.js'

export default function EscapeRooms() {

  useEffect(() => {
    document.getElementById("root").scrollIntoView();
  }, []);

  useEffect(() => {
    gtag('js', new Date());
    gtag('config', 'UA-159548226-1', {
      'page_title' : 'EscapeRoom',
      'page_path': '/escape_rooms'
    });
  }, [])

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
      <Helmet>
        <title>Escape Rooms</title>
        <meta name="description" content="Find yourself fighting to survive in a post-apocalyptic fantasy world" />
      </Helmet>
      <TheHarvest />
      <TheXtraction />
    </motion.div>
  )
}