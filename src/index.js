import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// calculating the current time
const curDate = new Date();
const curTime = curDate.getHours();

//greeting message decision

ReactDOM.render(
  //
  <>
    <div>
      <h1>Hello sir, {curTime}</h1>
    </div>
  </>,
  document.getElementById("root")
);
