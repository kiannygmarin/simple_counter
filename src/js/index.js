//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

import SecondsCounter from "./component/secondsCounter.jsx";

// función setInterval (() =>{}, 1000)

//render your react application
let contador = 0
setInterval (() =>{
    const one = Math.floor((contador/1) %10);
    const two = Math.floor((contador/10) %10);
    const three = Math.floor((contador/100) %10);
    const four = Math.floor((contador/1000) %10);
    const five = Math.floor((contador/10000) %10);
    const six = Math.floor((contador/100000) %10);
    contador += 1; 

    ReactDOM.render(<SecondsCounter digito1={one} digito2={two} digito3={three} digito4={four} digito5={five} digito6={six} />, document.querySelector("#app"));



}, 1000)

