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
      {/* <InfoWindow position={{lat: 33.76064451391294, lng: -118.01039558468442}}>
        <div style={{width: '200px', height: '100px', fontSize: '1rem', color: "black", textAlign: "center"}}>
          <div>
            King's Eye Escape
          </div>
          <div>
            6731 Westminster Blvd. Ste. 105
          </div>
          <div>
            Westminster, CA 92683
          </div>
        </div>
      </InfoWindow > */}
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