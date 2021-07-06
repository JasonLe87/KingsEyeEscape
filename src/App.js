import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './Header/Header.js';
import EscapeRooms from './EscapeRooms/EscapeRooms.js';
import Yelp from './Yelp/Yelp.js';
import Footer from './Footer/Footer.js'
import AxeLounge from './AxeLounge/AxeLounge.js'
import ContactUs from './ContactUs/ContactUs.js'
import Calendar from './Booking/Calendar.js'
import PayPal from './PayPal/PayPal.js'
import BookRoom from './Booking/Main.js'
import Main from './Main/Main.js'
import Resova from './Resova/Main.js'

export default function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const [basketId, setBasketID] = useState(null)
  const [basketItem, setBasketItem] = useState([{
    item: {
      name: null
    },
    booking_date: null,
    booking_item: null,
    total_quantity: null,
    total: null
  }])

  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter inital={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/escape_rooms/">
            <EscapeRooms />
          </Route>
          <Route path="/axe_lounge">
            <AxeLounge />
          </Route>
          <Route path="/directions">
            <ContactUs />
          </Route>
          <Route path="/book_now">
            <BookRoom basketId={basketId} basketItem={basketItem} setBasketID={setBasketID} setBasketItem={setBasketItem}/>
          </Route>
          <Route path="/resova">
            <Resova />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};