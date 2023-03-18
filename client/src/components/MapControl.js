import React, { useState, useEffect} from "react";
import "./App.css";
import "./Main/Main.css"
import AirbnbAPI from './Main/AirbnbAPI';
import GoogleMapsAPI from './Main/GoogleMapsAPI';

function MapControl (props){
  const {tripInfoLat, tripInfoLng, destinationLat, destinationLng, mapZoom} = props

  //Default location that will be rendered on page loading. 
  const userCurrentLocation = {
    center: {lat: destinationLat, lng: destinationLng}, 
    zoom: mapZoom
  }
  
  let currentlyVisibleState =  <GoogleMapsAPI 
                                userCurrentLocation = {userCurrentLocation}
                                />

    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    ) 
};

export default MapControl;