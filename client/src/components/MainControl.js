import React, { useState, useEffect} from "react";
import "./App.css";
import "./Main/Main.css"
import AirbnbAPI from './Main/AirbnbAPI';
import GoogleMapsAPI from './Main/GoogleMapsAPI';
import LocationMarker from "./Main/LocationMarker";

function MainControl (){
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
  })

  let currentlyVisibleState =  <GoogleMapsAPI 
                                userCurrentLocation = {userCurrentLocation}>
                               <LocationMarker 
                                lat = {userCurrentLocation.center.lat}
                                lng = {userCurrentLocation.center.lng}
                                text = "Hello"/>
                                </GoogleMapsAPI>    


    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    ) 
};

export default MainControl;