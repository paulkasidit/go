import React from "react";
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types"; 
import "./Main.css";  

function GoogleMapsAPI(props) { 

  const {currentLocation} = props;

  return (
      <div class = "googleMapsContainer">
        <GoogleMapReact
                  bootstrapURLKeys = {{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                  }}
                  yesIWantToUseGoogleMapApiInternals = {true}
                  center = {currentLocation.center}
                  zoom = {currentLocation.zoom}
            />
      </div>
  )
}

GoogleMapsAPI.propTypes = { 
  currentLocation: PropTypes.object
}

export default GoogleMapsAPI;