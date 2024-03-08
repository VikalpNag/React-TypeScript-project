import React from "react";
import './top.css'

const Top = () => {
    return <div className="top-container">
        <div className="city">
            <div className="name">Toronto</div>
            <div className="date-time">Thursday,06 March 2024 | 10:15 PM</div>
        </div>

        <div className="input-search">
            <input type="text" className="input" placeholder="Enter City Name" />
            <div className="btn">
                Search
            </div>
        </div>

    </div>
}

export default Top;