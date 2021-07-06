import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Header() {
  const [togglemenu, setToggleMenu] = useState(true)
  const [topLine, setTopLine] = useState({})
  const [midLine, setMidLine] = useState({})
  const [botLine, setBotLine] = useState({})
  const [navLink, setNavLink] = useState({x:-1000, opacity: 0})
  const [display, setDisplay] = useState({display: "none"})

  const ToggleDropdown = (e) => {
      !togglemenu ? setToggleMenu(true) : setToggleMenu(false)
      togglemenu ? setTopLine({rotate: -45, y: 16}) : setTopLine({})
      togglemenu ? setMidLine({opacity: 0}) : setMidLine({})
      togglemenu ? setBotLine({rotate: 45, y: -16}) : setBotLine({})
      togglemenu ? setNavLink({x: 0, opacity: 1}) : setNavLink({x:-1000, opacity: 0})
      togglemenu ? setDisplay({display: "flex"}) : setDisplay({display: "none"})

  }

  return (
    <div className="Header">
      <div className="moduleLeft">
        <Link to="/">
          <img className="logo" src="./Logo.png" alt="/"/>
        </Link>
        <div className="menu" onClick={(e)=> ToggleDropdown(e)}>
          <motion.div animate={topLine} className="line"/>
          <motion.div animate={midLine} className="line"/>
          <motion.div animate={botLine} className="line"/>
        </div>
      </div>
      <div className="dropDownRight" style={display}>
        <motion.div animate={navLink} transition={{type: "spring", delay: .2}} className="navLink">
          <Link to="/escape_rooms" onClick={()=> ToggleDropdown()}>
            ESCAPE ROOMS
          </Link>
        </motion.div>
        <motion.div animate={navLink} transition={{type: "spring", delay: .3}} className="navLink">
          <Link to="/axe_lounge" onClick={()=> ToggleDropdown()}>
            AXE LOUNGE
          </Link>
        </motion.div>
        <motion.div animate={navLink} transition={{type: "spring", delay: .4}} className="navLink">
          <Link to="/directions" onClick={()=> ToggleDropdown()}>
            DIRECTIONS
          </Link>
        </motion.div>
        <motion.div animate={navLink} transition={{type: "spring", delay: .5}} className="navLink">
          <Link to="/book_now" onClick={()=> ToggleDropdown()}>
            BOOK NOW
          </Link>
        </motion.div>
      </div>
      <div className="moduleRight">
        <div className="navLink">
          <Link to="/escape_rooms" >
            ESCAPE ROOMS
          </Link>
        </div>
        <div className="navLink">
          <Link to="/axe_lounge" >
            AXE LOUNGE
          </Link>
        </div>
        <div className="navLink">
          <Link to="/directions" >
            DIRECTIONS
          </Link>
        </div>
        <div className="navLink">
          <Link to="/book_now" >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;