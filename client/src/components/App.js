import React from "react";
import HeaderControl from "./HeaderControl";
import MainControl from "./MainControl";
import TripInfoControl from "./TripInfoControl";
import 'bulma/css/bulma.min.css';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight); 
library.add(faLocationDot); 

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
              <div class = "columns">
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