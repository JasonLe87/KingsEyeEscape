import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBullseye } from '@fortawesome/free-solid-svg-icons'
import { motion, useCycle } from 'framer-motion'

export default function SafetyListItem ({res}) {

  const [show, setShow] = useState(false)
  const [x, cycleX] = useCycle(0, 90)
  const [y, cycleY] = useCycle(0, 1)
  const [display, cycleDisplay] = useCycle("hidden", "visible")

  const [forward, cycleForward] = useCycle(0, 120)
  const [spin, cycleSpin] = useCycle(0, 495)
  const [z, cycleZ] = useCycle(1, .25)

  const style = { color: 'white', marginBottom: '25px', marginTop: '25px' }

  return (
    <div className="SafetyMain" >
      <motion.div className="ListOf" onTap={ () => {
          setShow(!show)
          cycleX()
          cycleY()
          cycleForward()
          cycleSpin()
          cycleZ()
          cycleDisplay()
        }}>
        <motion.div animate={{rotate: x}} >
          <FontAwesomeIcon className="players" icon={faChevronRight} size='1x'style={style} />
        </motion.div>
        <motion.div animate={{rotate: spin, x: forward, opacity: z}} transition={{duration: .5}}>
          <p>{res.header}</p>
        </motion.div>
        <FontAwesomeIcon icon={faBullseye} size='3x' style={{visibility: display, color: 'white', margin: '0px 25px 25px 50px'}}/>
      </motion.div>
      <motion.div animate={{opacity: y}}>
        <p>{show && res.description}</p>
      </motion.div>
    </div>
  )
}