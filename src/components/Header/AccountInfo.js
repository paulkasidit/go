import React from "react";
import "./Header.css"; 

function AccountInfo() { 
  return (
    <React.Fragment>
      <div class = "columns is-gapless">
        <div class = "column">
          <p>Hello, Paul!</p>
        </div>
        <div class = "column">
          <p>Account</p>
        </div>
        <div class = "column">
          <p>Your Trips</p>
        </div>
        <div class = "column">
          <p>Logout</p>
        </div>
    </div>
    </React.Fragment>
  )
}

export default AccountInfo;