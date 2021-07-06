import React from 'react'
import SummaryListItem from './SummaryListItem.js'

export default function SummaryList() {
  return (
    <>
      {List.map((res, index) => {
        return (
          <SummaryListItem res={res} key={index}/>
        )
      })}
    </>
  )
}

const List = [
  {
    header: "Closed-toed shoes are required to throw. No loose clothing, hoodies, or brimmed hats."
  },
  {
    header: "High heels are prohibited (boots are OK)."
  },
  {
    header: "Follow ALL of the Dungeon Masters directions."
  },
  {
    header: "Never enter the throwing area without permission from a Dungeon Master."
  },
  {
    header: "Never cross the throwing line until the Dungeon Master approves."
  },
  {
    header: "Never throw until both participants in your area are behind the throwing line."
  },
  {
    header: "No food or beverages in front of yellow safety line."
  },
  {
    header: "No roughhousing or horseplay."
  },
  {
    header: "Our insurance prohibits all guests from bringing your own axe."
  }
]