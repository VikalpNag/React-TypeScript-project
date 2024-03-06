import React from "react";
import IconSearch from "./Assets/iconSearch";
import './top.css'

const Top = () => {
    return <div className="container">
        <div className="city">
            <div className="name">Toronto</div>
            <div className="date-time">Thursday,06 March 2024 | 10:15 PM</div>
        </div>

        <div className="input-search">
            <input type="text" className="input" placeholder="Enter City Name"/>
            <div className="btn">
                <IconSearch/>
            </div>
        </div>

    </div>
}

export default Top;