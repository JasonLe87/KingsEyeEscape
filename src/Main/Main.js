import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import Carousel from '../Carousel/YelpEmbed.js'
import Descriptor from '../Descriptor/Descriptor.js';
import EscapeRooms from '../EscapeRooms/EscapeRooms.js';
import GuideLines from '../GuideLines/GuideLines.js';

export default function () {

  useEffect(() => {
    document.getElementById("root").scrollIntoView();
  }, []);

  return (
    <motion.div
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
      <Descriptor />
      <EscapeRooms />
      <Carousel />
      <GuideLines />
    </motion.div>
  )
}