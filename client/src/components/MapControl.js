import React, { useState, useEffect} from "react";
import "./App.css";
import "./Main/Main.css"
import AirbnbAPI from './Main/AirbnbAPI';
import GoogleMapsAPI from './Main/GoogleMapsAPI';

function MapControl (){
  //Hooks to set the current location for user
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  //Default location that will be rendered on page loading. 
  const userCurrentLocation = {
    center: {lat: lat, lng: lng}, 
    zoom: 12
  }
  
  //Getting the user's current location 
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)
    });
  },[])

  const markers = [ 
    {
      id:1, 
      lat: userCurrentLocation.center.lat,
      lng: userCurrentLocation.center.lng,
      text: "HOME"
    },
    {
      id:2, 
      lat: 39.5299, 
      lng: -119.8143, 
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