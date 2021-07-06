import React from 'react'
import { PayPalButton } from 'react-paypal-button'

export default function App() {
  const paypalOptions = {
    clientId: 'AQEaDcQjECss4ms8HmgcDwaLhMJvbLUABVHiKO3jPY3WMUj08xLG8Jw-rS1JShj14Fz5PkR2CjjvP_9M',
    intent: 'capture'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }
  return (
      <PayPalButton
        paypalOptions={paypalOptions}
        buttonStyles={buttonStyles}
        amount={10.00}
      />
  )
}