import React from 'react'
import { GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow } from "react-google-maps"
import GOOGLE_KEY from '../GoogleKey.js'

function Map() {
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{lat: 33.76064451391294, lng: -118.01039558468442}}
      defaultOptions={{
        streetViewControl: false,
        mapTypeControl: false
      }}
    >
      <Marker
        position={{lat: 33.76064451391294, lng: -118.01039558468442}}
      />
    </GoogleMap>
  )
}


const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function GoogleMapModule() {
  return (
    <div className="GoogleMap">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_KEY}`}
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '100%'}} />}
        mapElement={<div style={{height: '100%', width: "100%"}} />}
      />
    </div>
  )
}