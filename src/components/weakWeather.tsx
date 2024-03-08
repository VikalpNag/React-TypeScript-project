import React from "react";
import RainD from '../components/Assets/10d.png'
import '../components/weakWeather.css'


const WeakWeather = () => {
    return <div className="mainContainer">
            <p id="temp">Thursday</p>
            <img src={RainD} alt="" />
            <p id="temp">23-40</p>
            <p>Rainy</p>
        </div>
}
export default WeakWeather;