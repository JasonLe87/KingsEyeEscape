import React, {useState, useEffect} from 'react'
import { Route, Switch, useLocation, Link } from 'react-router-dom'
import Bookings from './Bookings.js'
import Customers from './Customers.js'
import Calendar from 'react-calendar'
import Axios from 'axios'
import Modal from './Modal/Modal.js'
import Basket from './Basket/Basket.js'
import headers from '../ResovaKey.js'

export default function Main( { basketId, basketItem, setBasketID, setBasketItem } ) {

  const [value, setValue] = useState(new Date())
  const [bookingDate, setBookingDate] = useState(new Date((new Date()).getTime() - ((new Date()).getTimezoneOffset())*60*1000).toISOString().split('T')[0])
  const [data, setData] = useState([])

  const [modal, setModal] = useState(false)

  const [players, setPlayers] = useState(2)
  const [instanceId, setInstanceId] = useState('')
  const [pricingCategoryId, setPricingCategoryId] = useState(9)

  const [total, setTotal] = useState(0)

  function onChange(nextValue) {
    let yourDate = nextValue
    let offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    setValue(nextValue)
    setBookingDate(yourDate.toISOString().split('T')[0])
  }

  useEffect( ()=> {
    getCalendar()
  }, [bookingDate])


  function getCalendar() {
    Axios.post(`/schedule`, {params: {start_date: bookingDate, end_date: bookingDate, "item_ids[0]": 1, "item_ids[1]": 2, "item_ids[2]": 3}, headers: headers})
    .then(res => {
      setData(res['data']['data'][bookingDate]['items'])
    })
    .catch((err) => console.log(err))
  }

  function createBasket() {
    if (!basketId) {
      Axios.post(`/createBasket`, {})
        .then(res => setBasketID(res.data.id))
        .then(setModal(false))
        .catch(err => console.log(err))
    }
  }

  function bookInstance() {
    Axios.post(`/bookInstance/${basketId}`, {
      quantities: [{pricing_category_id: pricingCategoryId, quantity: players}],
      instance_id: instanceId
      })
      .then(res => setBasketItem(item => [...item, res.data]))
      .catch(err => console.log(err))
  }

  const location = useLocation()

  return (
    <div className="FlexColumnCenter Booking">
      <Switch location={location} key={location.pathname}>
        <Route path="/book_now/basket">
        </Route>
        <Route path="/">
          <div className="FlexColumnCenter">
            <h1 style={{textShadow: "0 0 20px white"}}>Schedule</h1>
            <Calendar
            onChange={onChange}
            value={value}
            minDate={new Date}
            />
          </div>
          <Bookings data={data} setInstanceId={(id) => setInstanceId(id)} setModal={setModal} createBasket={createBasket}/>
          <div className="Cover" />
          <Link to="/resova">
            <button className="Continue" >Begin Booking</button>
          </Link>
        </Route>

      </Switch>
      <div className="TermsConditions"></div>
    </div>
  )
}