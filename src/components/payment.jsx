import React from "react";

import "./payment.css"


function Payment(props) {
  return (
    <div className='container'>
        <div className='inBox'>
            <p className="date"> {props.date}</p>
            <img src={props.logo} className="logo" />
        </div>
        <label className='case'>Case Study</label>
        <h1 className="title">{props.title} </h1>
         <h1 className="title"> {props.title2}</h1>
       <div className='secDiv'>
       <p className="brand">{props.brand}</p>
       <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7irvVLt5Ojklb2RkA2exSs5Nzolj7Fwf1UQ&usqp=CAU" alt="arro" />
       </div>
    </div>
  )
}

export default Payment