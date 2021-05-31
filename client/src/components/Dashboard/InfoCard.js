import React from 'react'
/* import "./Styles/Finance.css"; */


export default function InfoCard(props) {
    return (
        <div dir="rtl" className="main-div-Finance1 p-2 sm:p-4 bg-blue-200 m-2 rounded flex flex-shrink-0 text-center my-10 leading-3">
        <div dir="rtl" className="InfoCard ">
          <h2 className="toptitle">{props.title} </h2><br/>
          <h1 className="h1t text-xl">{props.data}</h1>
        </div>
      </div>
    )
}
