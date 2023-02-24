import React from "react";
import GoogleMapReact from 'google-map-react';
import "./Main.css";  

function GoogleMapsAPI(props) { 

  const {currentLocation} = props;

  return (
    <React.Fragment>
        <GoogleMapReact
          bootstrapURLKeys = {{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            language:'en'
          }}
          center = {currentLocation.center}
          zoom = {currentLocation.zoom}
        />
    </React.Fragment>
  )
}


export default GoogleMapsAPI;