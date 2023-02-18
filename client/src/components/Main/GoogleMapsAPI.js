import React from "react";
import googleMapsImage from "../../img/googlemaps.png"
import "./Main.css";  

function GoogleMapsAPI() { 
  return (
    <React.Fragment>
      <div class = "box">
        <img src={googleMapsImage} alt="Google Maps example" />
      </div>
    </React.Fragment>
  )
}

export default GoogleMapsAPI;