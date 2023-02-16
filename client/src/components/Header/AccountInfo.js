import React from "react";
import "./Header.css"; 

function AccountInfo() { 
  return (
    <React.Fragment>
      <div class = "columns is-gapless">
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
    </div>
    </React.Fragment>
  )
}

export default AccountInfo;