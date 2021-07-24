import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

import TheHarvest from './TheHarvest.js'
import TheXtraction from './TheXtraction.js'

export default function EscapeRooms() {

  useEffect(() => {
    document.getElementById("root").scrollIntoView();
  }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://www.googletagmanager.com/gtag/js?id=UA-159548226-1";
  //   script.async = true;
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  //   gtag('config', 'UA-159548226-1');
  // }, [])

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