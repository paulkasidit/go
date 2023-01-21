import React from "react";
import HeaderControl from "./HeaderControl";
import MainControl from "./MainControl";
import TripInfoControl from "./TripInfoControl";
import 'bulma/css/bulma.min.css';
import './App.css';

function App(){
  return(
    <React.Fragment>
      <div class = "webContainer">
            <section class = "hero is-info is-primary">
                  <div class = "hero-body">
                    <HeaderControl/>
                </div>
            </section>
      <div class = "contentContainer">
        <section class = "section">
              <div class = "columns is-centered">
                <div class = "column is-half">
                    <MainControl/>
                  </div>
                <div class = "column is-one-quarter">
                  <TripInfoControl/>
                </div>
              </div>
        </section>
      </div>
    </div>

    </React.Fragment>
  )
}

export default App;