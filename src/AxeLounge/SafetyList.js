import React from 'react'
import SafetyListItem from './SafetyListItem.js'

export default function SafetyList() {
  return (
    <>
      {List.map((res, index) => {
        return (
          <SafetyListItem res={res} key={index}/>
        )
      })}
    </>
  )
}

const List = [
  {
    header: "CLOTHING",
    description: "Please wear properly-fitting clothing which allows you a good range of motion. CLOSED-TOE SHOES ARE REQUIRED for anyone entering the throwing area. Loose clothing such as hooded sweatshirts, shawls, scarves, and accessories can also create unsafe conditions by limiting mobility and/or snagging on objects during your event. For the same reason, brimmed hats are also discouraged. Your Dungeon Master will exercise his/her discretion when meeting your group – and you may be asked to remove any clothing items or accessories which could present a safety risk. We trust you and your group will cooperate."
  },
  {
    header: "WHILE THROWING",
    description: "You will be instructed in safety guidelines, throwing technique, and the structure of play upon arrival. \n• NEVER enter the throwing area until given permission to do so by your Dungeon Master. \n• NEVER cross the throwing line until axes have come to rest either in the target or on the floor. \n• NEVER throw until the participant in the adjacent lane has completed their throw. \n• NEVER leave the throwing lane with an axe. \nFood and beverages are not allowed inside the yellow safety line."
  },
  {
    header: "DUNGEON MASTER",
    description: "Follow all directions given by our Dungeon Masters and other staff. Should you forget a safety rule, you will receive friendly but firm reminders from them. However, repeated failure to follow safety rules may result in your removal from the throwing area and/or facility. Please take their direction seriously, as all rules are in place for your safety."
  },
  {
    header: "ROUGHHOUSING & HORSEPLAY",
    description: "We ask that all participants behave in a responsible and adult manner. We are here to have fun, but safety must come first. Our staff will issue warnings for any roughhousing or horseplay. Repeated warnings may result in removal from the throwing area and/or the premises."
  },
  {
    header: "ALCOHOL",
    description: "We ask that you arrive for your event alert and free from the influence of any substances, including alcohol. Please be aware that arrival under the influence or excessive consumption during your event WILL result in removal from the throwing area and/or the facility by our staff. Should this occur,  please realize that they are doing so not only for your safety, but for that of your group, other groups, and our staff."
  },
  {
    header: "AXES",
    description: "All throwing axes are provided by our Dungeon Masters. As required by our insurance company, patrons may not bring their own axes or any other throwing implements on to our premises."
  }
]