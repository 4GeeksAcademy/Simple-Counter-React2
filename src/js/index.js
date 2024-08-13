//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

  let numero = 0;
  setInterval(function(){ //numero=10
    const six = (Math.floor(numero / 100000))%10; //10/100000=0.00001->0->0%10=0
    const five = (Math.floor(numero / 10000))%10; //10/10000=0.001->0->0%10=0
    const four = (Math.floor(numero / 1000))%10; //10/1000=0.01->0->0%10=0
    const three = (Math.floor(numero / 100))%10; //10/100=0.1->0->0%10=0
    const two = (Math.floor(numero / 10))%10; //10/10=1->1%10=1
    const one =( Math.floor(numero / 1))%10;  //10/1=10->10%10=0
    
    console.log(six, five, four, three, two, one);//0 0 0 1 10
      
      numero++;
      ReactDOM.createRoot(document.getElementById('app')).render(<Home digit1={one} digit2={two} digit3={three} digit4={four} digit5={five} digit6={six}/>
      );
  },1000);


// let numero=0;

// setInterval(function(){
//     numero++;
//     console.log(numero);

//     //render your react application
// ReactDOM.createRoot(document.getElementById('app')).render(<Home digito1={numero}/>);

// },1000);


// //render your react application
// ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

