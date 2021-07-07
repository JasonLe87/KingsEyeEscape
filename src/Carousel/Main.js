import React, { useState } from 'react'
import Reviews from './YelpReviews.js'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 0,
    width: "100vw",
    x: 0,
    opacity: 1,
    color: "white"
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

const images = ['LootWarsHarvest.jpeg', 'LootWarsXtraction.jpeg', 'AxeLounge.jpg']

export default function Main () {
  const [[page, direction], setPage] = useState([0, 0])
  const reviewsIndex = wrap(0, Reviews.length, page)
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <AnimatePresence inital={false} custom={direction}>
      <div className="Card" >
        <motion.div className="FlexColumnCenter Yelp"
          key={page}
          custom={direction}
          variants={variants}
          intial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          >
          <h2 style={{color: "black", textAlign: "center", background: "white", padding: "50px 0 0 0", marginBottom: "0"}}>
          Check Out Why People Love Us
          </h2>
          <img src={"YelpBackground2.png"} />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
