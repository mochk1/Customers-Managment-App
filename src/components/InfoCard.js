import React from 'react'
/* import "./Styles/Finance.css"; */


export default function InfoCard(props) {
    return (
        <div dir="rtl" className="main-div-Finance1">
        <div dir="rtl" className="InfoCard">
          <h2 className="toptitle">{props.title} </h2><br/>
          <h1 className="h1t">{props.data}</h1>
        </div>
      </div>
    )
}
