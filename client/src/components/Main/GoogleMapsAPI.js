import React from "react";
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types"; 
import LocationMarker from "./LocationMarker";
import "./Main.css";  

function GoogleMapsAPI(props) { 

  const {userCurrentLocation, pinsList} = props;

  //Constants for MapBox Isochrone API 
  const urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox/';
  const lon = userCurrentLocation.center.lng; 
  const lat = userCurrentLocation.center.lat;
  const profile = 'driving'; 
  const minutes = '60'; 

  console.log(pinsList)
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
        {pinsList.map(pins => {
                return(
                  <LocationMarker
                  id = {pins.id}
                  lat = {pins.lat}
                  lng = {pins.lng}
                  text = {pins.text}
                  />
                )
              }
          )
        }
        </GoogleMapReact>
      </div>
  )
}


GoogleMapsAPI.propTypes = { 
  currentLocation: PropTypes.object,
  pinComponent: PropTypes.object
}

export default GoogleMapsAPI;