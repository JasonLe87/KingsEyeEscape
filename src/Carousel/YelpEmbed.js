import React, { useState, useEffect } from 'react'
import YelpReviews from './YelpReviews.js'
import { AnimatePresence, motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function Yelp() {
  const [curr, setCurr] = useState(0)

  function spinRight () {
    if (curr < 0) {
      setCurr(curr + 100.5)
    }
    console.log(window.innerWidth)
  }

  function spinLeft () {
    if (curr > -703.5) {
      setCurr(curr - 100.5)
    }
    console.log(window.innerWidth)
  }

  useEffect(() => {
    const script = document.createElement("script")
    const fjs = document.getElementsByTagName("script")[0]
    script.src = "https://www.yelp.com/embed/widgets.js"
    script.async = true
    fjs.parentNode.insertBefore(script, fjs)
  }, [])

  return (
    <AnimatePresence>
      <div className="YelpFrame">
        <motion.div className="YelpMain"
          animate={{
            x: curr+"vw"
          }}
          transition={{
            type:"tween",
            duration: .7
          }}
          >
          {YelpReviews.map((res, index) => {
            return (
              <span id={index} className="yelp-review" data-review-id={res.id} data-hostname="www.yelp.com">Read <a href={res.userid} rel="nofollow noopener">Jennifer K.</a>'s <a href={res.hrid} rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/yI01WKRrv0YFsNmosnfL2Q" rel="nofollow noopener">King's Eye Escape</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a></span>
              )
            })}
        </motion.div>
        <div style={{flexDirection: "row", alignSelf: "center"}}>
          <FontAwesomeIcon icon={faArrowCircleLeft} size="3x" onClick={spinRight} style={{color: "white", cursor: "pointer"}}/>
          <FontAwesomeIcon icon={faArrowCircleRight} size="3x" onClick={spinLeft} style={{color: "white", cursor: "pointer"}}/>
        </div>
      </div>
    </AnimatePresence>
  )
}
