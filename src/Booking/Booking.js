import React, { useState } from 'react'
import Availability from './Availability.js'
import { motion, useCycle } from 'framer-motion'

export default function Booking(props) {
  const ImageLink = ["TheXtraction.jpeg", "TheHarvest.jpeg", "AxeLounge.jpg"]
  const Title = ["The X-Traction", "The Harvest", "Axe Throwing Lounge"]


  return (
    <div className="FlexColumnCenter">
      <div className="FlexColumnCenter Box">
        <h3 style={{textAlign: "center", color: "white"}}>{Title[props.data.item_id - 1]}</h3>
        <img className="Poster" src={ImageLink[props.data.item_id - 1]} alt="Escape Room Poster"/>
        <div className="FlexRowWrap">
          {props.data.instances.map((res, index) => {
            if (res.type === "available" && res.in_past === false) {
              return (
                <Availability key={index} res={res} setInstanceId={props.setInstanceId} setModal={props.setModal} createBasket={props.createBasket}/>
              )
            } else {
              return (
                <motion.div className="Container Unavailable" key={index}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >Sold Out</motion.div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}