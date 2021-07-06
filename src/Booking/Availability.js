import React, {useState} from 'react'
import { motion } from 'framer-motion'

export default function Availability (props) {

  function Select() {
    props.setInstanceId(props.res.instance_id)
    props.createBasket()
    props.setModal(true)
  }

  return (
      <motion.div className="Container" style={{ backgroundColor: "rgb(49, 121, 204)" }}
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
        {props.res.start_time_alt}
      </motion.div>
  )
}