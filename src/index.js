import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ---------------calculating the current time------------------
const curDate = new Date();
const curTime = curDate.getHours();

//-----------------cssStyling--------------------------

const cssStyle = {};

//-----------------greeting message decision---------------------
let greeting = " ";
//conditional for time
if (curTime >= 1 && curTime < 12) {
  greeting = "Good Morning";
  cssStyle.color = "Green";
} else if (curTime >= 12 && curTime < 16) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else if (curTime >= 16 && curTime < 23) {
  greeting = "Good Night";
  cssStyle.color = "Grey";
} else {
  greeting = "not defined";
}

ReactDOM.render(
  //
  <>
    <div>
      <h1>
        Hello sir, <span style={cssStyle}>{greeting}</span>{" "}
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
