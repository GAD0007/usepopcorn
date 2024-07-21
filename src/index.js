import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import StarRating from "./StarRating";

// function TestComp () {
//   const [ratedCount,setRatedCount] = useState(0)

 
//   return(
//     <div>
//       <StarRating maxRating= {10} color={"pink"} onSetRating={setRatedCount}/>
// <p>this movie was rated {ratedCount} times</p>
//     </div>

//   )

// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
{/* <TestComp/>
    <StarRating />
    <StarRating
      color={"blue"}
      size={"20px"}
      messages={["poor", "fair", "good", "very good", "perfect"]}
      maxRating={5}
      defaultRating = {0}
    /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
