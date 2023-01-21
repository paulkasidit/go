import React from 'react';
import "./App.css";
import "./Main/Main.css"
import AirBnbAPI from './Main/AirbnbAPI';
import GoogleMapsAPI from './Main/GoogleMapsAPI';

class MainControl extends React.Component {
  
  render(){
    return(
      <React.Fragment>
          <div class = "box">
            <GoogleMapsAPI/>
          </div>
      </React.Fragment>
    )
  }
  
};

export default MainControl;