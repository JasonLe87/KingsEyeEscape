import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiohazard, faTrophy, faClock, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function TheXtraction() {
  return (
      <div className="EscapeRoom">
        <img className="Poster" src="./TheXtraction.jpeg" alt="/"/>
        <div className="Description">
          <header>The X-Traction</header>
          <p>A mysterious figure linked to violent uprisings across the nation has captured a member of your Special Ops Unit. Now you must find and safely extract your fellow agent before their villanous plans play out. Will your operation be successful or will you end up in  <strong>The Aftermath?</strong></p>
          <div className="Information">
            <div className="Info">
              <FontAwesomeIcon className="players" icon={faUserFriends} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px' }} />
              <p>2 - 5</p>
            </div>
            <div className="Info">
              <FontAwesomeIcon className="clock" icon={faClock} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px'  }} />
              <p>60 Minutes</p>
            </div>
            <div className="Info">
              <FontAwesomeIcon className="trophy" icon={faTrophy} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px'  }} />
              <p>Difficulty: 4 out of 5</p>
            </div>
            <div className="Info">
              <FontAwesomeIcon className="biohazard" icon={faBiohazard} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px'  }} />
              <p>Genre: Rescue Mission</p>
            </div>
          </div>
          <Link to="/book_now">
            <div >COMING SOON</div>
          </Link>
        </div>
      </div>
  )
}