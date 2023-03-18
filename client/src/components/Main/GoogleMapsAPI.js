import React from "react";
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types"; 
import LocationMarker from "./LocationMarker";
import "./Main.css";  

function GoogleMapsAPI(props) { 

  const {userCurrentLocation} = props;

  return (
      <div class = "googleMapsContainer">
        <GoogleMapReact
                  bootstrapURLKeys = {{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                  }}
                  yesIWantToUseGoogleMapApiInternals = {true}
                  center = {userCurrentLocation.center}
                  zoom = {userCurrentLocation.zoom}
        />
      </div>
  )
}


GoogleMapsAPI.propTypes = { 
  currentLocation: PropTypes.object,
  pinComponent: PropTypes.object
}

export default GoogleMapsAPI;