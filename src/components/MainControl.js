import React from 'react';
import AirBnbAPI from './Main/AirbnbAPI';
import GoogleMapsAPI from './Main/GoogleMapsAPI';

class MainControl extends React.Component {
  
  render(){
    return(
      <React.Fragment>
        <GoogleMapsAPI/>
      </React.Fragment>
    )
  }
  
};

export default MainControl;