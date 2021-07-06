import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'

export default function SummaryListItem ({res}) {
  return (
    <div className="SummaryMain" >
      <div className="ListOf">
        <FontAwesomeIcon className="players" icon={faCrosshairs} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px' }} />
        <p>{res.header}</p>
      </div>
    </div>
  )
}