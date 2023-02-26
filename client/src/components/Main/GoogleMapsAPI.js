import React from "react";
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types"; 
import "./Main.css";  

const AnyReactComponent = ({ text }) => <div>{text}</div>; 

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
        >
        <AnyReactComponent
          lat =  {userCurrentLocation.center.lat}
          lng =  {userCurrentLocation.center.lng}
          text = "hello"
        />
        </GoogleMapReact>
      </div>
  )
}

GoogleMapsAPI.propTypes = { 
  currentLocation: PropTypes.object
}

export default GoogleMapsAPI;