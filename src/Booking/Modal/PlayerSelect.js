import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function PlayerSelect (props) {
  const style = {backgroundColor: "rgb(60, 60, 60)", color: "white", alignItems: "center"}
  const Back = {width: "100px", padding: "7px 10px", background: "linear-gradient(to right, #8d0c0c,#ff0000)"}
  const Continue = {width: "100px", padding: "7px 10px", marginLeft: "10px"}

  return (
    <div className="EscapeRoom" style={style}>
        <img className="Poster" src="https://www.kingseyeescape.com/wp-content/uploads/2021/05/AdobeStock_164586851-copy-2048x1153.jpeg" alt="/"/>
        <div className="Description" style={style}>
          <header style={style}>The Harvest</header>
          <div className="Information" style={style}>
            <div className="Info" style={style}>
              <FontAwesomeIcon className="players" icon={faUserFriends} size='2x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px' }} />
              <p style={{fontSize: "1.5rem"}}>2 - 6</p>
            </div>
            <div className="Info" style={style}>
              <FontAwesomeIcon onClick={() => props.setPlayers(prev => Math.max((prev - 1), 2))} icon={faMinus} size='2x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px' }} />
              <p style={{fontSize: "1.5rem", border: "solid #38ef7d", margin: "0 20px", padding: "0 10px"}}>{props.players}</p>
              <FontAwesomeIcon onClick={() => props.setPlayers(prev => Math.min((prev + 1), 6))} icon={faPlus} size='2x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px' }} />
            </div>
            <div className="Info" style={style}>
              <button style={Back} onClick={() => props.setModal(false)}>Back</button>
              <Link to="/book_now/basket" style={{padding: "0px", margin: "0px", background: "none"}}>
                <button style={Continue} onClick={() => props.bookInstance()}>Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}