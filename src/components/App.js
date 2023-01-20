import React from "react";
import HeaderControl from "./HeaderControl";
import MainControl from "./MainControl";
import TripInfoControl from "./TripInfoControl";

function App(){
  return(
    <React.Fragment>
      <HeaderControl/>
      <MainControl/>
      <TripInfoControl/>
    </React.Fragment>
  )
}

export default App;