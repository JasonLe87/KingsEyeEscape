import React, { useState, useEffect } from 'react'
import YelpReviews from './YelpReviews.js'
import { AnimatePresence, motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function Yelp() {
  const [curr, setCurr] = useState(0)

  function spinRight () {
    if (curr < 0) {
      setCurr(curr + 100)
    }
    console.log(window.innerWidth)
  }

  function spinLeft () {
    if (curr > -300) {
      setCurr(curr - 100)
    }
    console.log(window.innerWidth)
  }

  return (
    <AnimatePresence>
      <div className="YelpFrame">
        <h2 style={{textShadow: "2px 2px 2px white"}}>Check Out Why People <a href="https://m.yelp.com/biz/kings-eye-escape-westminster" style={{color:"red", textDecorationColor: "white"}}>LOVE</a> Us</h2>
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
              <div className="Yelp">
                <div className="YelpImgFrame">
                  <img src={index + ".jpeg"} alt="user photo"/>
                </div>
                  <h1>{res.name}</h1>
                <a href="https://m.yelp.com/biz/kings-eye-escape-westminster">
                  <p>{res.post.slice(0, 450) + "..."}</p>
                </a>
                <a href="https://m.yelp.com/biz/kings-eye-escape-westminster">
                  <img style={{width: "100px", height: "60px"}}src="logo-Yelp.jpg" alt="Yelp Logo"/>
                </a>
              </div>
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
