import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'

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

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://www.googletagmanager.com/gtag/js?id=UA-159548226-1";
  //   script.async = true;
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  //   gtag('config', 'UA-159548226-1');
  // }, [])

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
      <Helmet>
        <title></title>
        <meta name="description" content="Orange County's Newest Spot for Adrenaline-Pumping Fun! Escape rooms and Axe Throwing All-In-One Private Facility! Find yourself fighting to survive in a post-apocalyptic fantasy world." />
        <meta name="keywords" content="Escape room, Axe Throwing, Ax Throwing, Orange County, OC, Westminster, Escape Rooms, Team Building, Family Fun, Socal" />
      </Helmet>
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