import React from 'react'
import Item from './Item.js'

export default function Items({items}) {
  console.log("items: ", items)
  return (
    <div className="Bag">
      {items.map((res, index) => {
        return (
          <Item item={res} key={index} />
        )
      })}
    </div>
  )
}