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
  
  const markers = [ 
    {
      id:1, 
      lat: tripInfoLat,
      lng: tripInfoLng,
      text: "HOME"
    },
    {
      id:2, 
      lat: destinationLat, 
      lng: destinationLng, 
      text: "DESTINATION"
    }
  ]

  let currentlyVisibleState =  <GoogleMapsAPI 
                                userCurrentLocation = {userCurrentLocation}
                                pinsList = {markers}
                                />

    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    ) 
};

export default MapControl;