import React, { useState } from "react";
import "./top.css";

const Top = (props:any) => {


    return (
        <div className="top-container">
            <div className="city">
                <div className="name">{props.newCname ? props.newCname : "Raipur"}</div>
                <div className="date-time">{props.dateTime ? props.dateTime : "20 June 2002"}</div>
            </div>

            <div className="input-search">
                <input
                    type="text"
                    className="input"
                    placeholder="Enter City Name"
                    value={props.cName}
                    onChange={props.setCname}
                />

                <div 
                className="btn" 
                onClick={props.btn}
                >
                    Search
                </div>
            </div>
        </div>
    );
};

export default Top;
