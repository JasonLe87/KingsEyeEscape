import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import headers from '../../ResovaKey.js'
import Items from './Items.js'

export default function Basket( { basketItem, basketId } ) {

  useEffect(() => {
    Axios.get(`https://api.resova.us/v1/baskets/${basketId}`, { headers: headers })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  const style = {width: "100%", height: "auto", background: "linear-gradient(to right, #69686e,#d6d3e4)"}
  return (
    <div className="FlexColumnCenter">
      <div className="AddToBasket">
        <Link to="/book_now">
          <button style={style}>Add Another Booking</button>
        </Link>
      </div>
      <Items items={basketItem}/>
      <div className="Total"></div>
    </div>
  )
}