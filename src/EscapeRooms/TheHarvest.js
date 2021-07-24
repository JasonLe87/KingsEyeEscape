import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiohazard, faTrophy, faClock, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function TheHarvest() {
  return (
      <div className="EscapeRoom">
        <img className="Poster" src="./TheHarvest.jpeg" alt="Loot Wars: The Harvest"/>
        <div className="Description">
          <header>The Harvest</header>
          <p>An emergent disease dubbed "The Illness" has launched the world into chaos. In order to increase your chances of survival, you joined an elite team of looters. You heard rumors of a big score and followed them to a warehouse deep inside Scavenger City.  Come find out what it really means to <strong>SURVIVE!</strong></p>
          <div className="Information">
            <div className="Info">
              <FontAwesomeIcon className="players" icon={faUserFriends} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px' }} />
              <p>2 - 8 / Recommended: 4-6</p>
            </div>
            <div className="Info">
              <FontAwesomeIcon className="clock" icon={faClock} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px'  }} />
              <p>60 Minutes</p>
            </div>
            <div className="Info">
              <FontAwesomeIcon className="trophy" icon={faTrophy} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px'  }} />
              <p>Difficulty: 5 out of 5</p>
            </div>
            <div className="Info">
              <FontAwesomeIcon className="biohazard" icon={faBiohazard} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px'  }} />
              <p>Genre: Post Apocalyptic / Survival</p>
            </div>
          </div>
          <Link to="/book_now">
            <div >BOOK NOW</div>
          </Link>
        </div>
      </div>
  )
}