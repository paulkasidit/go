import React from "react";
import PropTypes from "prop-types";
import "./Header.css"; 

function AccountInfo(props) { 

  const { account, onClickingAccountInfo, onClickingYourTrips } = props;
  
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

AccountInfo.propTypes = { 
  account: PropTypes.func,
  onClickingAccountInfo: PropTypes.func,
  onClickingYourTrips: PropTypes.func,
}

export default AccountInfo;