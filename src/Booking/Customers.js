import React, { useState } from 'react'
import Axios from 'axios'
import headers from '../ResovaKey.js'

export default function Customers() {
  const [customer, setCustomer] = useState(
    {
      "password": false,
      "mobile": "null",
      "first_name": "",
      "last_name": "",
      "email": ""
    }
  )
  const handleChange = (e) => {
    const {name, value} = e.target;
    setCustomer(prevState => ({
      ...prevState,
      [name] : value
    }))
  }

  function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let counter = 0
    if (e.target[0].value.length === 0) {
      e.target[0].style.borderBottom = "2px solid red"
    } else {
      e.target[0].style.borderBottom = "2px solid #9b9b9b"
      counter++
    }
    if (e.target[1].value.length === 0) {
      e.target[1].style.borderBottom = "2px solid red"
    } else {
      e.target[1].style.borderBottom = "2px solid #9b9b9b"
      counter++
    }
    if (e.target[2].value.length === 0 || !emailIsValid(e.target[2].value)) {
      e.target[2].style.borderBottom = "2px solid red"
    } else {
      e.target[2].style.borderBottom = "2px solid #9b9b9b"
      counter++
    }
    if ((e.target[3].value !== e.target[2].value) || !emailIsValid(e.target[3].value)) {
      e.target[3].style.borderBottom = "2px solid red"
    } else {
      e.target[3].style.borderBottom = "2px solid #9b9b9b"
      counter++
    }
    if (e.target[4].value.length != 10) {
      e.target[4].style.borderBottom = "2px solid red"
    } else {
      e.target[4].style.borderBottom = "2px solid #9b9b9b"
      counter++
    }
    if (!e.target[5].checked) {
      e.target[5].parentNode.style.textDecoration = "underline"
      e.target[5].parentNode.style.textDecorationColor = "red"
    } else {
      e.target[5].parentNode.style.textDecoration = ""
      e.target[5].parentNode.style.textDecorationColor = ""
      counter++
    }
    if (!e.target[6].checked) {
      e.target[6].parentNode.style.textDecoration = "underline"
      e.target[6].parentNode.style.textDecorationColor = "red"
    } else {
      e.target[6].parentNode.style.textDecoration = ""
      e.target[6].parentNode.style.textDecorationColor = ""
      counter++
    }
    if (counter === 7) {
      console.log(customer)
      Axios.post("/test", customer, {headers: headers})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  return (
      <form className="Form" onSubmit={handleSubmit} >
        <label className="Label" > First Name
          <input name="first_name" onChange={handleChange} className="InputField" placeholder="First Name"/>
        </label>
        <label className="Label"> Last Name
          <input name="last_name" onChange={handleChange} className="InputField" placeholder="Last Name"/>
        </label>
        <label className="Label"> Email Address<br />
          <input name="email" onChange={handleChange} className="InputField" placeholder="Email Address"/>
        </label>
        <label className="Label"> Confirm Email Address
          <input className="InputField" placeholder="Confirm Email Address"/>
        </label>
        <label className="Label"> Phone Number
          <input name="mobile" onChange={handleChange} type="number" className="InputField" placeholder="Phone Number"/>
        </label>
        <label className="LabelCheckbox">
          <input className="InputCheckbox" type="checkbox" className="" />
          Subscribe to receive emails from us with the latest promotions and to provide us feedback on your experience
        </label>
        <label className="LabelCheckbox">
          <input className="InputCheckbox" type="checkbox" className="" />
          Please confirm that you agree to our terms and conditions to complete your booking.
        </label>
        <button>CONTINUE</button>
      </form>
  )
}