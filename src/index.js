import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ---------------calculating the current time------------------
const curDate = new Date();
const curTime = curDate.getHours();

//-----------------greeting message decision---------------------
let greeting = " ";
//conditional for time
if (curTime >= 1 && curTime < 12) {
  greeting = "Good Morning";
} else if (curTime >= 12 && curTime < 16) {
  greeting = "Good Afternoon";
} else if (curTime >= 16 && curTime < 23) {
  greeting = "Good Night";
} else {
  greeting = "not defined";
}

ReactDOM.render(
  //
  <>
    <div>
      <h1>Hello sir, {greeting}</h1>
    </div>
  </>,
  document.getElementById("root")
);
