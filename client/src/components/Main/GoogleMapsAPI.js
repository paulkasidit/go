import React from "react";
import GoogleMapReact from 'google-map-react';
import "./Main.css";  

function GoogleMapsAPI(props) { 

  const {currentLocation} = props;

  return (
      <div style = {{ height: '100%', width: '100%'}}>
        <GoogleMapReact
                  bootstrapURLKeys = {{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                    language:'en'
                  }}
                  yesIWantToUseGoogleMapApiInternals = {true}
                  center = {currentLocation.center}
                  zoom = {currentLocation.zoom}
            />
      </div>
  )
}


export default GoogleMapsAPI;