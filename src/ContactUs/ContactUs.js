import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faMobileAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons'
import GoogleMapModule from './GoogleMapModule.js'

export default function ContactUs() {

  useEffect(() => {
    document.getElementById("root").scrollIntoView();
  }, []);

  return (
      <motion.div className="ContactPage"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <div className="ContactInfo">
          <h1>
            Come <strong>VISIT</strong> Us!
          </h1>
          <div className="divisor"/>
          <div className="Directions">
            <li>King’s Eye Escape is located 2 minutes off the 405 and 5 minutes off the 22 in Westminster California.</li>
            <li>We’re in Westminster Center, right next to the Regency Movie Theaters, Baskin Robbins, L*L Hawaiian BBQ, and Tisane Tea bar.</li>
            <li>We’re 5 minutes away from the brand new Rodeo 39, an amazing indoor/outdoor dining facility that’s similar to Irvine Spectrum and Anaheim Packing District.</li>
          </div>
        </div>
        <div className="ContactHours">
          <div className="LeftMapModule">
            <div className="MapInfo">
              <FontAwesomeIcon className="icon" icon={faStopwatch} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '20px', height: '20px' }} />
              <p>Open 7 days a week 10:00am to 12:00am</p>
            </div>
            <div className="MapInfo">
              <a href="tel:+1-714-379-5889" style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none"}}>
                <FontAwesomeIcon className="icon" icon={faMobileAlt} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '20px', height: '20px' }} />
                <p style={{width: "100%"}}>(714) 379-5889</p>
              </a>
            </div>
            <div className="MapInfo">
              <a href="https://www.google.com/maps/place/King's+Eye+Escape/@33.7602943,-118.0105672,17z/data=!4m5!3m4!1s0x80dd29bc2f8c39a9:0x5fec90b71b27fafe!8m2!3d33.760483!4d-118.010439" target="_blank" style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none"}}>
                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '20px', height: '20px' }} />
                <p>6731 Westminster Blvd. Ste. 105 Westminster, CA 92683</p>
              </a>
            </div>
            <div className="MapInfo">
              <a href="mailto: service@kingseyeescape.com" style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none"}}>
                <FontAwesomeIcon className="icon" icon={faEnvelope} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '20px', height: '20px' }} />
                <p style={{width: "100%"}}>service@kingseyeesape.com</p>
              </a>
            </div>
          </div>
          <GoogleMapModule />
        </div>
        <div className="ConnectedInfo">
          <h1>Let's Get <strong>CONNECTED!</strong></h1>
          <div className="divisor"/>
          <p>Be the first to get product updates, announcements, news and lots of good content.</p>
          <div className="SocialMediaLinks">
            <div className="SocialMedia">
              <a href="https://www.facebook.com/KingsEyeEscapeRoom" target="_blank" style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none"}}>
                <FontAwesomeIcon className="icon"icon={faFacebookF} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '20px', height: '20px' }} />
              </a>
              <h2>FACEBOOK</h2>
              <a href="https://www.facebook.com/KingsEyeEscapeRoom" target="_blank" style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none"}}>
                <p>Like us</p>
              </a>
            </div>
            <div className="SocialMedia">
              <a href="https://www.instagram.com/KingsEyeEscape" target="_blank" style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none"}}>
                <FontAwesomeIcon className="icon"icon={faInstagram} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '20px', height: '20px' }} />
              </a>
                <h2>INSTAGRAM</h2>
              <a href="https://www.instagram.com/KingsEyeEscape" target="_blank" style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none"}}>
                <p>Follow us</p>
              </a>
            </div>
            <div className="SocialMedia">
              <a href="https://www.yelp.com/biz/kings-eye-escape-westminster" target="_blank" style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none"}}>
                <FontAwesomeIcon className="icon"icon={faYelp} size='1x'style={{ color: 'white', marginBottom: '25px', marginTop: '25px', width: '20px', height: '20px' }} />
              </a>
              <h2>YELP</h2>
              <a href="https://www.yelp.com/biz/kings-eye-escape-westminster" target="_blank" style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none"}}>
                <p>Review Us</p>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
  )
}