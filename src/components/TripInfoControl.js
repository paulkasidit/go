import React from 'react';
import TripInfo from './TripInfo/TripInfo';
import InputForm from './TripInfo/InputForm';

class TripInfoControl extends React.Component {
  
  render(){
    return(
      <React.Fragment>
        <InputForm/>
        <TripInfo/>
      </React.Fragment>
    )
  }
  
};

export default TripInfoControl;