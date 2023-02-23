import React from "react";
import "./TripInfo.css"; 

function InputForm() { 
  return (
    <React.Fragment>
      <div class = "box">
        <form>
          <input type = "text"
            name = "check-in-date"
            placeholder="From"
          />
          <input type = "text"
            name = "check-out-date"
            placeholder="Until"
          />
          <button type = "submit">Go!</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default InputForm;