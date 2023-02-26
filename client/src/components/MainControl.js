import React, { useState} from "react";
import "./App.css";
import "./Main/Main.css"
import AirbnbAPI from './Main/AirbnbAPI';
import GoogleMapsAPI from './Main/GoogleMapsAPI';

function MainControl (){

  const currentLocation = {
    center: {lat: 40.73, lng: -73.93}, 
    zoom: 12
  }
  
  let currentlyVisibleState =  <GoogleMapsAPI currentLocation = {currentLocation}/>
  // <GoogleMapsAPI currentLocation = {currentLocation}/>

    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    ) 
};

export default MainControl;