import React from 'react'
import PlayerSelect from './PlayerSelect.js'

export default function Modal (props) {
  const style1 = {margin: "0", justifySelf: "start"}
  const style2 = {color: "black"}

  return (
    <div className="Modal">
      <div className="ModalContainer">
        <PlayerSelect players={props.players} setPlayers={props.setPlayers} setModal={props.setModal} bookInstance={props.bookInstance} setBasketPage={props.setBasketPage}/>
      </div>
    </div>
  )
}