import React from "react";
import "./Header.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AccountInfo() { 
  return (
    <React.Fragment>
      <nav class = "breadcrumb is-right">
        
      </nav>
      <div class = "columns is-gapless">
        <div class = "column">
            <h5 class = "title is-5">Hello, Paul!</h5>
        </div>
        <div class = "column">
          <button class = "button is-outlined">
            <a href = "#">
              <span class = "icon-text">
                <span>Account</span>
                
              </span>
            </a>
          </button>
        </div>
        <div class = "column">
          <button class = "button is-outlined">
            <a href = "#">Your Trips</a>
          </button>
        </div>
        <div class = "column">
          <button class = "button is-outlined">
            <a href = "#">Logout</a>
          </button>
        </div>
    </div>
    </React.Fragment>
  )
}

export default AccountInfo;